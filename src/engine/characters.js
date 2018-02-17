"use strict";

var Characters = (() => {
    var data = {
        "Elphelt": {
            "moves": {
                "5P": {
                    "hits": 1, 
                    "damage": [
                        9
                    ], 
                    "tension": 144, 
                    "risc_hit": -8, 
                    "risc_gain": 3, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 0, 
                    "guard": "Mid", 
                    "cancel": "CSJ", 
                    "roman": "YRP", 
                    "startup": 5, 
                    "active": [
                        3
                    ], 
                    "total_active": 3, 
                    "recovery": 5, 
                    "gatling": [
                        "5P", 
                        "2P", 
                        "6P", 
                        "5K", 
                        "2K", 
                        "c.S", 
                        "f.S", 
                        "2S", 
                        "5H", 
                        "2H", 
                        "6H", 
                        "5D", 
                        "2D"
                    ]
                }, 
                "5K": {
                    "hits": 1, 
                    "damage": [
                        14
                    ], 
                    "tension": 144, 
                    "risc_hit": -8, 
                    "risc_gain": 3, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.9, 
                    "level": 0, 
                    "guard": "Low", 
                    "cancel": "SJ", 
                    "roman": "YRP", 
                    "startup": 7, 
                    "active": [
                        4
                    ], 
                    "total_active": 4, 
                    "recovery": 5, 
                    "gatling": [
                        "c.S", 
                        "f.S", 
                        "2S", 
                        "2H", 
                        "6H", 
                        "5D", 
                        "2D"
                    ]
                }, 
                "c.S": {
                    "hits": 1, 
                    "damage": [
                        24
                    ], 
                    "tension": 384, 
                    "risc_hit": -6, 
                    "risc_gain": 14, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "Mid", 
                    "cancel": "SJ", 
                    "roman": "YRP", 
                    "startup": 5, 
                    "active": [
                        5
                    ], 
                    "total_active": 5, 
                    "recovery": 18, 
                    "gatling": [
                        "6P", 
                        "f.S", 
                        "2S", 
                        "5H", 
                        "2H", 
                        "5D", 
                        "2D"
                    ]
                }, 
                "f.S": {
                    "hits": 1, 
                    "damage": [
                        28
                    ], 
                    "tension": 384, 
                    "risc_hit": -6, 
                    "risc_gain": 14, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "Mid", 
                    "cancel": "SJ", 
                    "roman": "YRP", 
                    "startup": 9, 
                    "active": [
                        5
                    ], 
                    "total_active": 5, 
                    "recovery": 16, 
                    "gatling": [
                        "2S", 
                        "5H", 
                        "2H", 
                        "2D"
                    ]
                }, 
                "5H": {
                    "hits": 1, 
                    "damage": [
                        20
                    ], 
                    "tension": 384, 
                    "risc_hit": -6, 
                    "risc_gain": 14, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "Mid", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 11, 
                    "active": [
                        1
                    ], 
                    "total_active": 1, 
                    "recovery": 28, 
                    "gatling": [
                        "5H(2-5)"
                    ]
                }, 
                "5H(2-4)": {
                    "hits": 4, 
                    "damage": [
                        18, 
                        18, 
                        18, 
                        18
                    ], 
                    "tension": 384, 
                    "risc_hit": -6, 
                    "risc_gain": 6, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "Mid", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 9, 
                    "active": [
                        1
                    ], 
                    "total_active": 1, 
                    "recovery": 26
                }, 
                "5H(5)": {
                    "hits": 1, 
                    "damage": [
                        18
                    ], 
                    "tension": 384, 
                    "risc_hit": -6, 
                    "risc_gain": 6, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "Mid", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 9, 
                    "active": [
                        1
                    ], 
                    "total_active": 1, 
                    "recovery": 33
                }, 
                "2P": {
                    "hits": 1, 
                    "damage": [
                        8
                    ], 
                    "tension": 144, 
                    "risc_hit": -8, 
                    "risc_gain": 3, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.8, 
                    "level": 0, 
                    "guard": "Mid", 
                    "cancel": "CS", 
                    "roman": "YRP", 
                    "startup": 4, 
                    "active": [
                        2
                    ], 
                    "total_active": 2, 
                    "recovery": 7, 
                    "gatling": [
                        "5P", 
                        "2P", 
                        "6P", 
                        "5K", 
                        "2K", 
                        "c.S", 
                        "f.S", 
                        "2S", 
                        "2H", 
                        "5D", 
                        "2D"
                    ]
                }, 
                "2K": {
                    "hits": 1, 
                    "damage": [
                        12
                    ], 
                    "tension": 144, 
                    "risc_hit": -8, 
                    "risc_gain": 3, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.7, 
                    "level": 0, 
                    "guard": "Low", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 5, 
                    "active": [
                        5
                    ], 
                    "total_active": 5, 
                    "recovery": 6, 
                    "gatling": [
                        "6P", 
                        "5K", 
                        "c.S", 
                        "f.S", 
                        "2S", 
                        "2H", 
                        "5D", 
                        "2D"
                    ]
                }, 
                "2S": {
                    "hits": 1, 
                    "damage": [
                        26
                    ], 
                    "tension": 264, 
                    "risc_hit": -7, 
                    "risc_gain": 10, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.9, 
                    "level": 2, 
                    "guard": "Mid", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 8, 
                    "active": [
                        6
                    ], 
                    "total_active": 6, 
                    "recovery": 18, 
                    "gatling": [
                        "5H", 
                        "5D", 
                        "2D"
                    ]
                }, 
                "2H": {
                    "hits": 2, 
                    "damage": [
                        22, 
                        22
                    ], 
                    "tension": 384, 
                    "risc_hit": -6, 
                    "risc_gain": 14, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.9, 
                    "level": 3, 
                    "guard": "Mid", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 18, 
                    "active": [
                        3, 
                        -3, 
                        3
                    ], 
                    "total_active": 9, 
                    "recovery": 18, 
                    "gatling": [
                        "5D", 
                        "2D"
                    ]
                }, 
                "j.P": {
                    "hits": 1, 
                    "damage": [
                        10
                    ], 
                    "tension": 144, 
                    "risc_hit": -8, 
                    "risc_gain": 3, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 0, 
                    "guard": "High / Air", 
                    "cancel": "CSJ", 
                    "roman": "YRP", 
                    "startup": 6, 
                    "active": [
                        6
                    ], 
                    "total_active": 6, 
                    "recovery": 9, 
                    "gatling": [
                        "j.P", 
                        "j.K", 
                        "j.S", 
                        "j.H", 
                        "j.D"
                    ]
                }, 
                "j.K": {
                    "hits": 1, 
                    "damage": [
                        18
                    ], 
                    "tension": 264, 
                    "risc_hit": -7, 
                    "risc_gain": 6, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 1, 
                    "guard": "High / Air", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 8, 
                    "active": [
                        6
                    ], 
                    "total_active": 6, 
                    "recovery": 15, 
                    "gatling": [
                        "j.P", 
                        "j.S", 
                        "j.H", 
                        "j.D"
                    ]
                }, 
                "j.S": {
                    "hits": 1, 
                    "damage": [
                        28
                    ], 
                    "tension": 264, 
                    "risc_hit": -7, 
                    "risc_gain": 10, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 2, 
                    "guard": "High / Air", 
                    "cancel": "SJ", 
                    "roman": "YRP", 
                    "startup": 7, 
                    "active": [
                        5
                    ], 
                    "total_active": 5, 
                    "recovery": 16, 
                    "gatling": [
                        "j.P", 
                        "j.S", 
                        "j.H", 
                        "j.D"
                    ]
                }, 
                "j.H": {
                    "hits": 1, 
                    "damage": [
                        34
                    ], 
                    "tension": 264, 
                    "risc_hit": -7, 
                    "risc_gain": 10, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 2, 
                    "guard": "High / Air", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 10, 
                    "active": [
                        6
                    ], 
                    "total_active": 6, 
                    "recovery": 18, 
                    "gatling": [
                        "j.D"
                    ]
                }, 
                "j.D": {
                    "hits": 1, 
                    "damage": [
                        38
                    ], 
                    "tension": 264, 
                    "risc_hit": -7, 
                    "risc_gain": 10, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 2, 
                    "guard": "High / Air", 
                    "cancel": "S", 
                    "roman": "YR", 
                    "startup": 11, 
                    "active": [
                        3
                    ], 
                    "total_active": 3, 
                    "recovery": 5, 
                    "gatling": []
                }, 
                "6P": {
                    "hits": 1, 
                    "damage": [
                        24
                    ], 
                    "tension": 264, 
                    "risc_hit": -7, 
                    "risc_gain": 10, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.75, 
                    "level": 2, 
                    "guard": "High", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 23, 
                    "active": [
                        4
                    ], 
                    "total_active": 4, 
                    "recovery": 22, 
                    "gatling": []
                }, 
                "6H": {
                    "hits": 1, 
                    "damage": [
                        50
                    ], 
                    "tension": 384, 
                    "risc_hit": -6, 
                    "risc_gain": 20, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.8, 
                    "level": 4, 
                    "guard": "Mid", 
                    "cancel": "S", 
                    "roman": "YRP", 
                    "startup": 15, 
                    "active": [
                        10
                    ], 
                    "total_active": 10, 
                    "recovery": 30, 
                    "gatling": []
                }, 
                "2D": {
                    "hits": 1, 
                    "damage": [
                        36
                    ], 
                    "tension": 264, 
                    "risc_hit": -7, 
                    "risc_gain": 10, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 2, 
                    "guard": "Low", 
                    "cancel": "SJ", 
                    "roman": "YRP", 
                    "startup": 8, 
                    "active": [
                        6
                    ], 
                    "total_active": 6, 
                    "recovery": 18, 
                    "gatling": []
                }, 
                "5D": {
                    "hits": 1, 
                    "damage": [
                        22
                    ], 
                    "tension": 264, 
                    "risc_hit": -20, 
                    "risc_gain": 10, 
                    "prorate_type": "initial", 
                    "prorate_amount": 0.8, 
                    "level": 2, 
                    "guard": "High", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 24, 
                    "active": [
                        6
                    ], 
                    "total_active": 6, 
                    "recovery": 16, 
                    "gatling": []
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

export default Characters;