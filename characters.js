"use strict";

var Characters = (() => {
    var data = {
        "Elphelt": {
            "moves": {
                "j.S": {
                    "tension": 264, 
                    "startup": 7, 
                    "risc-gain": 10, 
                    "active": [
                        5
                    ], 
                    "guard": "High / Air", 
                    "prorate-amount": 1.0, 
                    "cancel": "SJ", 
                    "risc-hit": -7, 
                    "hits": 1, 
                    "recovery": 16, 
                    "level": 2, 
                    "prorate-type": null, 
                    "damage": [
                        28
                    ], 
                    "roman": "YRP",
                    "gatling": ["j.P", "j.S", "j.H", "j.D"]
                }, 
                "2D": {
                    "tension": 264, 
                    "startup": 8, 
                    "risc-gain": 10, 
                    "active": [
                        6
                    ], 
                    "guard": "Low", 
                    "prorate-amount": 1.0, 
                    "cancel": "SJ", 
                    "risc-hit": -7, 
                    "hits": 1, 
                    "recovery": 18, 
                    "level": 2, 
                    "prorate-type": null, 
                    "damage": [
                        36
                    ], 
                    "roman": "YRP",
                    "gatling": []
                }, 
                "5H (1)": {
                    "tension": 384, 
                    "startup": 11, 
                    "risc-gain": 14, 
                    "active": [
                        1
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 1.0, 
                    "cancel": "S", 
                    "risc-hit": -6, 
                    "hits": 1, 
                    "recovery": 28, 
                    "level": 3, 
                    "prorate-type": null, 
                    "damage": [
                        20
                    ], 
                    "roman": "YRP",
                    "gatling": ["5H (2-4)"]
                }, 
                "f.S": {
                    "tension": 384, 
                    "startup": 9, 
                    "risc-gain": 14, 
                    "active": [
                        5
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 1.0, 
                    "cancel": "SJ", 
                    "risc-hit": -6, 
                    "hits": 1, 
                    "recovery": 16, 
                    "level": 3, 
                    "prorate-type": null, 
                    "damage": [
                        28
                    ], 
                    "roman": "YRP",
                    "gatling": ["2S", "5H", "2H", "2D"]
                }, 
                "c.S": {
                    "tension": 384, 
                    "startup": 5, 
                    "risc-gain": 14, 
                    "active": [
                        5
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 1.0, 
                    "cancel": "SJ", 
                    "risc-hit": -6, 
                    "hits": 1, 
                    "recovery": 18, 
                    "level": 3, 
                    "prorate-type": null, 
                    "damage": [
                        24
                    ], 
                    "roman": "YRP",
                    "gatling": ["c.S", "f.S", "2.S", "2H", "6H", "5D", "2D"]
                }, 
                "2S": {
                    "tension": 264, 
                    "startup": 8, 
                    "risc-gain": 10, 
                    "active": [
                        6
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 0.9, 
                    "cancel": "S", 
                    "risc-hit": -7, 
                    "hits": 1, 
                    "recovery": 18, 
                    "level": 2, 
                    "prorate-type": "initial", 
                    "damage": [
                        26
                    ], 
                    "roman": "YRP",
                    "gatling": ["5H", "5D", "2D"]
                }, 
                "6H": {
                    "tension": 384, 
                    "startup": 15, 
                    "risc-gain": 20, 
                    "active": [
                        10
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 0.8, 
                    "cancel": "S", 
                    "risc-hit": -6, 
                    "hits": 1, 
                    "recovery": 30, 
                    "level": 4, 
                    "prorate-type": "initial", 
                    "damage": [
                        50
                    ], 
                    "roman": "YRP",
                    "gatling": []
                }, 
                "5P": {
                    "tension": 144, 
                    "startup": 5, 
                    "risc-gain": 3, 
                    "active": [
                        3
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 1.0, 
                    "cancel": "CSJ", 
                    "risc-hit": -8, 
                    "hits": 1, 
                    "recovery": 5, 
                    "level": 0, 
                    "prorate-type": null, 
                    "damage": [
                        9
                    ], 
                    "roman": "YRP",
                    "gatling": ["5P", "2P", "6P", "5K", "2K", "c.S", "f.S", "2.S", "5H", "2H", "6H", "5D", "2D"]
                }, 
                "5D": {
                    "tension": 264, 
                    "startup": 24, 
                    "risc-gain": 10, 
                    "active": [
                        6
                    ], 
                    "guard": "High", 
                    "prorate-amount": 0.8, 
                    "cancel": "-", 
                    "risc-hit": -20, 
                    "hits": 1, 
                    "recovery": 16, 
                    "level": 2, 
                    "prorate-type": "initial", 
                    "damage": [
                        22
                    ], 
                    "roman": "YRP",
                    "gatling": []
                }, 
                "5H (5)": {
                    "tension": 384, 
                    "startup": 9, 
                    "risc-gain": 6, 
                    "active": [
                        1
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 1.0, 
                    "cancel": "S", 
                    "risc-hit": -6, 
                    "hits": 1, 
                    "recovery": 33, 
                    "level": 3, 
                    "prorate-type": null, 
                    "damage": [
                        18
                    ], 
                    "roman": "YRP",
                    "gatling": []
                }, 
                "6P": {
                    "tension": 264, 
                    "startup": 23, 
                    "risc-gain": 10, 
                    "active": [
                        4
                    ], 
                    "guard": "High", 
                    "prorate-amount": 0.75, 
                    "cancel": "-", 
                    "risc-hit": -7, 
                    "hits": 1, 
                    "recovery": 22, 
                    "level": 2, 
                    "prorate-type": "initial", 
                    "damage": [
                        24
                    ], 
                    "roman": "YRP",
                    "gatling": []
                }, 
                "j.P": {
                    "tension": 144, 
                    "startup": 6, 
                    "risc-gain": 3, 
                    "active": [
                        6
                    ], 
                    "guard": "High / Air", 
                    "prorate-amount": 1.0, 
                    "cancel": "CSJ", 
                    "risc-hit": -8, 
                    "hits": 1, 
                    "recovery": 9, 
                    "level": 0, 
                    "prorate-type": null, 
                    "damage": [
                        10
                    ], 
                    "roman": "YRP",
                    "gatling": ["j.P", "j.K", "j.S", "j.H", "j.D"]
                }, 
                "5H (2-4)": {
                    "tension": 384, 
                    "startup": 9, 
                    "risc-gain": 6, 
                    "active": [
                        1
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 1.0, 
                    "cancel": "S", 
                    "risc-hit": -6, 
                    "hits": 4, 
                    "recovery": 26, 
                    "level": 3, 
                    "prorate-type": null, 
                    "damage": [
                        18, 
                        18, 
                        18, 
                        18
                    ], 
                    "roman": "YRP",
                    "gatling": "5H (5)"
                }, 
                "5K": {
                    "tension": 144, 
                    "startup": 7, 
                    "risc-gain": 3, 
                    "active": [
                        4
                    ], 
                    "guard": "Low", 
                    "prorate-amount": 0.9, 
                    "cancel": "SJ", 
                    "risc-hit": -8, 
                    "hits": 1, 
                    "recovery": 5, 
                    "level": 0, 
                    "prorate-type": "initial", 
                    "damage": [
                        14
                    ], 
                    "roman": "YRP",
                    "gatling": ["c.S", "f.S", "2.S", "2H", "6H", "5D", "2D"]
                }, 
                "j.D": {
                    "tension": 264, 
                    "startup": 11, 
                    "risc-gain": 10, 
                    "active": [
                        3
                    ], 
                    "guard": "High / Air", 
                    "prorate-amount": 1.0, 
                    "cancel": "S", 
                    "risc-hit": -7, 
                    "hits": 1, 
                    "recovery": 29, 
                    "level": 2, 
                    "prorate-type": null, 
                    "damage": [
                        38
                    ], 
                    "roman": "YR",
                    "gatling": []
                }, 
                "j.K": {
                    "tension": 264, 
                    "startup": 8, 
                    "risc-gain": 6, 
                    "active": [
                        6
                    ], 
                    "guard": "High / Air", 
                    "prorate-amount": 1.0, 
                    "cancel": "S", 
                    "risc-hit": -7, 
                    "hits": 1, 
                    "recovery": 15, 
                    "level": 1, 
                    "prorate-type": null, 
                    "damage": [
                        18
                    ], 
                    "roman": "YRP",
                    "gatling": ["j.P", "j.S", "j.H", "j.D"]
                }, 
                "2P": {
                    "tension": 144, 
                    "startup": 4, 
                    "risc-gain": 3, 
                    "active": [
                        2
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 0.8, 
                    "cancel": "CS", 
                    "risc-hit": -8, 
                    "hits": 1, 
                    "recovery": 7, 
                    "level": 0, 
                    "prorate-type": "initial", 
                    "damage": [
                        8
                    ], 
                    "roman": "YRP",
                    "gatling": ["5P", "2P", "6P", "5K", "2K", "c.S", "f.S", "2.S", "2H", "5D", "2D"]
                }, 
                "j.H": {
                    "tension": 264, 
                    "startup": 10, 
                    "risc-gain": 10, 
                    "active": [
                        6
                    ], 
                    "guard": "High / Air", 
                    "prorate-amount": 1.0, 
                    "cancel": "S", 
                    "risc-hit": -7, 
                    "hits": 1, 
                    "recovery": 18, 
                    "level": 2, 
                    "prorate-type": null, 
                    "damage": [
                        34
                    ], 
                    "roman": "YRP",
                    "gatling": ["j.D"]
                }, 
                "2H": {
                    "tension": 384, 
                    "startup": 18, 
                    "risc-gain": 14, 
                    "active": [
                        3, 
                        -3, 
                        3
                    ], 
                    "guard": "Mid", 
                    "prorate-amount": 0.9, 
                    "cancel": "S", 
                    "risc-hit": -6, 
                    "hits": 2, 
                    "recovery": 18, 
                    "level": 3, 
                    "prorate-type": "initial", 
                    "damage": [
                        22, 
                        22
                    ], 
                    "roman": "YRP",
                    "gatling": ["5D", "2D"]
                }, 
                "2K": {
                    "tension": 144, 
                    "startup": 5, 
                    "risc-gain": 3, 
                    "active": [
                        5
                    ], 
                    "guard": "Low", 
                    "prorate-amount": 0.7, 
                    "cancel": "S", 
                    "risc-hit": -8, 
                    "hits": 1, 
                    "recovery": 6, 
                    "level": 0, 
                    "prorate-type": "initial", 
                    "damage": [
                        12
                    ], 
                    "roman": "YRP",
                    "gatling": ["6P", "5K", "c.S", "f.S", "2S", "2H", "5D", "2D"]
                }
            }
        }
    };

    var _stunTable = [
    //   SH  CH  AU  GB  GIB GFD AB  AIB AFD 
        [10, 10, 10, 9,  7,  11, 9,  3,  11],
        [12, 13, 12, 11, 8,  13, 11, 5,  14],
        [14, 15, 14, 13, 10, 15, 13, 7,  17],
        [17, 18, 16, 16, 12, 18, 16, 9,  20],
        [19, 20, 18, 18, 14, 20, 19, 11, 23]
    ];

    function hitstun(level, crouching) {
        var column = crouching ? 1 : 0;
        return _stunTable[level][column];
    };

    function blockstun(level, instant) {
        var column = instant ? 4 : 3;
        return _stunTable[level][column];
    };

    function gatlingAllowed(curMove, newMove) {
        return curMove.gatling.indexOf(newMove) != -1;
    };

    return {
        data: data,
        hitstun: hitstun,
        blockstun: blockstun,
        gatlingAllowed: gatlingAllowed,
    }
})();