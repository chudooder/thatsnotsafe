"use strict";

import Characters from './characters.js';

var PlayerState = {
    NEUTRAL: 0,
    BLOCKING: 2,
    INSTANT_BLOCKING: 3,
    FAULTLESS_DEFENSE: 4,
    ATTACKING: 8,
    HITSTUN: 9,
    JUMPSQUAT: 10,
    LANDING_RECOVERY: 11
}

var FrameType = {
    NEUTRAL: 0,
    ATTACK_STARTUP: 1,
    ATTACK_ACTIVE: 2,
    ATTACK_ACTIVE_NO_HITBOX: 3,
    ATTACK_RECOVERY: 4,
    HITSTUN: 5,
    BLOCKSTUN: 6,
    JUMPSQUAT: 7,
    LANDING_RECOVERY: 8
}

var Stance = {
    STANDING: 0,
    CROUCHING: 1
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
    var activeStart = move.startup;
    var count = 0;
    for(var i = 0; i < move.active.length; i++) {
        if(move.active[i] > 0 && duration == activeStart + count) {
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

function isStartupFrames(frameType) {
    return frameType === FrameType.ATTACK_STARTUP;
}

function isActiveFrames(frameType) {
    return frameType === FrameType.ATTACK_ACTIVE
        || frameType === FrameType.ATTACK_ACTIVE_NO_HITBOX;
}

function isRecoveryFrames(frameType) {
    return frameType === FrameType.ATTACK_RECOVERY
}

// can attack if in an acting state, or if the current move has connected and
// the gatling combination is allowed.
function canAttack(frame, state, newMove) {
    return canAct(state) ||
        // regular gatling condition
        (state.type === PlayerState.ATTACKING
        && state.connected
        && !isStartupFrames(getAttackFrameType(state.move, frame - state.startFrame + 1))
        && Characters.attackCancelAllowed(state.move, newMove));
}

function canJump(frame, state) {
    return canAct(state) ||
        // can jump if attacking with JC-able move
        (state.type === PlayerState.ATTACKING
        && state.connected
        && isActiveFrames(getAttackFrameType(state.move, frame - state.startFrame + 1))
        && Characters.jumpCancelAllowed(state.move));
}

function isBlocking(state) {
    return state.type === PlayerState.BLOCKING
        || state.type === PlayerState.INSTANT_BLOCKING
        || state.type === PlayerState.FAULTLESS_DEFENSE
}

function isInstantBlocking(state) {
    return state.type === PlayerState.INSTANT_BLOCKING;
}

function isFaultlessBlocking(state) {
    return state.type === PlayerState.FAULTLESS_DEFENSE;
}

function isCrouching(state) {
    return state.stance === Stance.CROUCHING;
}

function isAirborne(state) {
    return state.airborne;
}

function blocksMove(state, move) {
    return isBlocking(state) && 
        (!isAirborne(state) && !isCrouching(state) && move.guard != "Low"              // high blocks high moves
        || !isAirborne(state) && isCrouching(state) && !move.guard.includes('High')    // low blocks low moves
        || isAirborne(state) && isFaultlessBlocking(state)                             // air FD blocks any move
        || isAirborne(state) && isBlocking(state) && move.guard.includes('Air'));      // air blocks air moves
}

function processInitialStateChangingCommands(frame, commands, states, characters) {
    for(var player = 0; player <= 1; player++) {    
        var command = commands[player][frame];

        // no command to be found
        if(!command) {
            continue;

        // crouch (stance change only)
        } else if(command == "_C" && canAct(states[player])) {
            states[player].stance = Stance.CROUCHING;
        // stand (stance change only)
        } else if(command == "_S" && canAct(states[player])) {
            states[player].stance = Stance.STANDING;
        
        // block
        } else if(command == "_B" && canAct(states[player])) {
            states[player].type = PlayerState.BLOCKING;
            states[player].blockstun = 0;
        // block
        } else if(command == "_SB" && canAct(states[player])) {
            states[player].stance = Stance.STANDING;
            states[player].type = PlayerState.BLOCKING;
            states[player].blockstun = 0;
        // block
        } else if(command == "_CB" && canAct(states[player])) {
            states[player].stance = Stance.CROUCHING;
            states[player].type = PlayerState.BLOCKING;
            states[player].blockstun = 0;

        // instant block
        } else if(command == "_IB" && canAct(states[player])) {
            states[player].type = PlayerState.INSTANT_BLOCKING;
            states[player].blockstun = 0;
        // stand instant block
        } else if(command == "_SIB" && canAct(states[player])) {
            states[player].stance = Stance.STANDING;
            states[player].type = PlayerState.INSTANT_BLOCKING;
            states[player].blockstun = 0;
        // crouch instant block
        } else if(command == "_CIB" && canAct(states[player])) {
            states[player].stance = Stance.CROUCHING;
            states[player].type = PlayerState.INSTANT_BLOCKING;
            states[player].blockstun = 0;

        // standing faultless defense
        } else if(command == "_FD" && canAct(states[player])) {
            states[player].type = PlayerState.FAULTLESS_DEFENSE;
            states[player].blockstun = 0;
        // standing faultless defense
        } else if(command == "_SFD" && canAct(states[player])) {
            states[player].stance = Stance.STANDING;
            states[player].type = PlayerState.FAULTLESS_DEFENSE;
            states[player].blockstun = 0;
        // standing faultless defense
        } else if(command == "_CFD" && canAct(states[player])) {
            states[player].stance = Stance.CROUCHING;
            states[player].type = PlayerState.FAULTLESS_DEFENSE;
            states[player].blockstun = 0;

        // jump
        } else if(command == "_J" && canJump(frame, states[player])) {
            states[player].type = PlayerState.JUMPSQUAT;
            states[player].jumpsquat = Characters.data[characters[player]].jumpStartup;

        // all other commands treated as attacks
        } else if(!command.startsWith("_")) {
            var newMove = Characters.data[characters[player]].moves[command];
            if(canAttack(frame, states[player], newMove)) {
                states[player].type = PlayerState.ATTACKING;
                states[player].startFrame = frame;
                states[player].move = newMove;
                states[player].connected = false;
            }
        }
    }
}

function processFrameType(frame, states, frames) {
    for(var player = 0; player <= 1; player++) {
        var other = 1 - player;
        var frameType = {
            type: FrameType.NEUTRAL,
            airborne: false
        };

        if(states[player].airborne) {
            frameType.airborne = true;
        }

        // for attacking frames
        if(states[player].type == PlayerState.ATTACKING) {
            frameType.type = getAttackFrameType(states[player].move, frame - states[player].startFrame + 1);
            if(startOfHitbox(states[player].move, frame - states[player].startFrame + 1)) {
                frameType.startOfHitbox = true;
            }
        }

        else if(states[player].type == PlayerState.HITSTUN) {
            frameType.type = FrameType.HITSTUN;
            frameType.stun = states[player].hitstun;
        }

        else if(isBlocking(states[player]) && states[player].blockstun > 0) {
            frameType.type = FrameType.BLOCKSTUN;
            frameType.stun = states[player].blockstun;
        }

        else if(states[player].type == PlayerState.JUMPSQUAT) {
            frameType.type = FrameType.JUMPSQUAT;
        }

        else if(states[player].type == PlayerState.LANDING_RECOVERY) {
            frameType.type = FrameType.LANDING_RECOVERY;
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
            var duration = frame - states[player].startFrame + 1;
            var level = move.level[Characters.hitboxIndex(move, duration)];
            var frameType = getAttackFrameType(move, duration);

            // if we have active frames, they aren't blocking correctly,
            // and we haven't hit them with the move, put them in hitstun
            if(frameType == FrameType.ATTACK_ACTIVE 
                && (!isBlocking(states[other]) || !blocksMove(states[other], move))
                && !states[player].connected) {

                newStates[player].connected = true;
                var hitstunAmt = Characters.hitstun(
                    level,
                    isCrouching(states[other]),
                    isAirborne(states[other]));
                // cornercase: if already in hitstun, we need to add +1 frame because
                // we decrement one too many times later.
                if(states[other].hitstun > 0)
                    hitstunAmt++;

                newStates[other].type = PlayerState.HITSTUN;
                newStates[other].hitstun = hitstunAmt;
            }

            // if we have active frames and they are blocking,
            // put them in blockstun
            else if(frameType == FrameType.ATTACK_ACTIVE
                && blocksMove(states[other], move)
                && !states[player].connected) {

                newStates[player].connected = true;
                var blockstunAmt = Characters.blockstun(
                    level, 
                    isInstantBlocking(states[other]),
                    isFaultlessBlocking(states[other]),
                    isAirborne(states[other]));
                // cornercase: if already blocking, we need to add +1 frame because
                // we decrement one too many times
                if(states[other].blockstun > 0)
                    blockstunAmt++;
                newStates[other].blockstun = blockstunAmt;
            }

            // if last frame of move, return to neutral
            if(lastFrameOfMove(frame, states[player])) {
                newStates[player].type = PlayerState.NEUTRAL;
            }
        }

        // if in hitstun, decrease hitstun timer and change to neutral if necessary
        else if(states[player].type == PlayerState.HITSTUN) {
            newStates[player].hitstun -= 1;
            if(newStates[player].hitstun == 0) {
                newStates[player].type = PlayerState.NEUTRAL;
            }
        }

        // if in blockstun, decrease hitstun timer and change to neutral if necessary
        else if(isBlocking(states[player]) && states[player].blockstun > 0) {
            newStates[player].blockstun -= 1;
            if(newStates[player].blockstun == 0) {
                newStates[player].type = PlayerState.NEUTRAL;
            }
        }

        // if in jumpsquat, decrease jumpsquat timer
        else if(states[player].type == PlayerState.JUMPSQUAT) {
            newStates[player].jumpsquat -= 1;
            if(newStates[player].jumpsquat == 0) {
                newStates[player].type = PlayerState.NEUTRAL;
                newStates[player].airborne = true;
            }
        }

        else if(states[player].type == PlayerState.LANDING_RECOVERY) {
            newStates[player].landingRecovery -= 1;
            if(newStates[player].landingRecovery == 0) {
                newStates[player].type = PlayerState.NEUTRAL;
            }
        }
    }

    states[0] = newStates[0];
    states[1] = newStates[1];
}

// These are for special case commands that should take place at the end of a frame.
// For example, the _L (land) command is processed here so that users can input
// moves on the first available neutral frame after landing.
function processFinalStateChangingCommands(frame, commands, states, characters) {
    for(var player = 0; player <= 1; player++) {
        var command = commands[player][frame];

        // no command to be found
        if(!command) {
            continue;

        // land
        } else if(command == "_L" && states[player].airborne) {
            if(states[player].type == PlayerState.ATTACKING && states[player].move.recovery_after_landing) {
                states[player].type = PlayerState.LANDING_RECOVERY;
                states[player].landingRecovery = states[player].move.recovery_after_landing;
            } else {
                states[player].type = PlayerState.NEUTRAL;
            }
            states[player].airborne = false;
        }
    }
}

// returns the calculated states for each frame for both characters
// as two arrays.
function calculateFrames(characters, commands) {
    var states = [
        {type: PlayerState.NEUTRAL, airborne: false}, 
        {type: PlayerState.NEUTRAL, airborne: false}];
    var frames = [[],[]];
    var curFrame = 0;
    var done = false;

    while(!done) {
        // change states
        processInitialStateChangingCommands(curFrame, commands, states, characters);

        // write frame types
        processFrameType(curFrame, states, frames);

        activateHitboxes(curFrame, states);

        // resolve states
        processStateInteraction(curFrame, states, frames, characters);

        // final state changing commands
        processFinalStateChangingCommands(curFrame, commands, states, characters);


        // finish if both players in neutral and no more commands
        if(commands[0][curFrame] === undefined 
            && commands[1][curFrame] === undefined
            && canAct(states[0])
            && canAct(states[1])) {

            done = true;

            // add one additional neutral frame, for clarity.
            frames[0].push({type: FrameType.NEUTRAL});
            frames[1].push({type: FrameType.NEUTRAL});
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