"use strict";

import Characters from './characters.js';

var PlayerState = {
    NEUTRAL: 0,
    CROUCHING: 1,
    BLOCKING: 2,
    CROUCH_BLOCKING: 3,
    ATTACKING: 4,
    HITSTUN: 5,
}

var FrameType = {
    NEUTRAL: 0,
    ATTACK_STARTUP: 1,
    ATTACK_ACTIVE: 2,
    ATTACK_ACTIVE_NO_HITBOX: 3,
    ATTACK_RECOVERY: 4,
    HITSTUN: 5,
    BLOCKSTUN: 6
}

function arrSum(arr) {
    return arr.reduce((a, b) => {a + b});
}

function getAttackFrameType(move, duration) {
    var activeStart = move.startup - 1;

    if(duration <= activeStart) {
        return FrameType.ATTACK_STARTUP;
    } else if(duration <= activeStart + move.total_active) {
        // if the attack has multiple hits, make sure to return the right type
        var count = 0;
        for(var i = 0; i < move.active.length; i++) {
            count += Math.abs(move.active[i]);
            if(duration <= activeStart + count) {
                return move.active[i] > 0 ? FrameType.ATTACK_ACTIVE : FrameType.ATTACK_ACTIVE_NO_HITBOX;
            }
        }

    } else if(duration <= activeStart + move.total_active + move.recovery) {
        return FrameType.ATTACK_RECOVERY;
    } else {
        return FrameType.NEUTRAL;
    }
}

function lastFrameOfMove(frame, state) {
    var move = state.move;
    var duration = frame - state.startFrame + 1;
    return duration == move.startup - 1 + move.total_active + move.recovery;
}

function startOfHitbox(move, duration) {
    var activeStart = move.startup - 1;
    var count = 0;
    for(var i = 0; i < move.active.length; i++) {
        if(duration == activeStart + count) {
            return true;
        }
        count += Math.abs(move.active[i]);
    }
    return false;
}

function canAct(state) {
    return state.type === PlayerState.NEUTRAL
        || (isBlocking(state) && state.blockstun === 0);
}

function cancellable(frameType) {
    return frameType === FrameType.ATTACK_ACTIVE
        || frameType === FrameType.ATTACK_ACTIVE_NO_HITBOX;
}

// can attack if in an acting state, or if the current move has connected and
// the gatling combination is allowed.
function canAttack(frame, state, action) {
    return canAct(state) ||
        (state.type === PlayerState.ATTACKING
        && state.connected
        && cancellable(getAttackFrameType(state.move, frame - state.startFrame + 1))
        && Characters.gatlingAllowed(state.move, action));
}

function isBlocking(state) {
    return state.type === PlayerState.BLOCKING
        || state.type === PlayerState.CROUCH_BLOCKING;
}

function isCrouching(state) {
    return state.type === PlayerState.CROUCHING
        || state.type === PlayerState.CROUCH_BLOCKING;
}

function processStateChangingActions(frame, actions, states, characters) {
    for(var player = 0; player <= 1; player++) {    
        var action = actions[player][frame];

        // no action to be found
        if(!action) {
            continue;

        // crouch
        } else if(action == "_C" && canAct(states[player])) {
            states[player] = {type: PlayerState.CROUCHING};

        // regular block
        } else if(action == "_B" && canAct(states[player])) {
            states[player] = {
                type: PlayerState.BLOCKING,
                blockstun: 0
            };

        // all other actions treated as attacks
        } else {
            if(canAttack(frame, states[player], action)) {
                var move = Characters.data[characters[player]].moves[action];
                states[player] = {
                    type: PlayerState.ATTACKING,
                    startFrame: frame,
                    move: move,
                    connected: false
                };
            }
        }
    }
}

function processFrameType(frame, states, frames) {
    for(var player = 0; player <= 1; player++) {
        var other = 1 - player;
        var frameType = FrameType.NEUTRAL;

        // for attacking frames
        if(states[player].type == PlayerState.ATTACKING) {
            frameType = getAttackFrameType(states[player].move, frame - states[player].startFrame + 1);
        }

        else if(states[player].type == PlayerState.HITSTUN) {
            frameType = FrameType.HITSTUN;
        }

        else if(isBlocking(states[player]) && states[player].blockstun > 0) {
            frameType = FrameType.BLOCKSTUN;
        }

        frames[player].push(frameType);
    }
}

function activateHitboxes(frame, states) {
    for(var player = 0; player <= 1; player++) {
        // if this is the start of any hit, activate the hitbox
        if(states[player].type == PlayerState.ATTACKING) {
            if(startOfHitbox(states[player].move, frame - states[player].startFrame + 1)) {
                states[player].connected = false;
            }
        }
    }
}

function processStateInteraction(frame, states, frames, characters) {
    var newStates = [Object.assign({}, states[0]), Object.assign({}, states[1])];
    for(var player = 0; player <= 1; player++) {
        var other = 1 - player;

        if(states[player].type == PlayerState.ATTACKING) {
            var move = states[player].move;
            var frameType = getAttackFrameType(move, frame - states[player].startFrame + 1);

            // if we have active frames and they aren't blocking,
            // and we haven't hit them with the move, put them in hitstun
            if(frameType == FrameType.ATTACK_ACTIVE 
                && !isBlocking(states[other])
                && !states[player].connected) {

                newStates[player].connected = true;
                var hitstunAmt = Characters.hitstun(move.level, isCrouching(states[other]));
                // cornercase: if already in hitstun, we need to add +1 frame because
                // we decrement one too many times
                if(states[other].hitstun > 0)
                    hitstunAmt++;

                newStates[other] = {
                    type: PlayerState.HITSTUN,
                    hitstun: hitstunAmt
                };
            }

            // if we have active frames and they are blocking,
            // put them in blockstun
            else if(frameType == FrameType.ATTACK_ACTIVE
                && isBlocking(states[other])
                && !states[player].connected) {

                newStates[player].connected = true;
                var blockstunAmt = Characters.blockstun(move.level, false);
                // cornercase: if already blocking, we need to add +1 frame because
                // we decrement one too many times
                if(states[other].blockstun > 0)
                    blockstunAmt++;
                newStates[other].blockstun = blockstunAmt;
            }

            // if last frame of move, return to neutral
            if(lastFrameOfMove(frame, states[player])) {
                newStates[player] = { type: PlayerState.NEUTRAL };
            }
        }

        // if in hitstun, decrease hitstun timer and change to neutral if necessary
        else if(states[player].type == PlayerState.HITSTUN) {
            newStates[player].hitstun -= 1;
            if(newStates[player].hitstun == 0) {
                newStates[player] = { type: PlayerState.NEUTRAL };
            }
        }

        // if in hitstun, decrease hitstun timer and change to neutral if necessary
        else if(isBlocking(states[player]) && states[player].blockstun > 0) {
            newStates[player].blockstun -= 1;
            if(newStates[player].blockstun == 0) {
                newStates[player] = { type: PlayerState.NEUTRAL };
            }
        }
    }

    states[0] = newStates[0];
    states[1] = newStates[1];
}

// returns the calculated states for each frame for both characters
// as two arrays.
function calculateFrames(characters, actions) {
    var states = [{type: PlayerState.NEUTRAL}, {type: PlayerState.NEUTRAL}];
    var frames = [[],[]];
    var curFrame = 0;
    var done = false;

    while(!done) {
        // change states
        processStateChangingActions(curFrame, actions, states, characters);

        // write frame types
        processFrameType(curFrame, states, frames);

        activateHitboxes(curFrame, states);

        // resolve states
        processStateInteraction(curFrame, states, frames, characters);

        // finish if both players in neutral and no more actions
        if(actions[0][curFrame] === undefined 
            && actions[1][curFrame] === undefined
            && canAct(states[0])
            && canAct(states[1])) {

            done = true;

            // add one additional neutral frame, for clarity.
            frames[0].push(FrameType.NEUTRAL);
            frames[1].push(FrameType.NEUTRAL);
        }
        curFrame++;
        // failsafe to prevent infinite loop bugs
        if(curFrame > 100) {
            done = true;
        }
    }

    return frames;
}

var Rules = {
    calculateFrames: calculateFrames,
    FrameType: FrameType
};

export default Rules