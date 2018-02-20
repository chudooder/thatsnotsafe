import Rules from './rules.js';

var Tests = (() => {

var FrameType = Rules.FrameType;

var numTests = 0;
var numPassed = 0;

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
    test("basic-hitstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 4]
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 1]
            ]), res[1]);
    });

    test("basic-crouch-hitstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["c.S"], ["_C"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 5],
                [FrameType.ATTACK_RECOVERY, 18],
                [FrameType.NEUTRAL, 1]
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 18],
                [FrameType.NEUTRAL, 5]
            ]), res[1]);
    });

    test("basic-blockstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], ["_B"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 3]
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.BLOCKSTUN, 9],
                [FrameType.NEUTRAL, 1]
            ]), res[1]);
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
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 17],
                [FrameType.NEUTRAL, 1]
            ]), res[1]);
    });

    test("gatling-fail-startup", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P", null, "5K"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 4]
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 1]
            ]), res[1]);
    });

    test("gatling-fail-recovery", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], 
            [["5P", null, null, null, null, null, null, "5K"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 3],
                [FrameType.ATTACK_RECOVERY, 5],
                [FrameType.NEUTRAL, 4]
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 1]
            ]), res[1]);
    });

    test("gatling-fail-no-route", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["c.S", null, null, null, null, "5K"], ["_C"]]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 4],
                [FrameType.ATTACK_ACTIVE, 5],
                [FrameType.ATTACK_RECOVERY, 18],
                [FrameType.NEUTRAL, 1]
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 5],
                [FrameType.HITSTUN, 18],
                [FrameType.NEUTRAL, 5],
            ]), res[1]);
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
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 18],
                [FrameType.HITSTUN, 23],
                [FrameType.NEUTRAL, 4]
            ]), res[1]);
    });

    test("special-cancel-success", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["2P", null, null, null, "236P"], []]);
        assertArrays(expand([
                [FrameType.ATTACK_STARTUP, 3],
                [FrameType.ATTACK_ACTIVE, 1],
                [FrameType.ATTACK_RECOVERY, 18],
                [FrameType.NEUTRAL, 1]
            ]), res[0]);
        assertArrays(expand([
                [FrameType.NEUTRAL, 4],
                [FrameType.HITSTUN, 10],
                [FrameType.NEUTRAL, 9]
            ]), res[1]);
    });

    console.log(numPassed + " / " + numTests + " tests passed.");
}

runTests();

})();

export default Tests;