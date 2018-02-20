"use strict";

var Characters = (() => {
    var data = {
        "Elphelt": {
            "moves": {
                "5P": {
                    "key": "5P",
                    "type": "normal",
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
                    "key": "5K",
                    "type": "normal",
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
                    "key": "c.S",
                    "type": "normal",
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
                    "key": "f.S",
                    "type": "normal",
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
                    "key": "5H",
                    "type": "normal",
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
                    "key": "5H(2-4)",
                    "type": "normal",
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
                    "key": "5H(5)",
                    "type": "normal",
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
                    "key": "2P",
                    "type": "normal",
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
                    "key": "2K",
                    "type": "normal",
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
                    "key": "2S",
                    "type": "normal",
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
                    "key": "2H",
                    "type": "normal",
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
                    "key": "j.P",
                    "type": "air",
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
                    "key": "j.K",
                    "type": "air",
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
                    "key": "j.S",
                    "type": "air",
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
                    "key": "j.H",
                    "type": "air",
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
                    "key": "j.D",
                    "type": "air",
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
                    "key": "6P",
                    "type": "normal",
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
                    "key": "6H",
                    "type": "normal",
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
                    "key": "2D",
                    "type": "normal",
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
                    "key": "5D",
                    "type": "normal",
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
                },
                "236P": {
                    "key": "236P",
                    "type": "special",
                    "name": "Pineberry",
                    "damage": [
                        0
                    ], 
                    "tension": 150, 
                    "risc_hit": 0, 
                    "risc_gain": 0, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 0, 
                    "guard": "-", 
                    "cancel": "-", 
                    "roman": "Y", 
                    "startup": 0, 
                    "active": [
                        0
                    ], 
                    "total_active": 0, 
                    "recovery": 19, 
                    "gatling": []
                },
                "236P>4P(Early)": {
                    "key": "236P>4P(Early)",
                    "type": "special",
                    "name": "Overhand Throw Early",
                    "damage": [
                        0
                    ], 
                    "tension": 240, 
                    "risc_hit": -8, 
                    "risc_gain": +2, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 0, 
                    "guard": "All", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 10, 
                    "active": [
                        0
                    ], 
                    "total_active": 0, 
                    "recovery": 33, 
                    "gatling": []
                },
                "236P>4P(Late)": {
                    "key": "236P>4P(Late)",
                    "type": "special",
                    "name": "Overhand Throw Late",
                    "damage": [
                        0
                    ], 
                    "tension": 240, 
                    "risc_hit": -6, 
                    "risc_gain": +2, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "All", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 10, 
                    "active": [
                        0
                    ], 
                    "total_active": 0, 
                    "recovery": 33, 
                    "gatling": []
                },
                "236P>2P(Early)": {
                    "key": "236P>2P(Early)",
                    "type": "special",
                    "name": "Underhand Throw Early",
                    "damage": [
                        0
                    ], 
                    "tension": 240, 
                    "risc_hit": -8, 
                    "risc_gain": +2, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 0, 
                    "guard": "All", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 10, 
                    "active": [
                        0
                    ], 
                    "total_active": 0, 
                    "recovery": 33, 
                    "gatling": []
                },
                "236P>2P(Late)": {
                    "key": "236P>2P(Late)",
                    "type": "special",
                    "name": "Underhand Throw Late",
                    "damage": [
                        0
                    ], 
                    "tension": 240, 
                    "risc_hit": -6, 
                    "risc_gain": +2, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "All", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 10, 
                    "active": [
                        0
                    ], 
                    "total_active": 0, 
                    "recovery": 33, 
                    "gatling": []
                },
                "236P>j.4P(Early)": {
                    "key": "236P>j.4P(Early)",
                    "type": "special",
                    "name": "Air Overhand Throw Early",
                    "damage": [
                        0
                    ], 
                    "tension": 240, 
                    "risc_hit": -8, 
                    "risc_gain": +2, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 0, 
                    "guard": "All", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 13, 
                    "active": [
                        0
                    ], 
                    "total_active": 0, 
                    "recovery": 36, 
                    "gatling": []
                },
                "236P>j.4P(Late)": {
                    "key": "236P>j.4P(Late)",
                    "type": "special",
                    "name": "Air Overhand Throw Late",
                    "damage": [
                        0
                    ], 
                    "tension": 240, 
                    "risc_hit": -6, 
                    "risc_gain": +2, 
                    "prorate_type": null, 
                    "prorate_amount": 1.0, 
                    "level": 3, 
                    "guard": "All", 
                    "cancel": "-", 
                    "roman": "YRP", 
                    "startup": 13, 
                    "active": [
                        0
                    ], 
                    "total_active": 0, 
                    "recovery": 36, 
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

    function cancelAllowed(curMove, newMove) {
        return (curMove.gatling.indexOf(newMove.key) != -1)
            || (newMove.type === 'special' && curMove.cancel.indexOf('S') != -1);
    };

    return {
        data: data,
        hitstun: hitstun,
        blockstun: blockstun,
        cancelAllowed: cancelAllowed,
    }
})();

export default Characters;