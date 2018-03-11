import Rules from './rules.js';
import Characters from './characters.js';

var Tests = (() => {

var FrameType = Rules.FrameType;

var numTests = 0;
var numPassed = 0;

function assertEqual(val1, val2) {
    if(val1 != val2) {
        throw "Expected:\n" + val1 + "\nbut got\n" + val2; 
    }
}

function assertArrays(arr1, arr2) {
    if(arr1.length != arr2.length) {
        throw "Expected:\n" + arr1 + "\nbut got\n" + arr2;
    }
    for(var i=0; i<arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            throw "Expected:\n" + arr1 + "\nbut got\n" + arr2;
        }
    }
}

function assertArraysWeak(arr1, arr2) {
    for(var i=0; i<Math.min(arr1.length, arr2.length); i++) {
        if(arr1[i] != arr2[i]) {
            throw "Expected:\n" + arr1 + "\nbut got\n" + arr2;
        }
    }
}

function expand(exparr) {
    var res = []
    for(var i = 0; i < exparr.length; i++) {
        var rep = exparr[i][1];
        for(var j = 0; j < rep; j++) {
            res.push(exparr[i][0]);
        }
    }
    return res;
}

function toTypeArray(arr) {
    var res = []
    for(var i = 0; i < arr.length; i++) {
        res.push(arr[i].type);
    }
    return res;
}

function test(testName, func) {
    numTests++;
    try {
        func();
        console.log("[PASSED] " + testName);
        numPassed++;
    } catch(e) {
        console.error("[FAILED] " + testName);
        console.error(e);
    }
}

function runTests() {
    test("hitbox-index-1", () => {
        var move = {
            startup: 11,
            active: [3, -3, 3]
        }
        assertEqual(0, Characters.hitboxIndex(move, 11));
        assertEqual(0, Characters.hitboxIndex(move, 13));
        assertEqual(-1, Characters.hitboxIndex(move, 14));
        assertEqual(-1, Characters.hitboxIndex(move, 16));
        assertEqual(1, Characters.hitboxIndex(move, 17));
        assertEqual(1, Characters.hitboxIndex(move, 19));
    });

    test("hitbox-index-2", () => {
        var move = {
            startup: 1,
            active: [6, 6]
        }
        assertEqual(0, Characters.hitboxIndex(move, 1));
        assertEqual(0, Characters.hitboxIndex(move, 6));
        assertEqual(1, Characters.hitboxIndex(move, 7));
        assertEqual(1, Characters.hitboxIndex(move, 12));
    });

    test("basic-hitstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 4]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("basic-crouch-hitstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["c.S"], ["_C"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 5],
                [FrameType.ATTACK_RECOVERY, 18],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 18],
                [FrameType.NEUTRAL, 5]
            ]), toTypeArray(res[1]));
    });

    test("basic-blockstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], ["_SB"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 3]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.BLOCKSTUN, 9],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("instant-blockstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], ["_IB"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.BLOCKSTUN, 7],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("crouch-instant-blockstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], ["_CIB"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.BLOCKSTUN, 7],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("faultless-blockstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], ["_FD"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 5]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.BLOCKSTUN, 11],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("crouch-faultless-blockstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], ["_CFD"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 5]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.BLOCKSTUN, 11],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });


    test("gatling-success", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], 
            [["5P", null, null, null, null, "5K"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 1],
                [FrameType.ATTACK_STARTUP, 6],
                [FrameType.ATTACK_ACTIVE, 4],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 3]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 17],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("gatling-fail-startup", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P", null, "5K"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 4]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("gatling-fail-no-route", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["c.S", null, null, null, null, "5K"], ["_C"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 5],
                [FrameType.ATTACK_RECOVERY, 18],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 18],
                [FrameType.NEUTRAL, 5],
            ]), toTypeArray(res[1]));
    });

    test("basic-multihit", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["2H"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 17],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_ACTIVE_NO_HITBOX, 3],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 18],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 18],
                [FrameType.HITSTUN, 23],
                [FrameType.NEUTRAL, 4]
            ]), toTypeArray(res[1]));
    });

    test("special-cancel-success", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["2P", null, null, null, "236P"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 3],
                [FrameType.ATTACK_ACTIVE, 1],
                [FrameType.ATTACK_RECOVERY, 18],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 4],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 9]
            ]), toTypeArray(res[1]));
    });

    test("high-block-low-hit", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["2K"], ["_SB"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 5],
                [FrameType.ATTACK_RECOVERY, 6],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("low-block-high-hit", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5D"], ["_CB"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 23],
                [FrameType.ATTACK_ACTIVE, 6],
                [FrameType.ATTACK_RECOVERY, 16],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 24],
                [FrameType.HITSTUN, 15],
                [FrameType.NEUTRAL, 7]
            ]), toTypeArray(res[1]));
    });

    test("can-switch-block-low-high", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["2K"], ["_CB", "_SB"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 5],
                [FrameType.ATTACK_RECOVERY, 6],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("can-switch-block-high-low", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5D"], ["_SB", "_CB"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 23],
                [FrameType.ATTACK_ACTIVE, 6],
                [FrameType.ATTACK_RECOVERY, 16],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 24],
                [FrameType.HITSTUN, 15],
                [FrameType.NEUTRAL, 7]
            ]), toTypeArray(res[1]));
    });

    test("jump-cancel", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["c.S", null, null, null, null, "_J"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 1],
                [FrameType.JUMPSQUAT, 3],
                [FrameType.NEUTRAL, 15]
            ]), toTypeArray(res[0]));
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 17],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[1]));
    });

    test("landing-recovery", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["_J", null, null, "j.D", null, "_L"], []]);
        assertArrays(expand([
                [FrameType.JUMPSQUAT, 3],
                [FrameType.ATTACK_STARTUP, 3],
                [FrameType.LANDING_RECOVERY, 5],
                [FrameType.NEUTRAL, 1]
            ]), toTypeArray(res[0]));
    });

    console.log(numPassed + " / " + numTests + " tests passed.");
}

runTests();

})();

export default Tests;