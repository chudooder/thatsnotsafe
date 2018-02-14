(() => {

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
        assertArrays([
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL
            ], res[0]);
        assertArrays([
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.NEUTRAL
            ], res[1]);
    });

    test("basic-crouch-hitstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["c.S"], ["_C"]]);
        assertArrays([
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.NEUTRAL,
            ], res[0]);
        assertArrays([
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL
            ], res[1]);
    });

    test("basic-blockstun", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P"], ["_B"]]);
        assertArrays([
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL
            ], res[0]);
        assertArrays([
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.BLOCKSTUN,
                FrameType.NEUTRAL
            ], res[1]);
    });

    test("gatling-success", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], 
            [["5P", null, null, null, null, "5K"], []]);
        assertArrays([
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
            ], res[0]);
        assertArrays([
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.NEUTRAL
            ], res[1]);
    });

    test("gatling-fail-startup", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["5P", null, "5K"], []]);
        assertArrays([
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL
            ], res[0]);
        assertArrays([
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.NEUTRAL
            ], res[1]);
    });

    test("gatling-fail-recovery", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], 
            [["5P", null, null, null, null, null, null, "5K"], []]);
        assertArrays([
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL
            ], res[0]);
        assertArrays([
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.NEUTRAL
            ], res[1]);
    });

    test("gatling-fail-no-route", () => {
        var res = Rules.calculateFrames(["Elphelt", "Elphelt"], [["c.S", null, null, null, null, "5K"], ["_C"]]);
        assertArrays([
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_STARTUP,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_ACTIVE,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.ATTACK_RECOVERY,
                FrameType.NEUTRAL,
            ], res[0]);
        assertArrays([
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.HITSTUN,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL,
                FrameType.NEUTRAL
            ], res[1]);
    });

    console.log(numPassed + " / " + numTests + " tests passed.");
}

runTests();

})();