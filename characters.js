"use strict";

var Characters = (() => {
    var data = {
        "Elphelt": {
            "moves": {
                "5P": {
                    "hits": 1,
                    "damage": 9,
                    "tension": 144,
                    "risc-hit": -8,
                    "risc-block": 3,
                    "prorate-type": null,
                    "level": 0,
                    "guard": "mid",
                    "cancel": "CSJ",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [3],
                    "recovery": 5,
                    "gatling": ["5P", "2P", "6P", "5K", "2K", "c.S", "f.S", "2.S", "5H", "2H", "6H", "5D", "2D"]
                },

                "5K": {
                    "hits": 1,
                    "damage": 14,
                    "tension": 144,
                    "risc-hit": -8,
                    "risc-block": 3,
                    "prorate-type": "initial",
                    "prorate-amount": 0.9,
                    "level": 0,
                    "guard": "low",
                    "cancel": "SJ",
                    "roman": "YRP",
                    "startup": 7,
                    "active": [4],
                    "recovery": 5,
                    "gatling": ["c.S", "f.S", "2.S", "2H", "6H", "5D", "2D"]
                },

                "c.S": {
                    "hits": 1,
                    "damage": 24,
                    "tension": 384,
                    "risc-hit": -6,
                    "risc-block": 14,
                    "prorate-type": null,
                    "level": 3,
                    "guard": "mid",
                    "cancel": "SJ",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [5],
                    "recovery": 18,
                    "gatling": ["c.S", "f.S", "2.S", "2H", "6H", "5D", "2D"]
                },

                "2P": {
                    "hits": 1,
                    "damage": 8,
                    "tension": 144,
                    "risc-hit": -8,
                    "risc-block": 3,
                    "prorate-type": "initial",
                    "prorate-amount": 0.8,
                    "level": 0,
                    "guard": "mid",
                    "cancel": "CS",
                    "roman": "YRP",
                    "startup": 4,
                    "active": [2],
                    "recovery": 7,
                    "gatling": ["5P", "2P", "6P", "5K", "2K", "c.S", "f.S", "2.S", "2H", "5D", "2D"]
                },

                "2H": {
                    "hits": 2,
                    "damage": [22, 22],
                    "tension": 384,
                    "risc-hit": -6,
                    "risc-block": 14,
                    "prorate-type": "initial",
                    "prorate-amount": 0.9,
                    "level": 3,
                    "guard": "mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 18,
                    "active": [3, -3, 3],
                    "recovery": 18,
                    "gatling": ["5D", "2D"]
                },
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