"use strict";

var Characters = (() => {
    var data = {
        "Elphelt": {
            "defenseModifier": 1.03,
            "guts": 0,
            "stunResistance": 60,
            "jumpStartup": 3,
            "backdashTime": 13,
            "backdashInvul": [1, 9],
            "moves": {
                "5P": {
                    "key": "5P",
                    "hits": 1,
                    "damage": [
                        9
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        0
                    ],
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
                    "hits": 1,
                    "damage": [
                        14
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": "initial",
                    "prorate_amount": 0.9,
                    "level": [
                        0
                    ],
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
                    "hits": 1,
                    "damage": [
                        24
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 14,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        3
                    ],
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
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 14,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        3
                    ],
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
                    "hits": 1,
                    "damage": [
                        20
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 14,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        3
                    ],
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
                    "hits": 4,
                    "damage": [
                        18,
                        18,
                        18,
                        18
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 6,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        3,
                        3,
                        3,
                        3
                    ],
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
                    "hits": 1,
                    "damage": [
                        18
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 6,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        3
                    ],
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
                    "hits": 1,
                    "damage": [
                        8
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": "initial",
                    "prorate_amount": 0.8,
                    "level": [
                        0
                    ],
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
                    "hits": 1,
                    "damage": [
                        12
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": "initial",
                    "prorate_amount": 0.7,
                    "level": [
                        0
                    ],
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
                    "hits": 1,
                    "damage": [
                        26
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": "initial",
                    "prorate_amount": 0.9,
                    "level": [
                        2
                    ],
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
                    "hits": 2,
                    "damage": [
                        22,
                        22
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 14,
                    "prorate_type": "initial",
                    "prorate_amount": 0.9,
                    "level": [
                        3,
                        3
                    ],
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
                    "hits": 1,
                    "damage": [
                        10
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        0
                    ],
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
                    "hits": 1,
                    "damage": [
                        18
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        1
                    ],
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
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
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
                    "hits": 1,
                    "damage": [
                        34
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
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
                    "hits": 1,
                    "damage": [
                        38
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "High / Air",
                    "cancel": "S",
                    "roman": "YR",
                    "startup": 11,
                    "active": [
                        3
                    ],
                    "total_active": 3,
                    "recovery": 29,
                    "recovery_after_landing": 5,
                    "gatling": []
                },
                "6P": {
                    "key": "6P",
                    "hits": 1,
                    "damage": [
                        24
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": "initial",
                    "prorate_amount": 0.75,
                    "level": [
                        2
                    ],
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
                    "hits": 1,
                    "damage": [
                        50
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 20,
                    "prorate_type": "initial",
                    "prorate_amount": 0.8,
                    "level": [
                        4
                    ],
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
                    "hits": 1,
                    "damage": [
                        36
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
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
                    "hits": 1,
                    "damage": [
                        22
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -20,
                    "risc_gain": 10,
                    "prorate_type": "initial",
                    "prorate_amount": 0.8,
                    "level": [
                        2
                    ],
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
                "214K": {
                    "key": "214K",
                    "type": "special",
                    "name": "Bridal Express",
                    "damage": [45],
                    "tension": 720,
                    "risc_hit": -6,
                    "risc_gain": +14,
                    "prorate_type": "initial",
                    "prorate_amount": 0.9,
                    "level": 3,
                    "guard": "All",
                    "cancel": "-",
                    "roman": "YRP",
                    "startup": 14,
                    "active": [12],
                    "total_active": 12,
                    "recovery": 12,
                    "gatling": []
                },
                "j.214K": {
                    "key": "214K",
                    "type": "special",
                    "name": "Bridal Express",
                    "damage": [40],
                    "tension": 720,
                    "risc_hit": -7,
                    "risc_gain": +10,
                    "prorate_type": "initial",
                    "prorate_amount": 0.9,
                    "level": 2,
                    "guard": "All",
                    "cancel": "-",
                    "roman": "YRP",
                    "startup": 26,
                    "active": [20],
                    "total_active": 20,
                    "recovery": 0,
                    "recovery_after_landing": 7,
                    "gatling": []
                }
            }
        },
        "Chipp": {
            "defenseModifier": 1.3,
            "guts": 4,
            "stunResistance": 50,
            "jumpStartup": 3,
            "backdashTime": 21,
            "backdashInvul": [1, 9],
            "moves": {
                "5P": {
                    "key": "5P",
                    "hits": 1,
                    "damage": [
                        6
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        0
                    ],
                    "guard": "Mid",
                    "cancel": "CSJ",
                    "roman": "YRP",
                    "startup": 3,
                    "active": [
                        1
                    ],
                    "total_active": 1,
                    "recovery": 8,
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
                    "hits": 1,
                    "damage": [
                        12
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": "initial",
                    "prorate_amount": 0.85,
                    "level": [
                        0
                    ],
                    "guard": "Mid",
                    "cancel": "CSJ",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        5
                    ],
                    "total_active": 5,
                    "recovery": 8,
                    "gatling": [
                        "5P",
                        "5K",
                        "2K",
                        "c.S",
                        "f.S",
                        "2S",
                        "5H",
                        "2H",
                        "5D",
                        "2D"
                    ]
                },
                "c.S": {
                    "key": "c.S",
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "SJ",
                    "roman": "YRP",
                    "startup": 4,
                    "active": [
                        2
                    ],
                    "total_active": 2,
                    "recovery": 10,
                    "gatling": [
                        "6P",
                        "6K",
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
                    "hits": 1,
                    "damage": [
                        26
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 7,
                    "active": [
                        2
                    ],
                    "total_active": 2,
                    "recovery": 18,
                    "gatling": [
                        "2S",
                        "5H",
                        "2H",
                        "5D"
                    ]
                },
                "5H": {
                    "key": "5H",
                    "hits": 1,
                    "damage": [
                        30
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 20,
                    "prorate_type": "initial",
                    "prorate_amount": 0.95,
                    "level": [
                        4
                    ],
                    "guard": "Mid",
                    "cancel": "SJ",
                    "roman": "YRP",
                    "startup": 10,
                    "active": [
                        7
                    ],
                    "total_active": 7,
                    "recovery": 16,
                    "gatling": [
                        "5D"
                    ]
                },
                "2P": {
                    "key": "2P",
                    "hits": 1,
                    "damage": [
                        6
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": "initial",
                    "prorate_amount": 0.8,
                    "level": [
                        0
                    ],
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
                        "5H",
                        "2H",
                        "5D",
                        "2D"
                    ]
                },
                "2K": {
                    "key": "2K",
                    "hits": 1,
                    "damage": [
                        8
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": "initial",
                    "prorate_amount": 0.7,
                    "level": [
                        0
                    ],
                    "guard": "Low",
                    "cancel": "CS",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 7,
                    "gatling": [
                        "5P",
                        "2P",
                        "6P",
                        "2K",
                        "5K",
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
                "2S": {
                    "key": "2S",
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 7,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 11,
                    "gatling": [
                        "5H",
                        "2H",
                        "5D"
                    ]
                },
                "2H": {
                    "key": "2H",
                    "hits": 1,
                    "damage": [
                        34
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 20,
                    "prorate_type": "initial",
                    "prorate_amount": 0.9,
                    "level": [
                        4
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 7,
                    "active": [
                        9
                    ],
                    "total_active": 9,
                    "recovery": 18,
                    "gatling": []
                },
                "j.P": {
                    "key": "j.P",
                    "hits": 1,
                    "damage": [
                        8
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        0
                    ],
                    "guard": "High / Air",
                    "cancel": "CS",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 4,
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
                    "hits": 2,
                    "damage": [
                        16,
                        16
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        0,
                        0
                    ],
                    "guard": "High / Air",
                    "cancel": "CSJ",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        6,
                        2
                    ],
                    "total_active": 8,
                    "recovery": 8,
                    "gatling": [
                        "j.P",
                        "j.K",
                        "j.S",
                        "j.H",
                        "j.D"
                    ]
                },
                "j.S": {
                    "key": "j.S",
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "High / Air",
                    "cancel": "SJ",
                    "roman": "YRP",
                    "startup": 9,
                    "active": [
                        10
                    ],
                    "total_active": 10,
                    "recovery": 18,
                    "gatling": [
                        "j.H"
                    ]
                },
                "j.H": {
                    "key": "j.H",
                    "hits": 2,
                    "damage": [
                        26,
                        26
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2,
                        2
                    ],
                    "guard": "High / Air",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 8,
                    "active": [
                        6,
                        6
                    ],
                    "total_active": 12,
                    "recovery": 29,
                    "gatling": []
                },
                "j.D": {
                    "key": "j.D",
                    "hits": 1,
                    "damage": [
                        36
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "High / Air",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 6,
                    "active": [
                        8
                    ],
                    "total_active": 8,
                    "recovery": 18,
                    "recovery_after_landing": 5,
                    "gatling": []
                },
                "6P": {
                    "key": "6P",
                    "hits": 1,
                    "damage": [
                        22
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "SJ",
                    "roman": "YRP",
                    "startup": 9,
                    "active": [
                        3
                    ],
                    "total_active": 3,
                    "recovery": 25,
                    "gatling": [
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
                "6K": {
                    "key": "6K",
                    "hits": 1,
                    "damage": [
                        20
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        1
                    ],
                    "guard": "High / Air",
                    "cancel": "-",
                    "roman": "YRP",
                    "startup": 19,
                    "active": [
                        5
                    ],
                    "total_active": 5,
                    "recovery": 5,
                    "recovery_after_landing": 3,
                    "gatling": []
                },
                "6H": {
                    "key": "6H",
                    "hits": 1,
                    "damage": [
                        60
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 20,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        4
                    ],
                    "guard": "Mid",
                    "cancel": "SJ",
                    "roman": "YRP",
                    "startup": 17,
                    "active": [
                        6
                    ],
                    "total_active": 6,
                    "recovery": 15,
                    "gatling": []
                },
                "j.2K": {
                    "key": "j.2K",
                    "hits": 3,
                    "damage": [
                        16,
                        16,
                        16
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        0,
                        0,
                        0
                    ],
                    "guard": "All",
                    "cancel": "-",
                    "roman": "YRP",
                    "startup": 8,
                    "active": [
                        60
                    ],
                    "total_active": 60,
                    "recovery": 0,
                    "gatling": []
                },
                "2D": {
                    "key": "2D",
                    "hits": 1,
                    "damage": [
                        26
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        1
                    ],
                    "guard": "Low",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 9,
                    "active": [
                        2
                    ],
                    "total_active": 2,
                    "recovery": 17,
                    "gatling": []
                },
                "5D": {
                    "key": "5D",
                    "hits": 1,
                    "damage": [
                        22
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -20,
                    "risc_gain": 10,
                    "prorate_type": "initial",
                    "prorate_amount": 0.8,
                    "level": [
                        2
                    ],
                    "guard": "High",
                    "cancel": "-",
                    "roman": "YRP",
                    "startup": 27,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 9,
                    "gatling": []
                }
            }
        },
        "Jam": {
            "defenseModifier": 1.06,
            "guts": 3,
            "stunResistance": 65,
            "jumpStartup": 3,
            "backdashTime": 13,
            "backdashInvul": [1, 7],
            "moves": {
                "5P": {
                    "key": "5P",
                    "hits": 1,
                    "damage": [
                        12
                    ],
                    "tension": [
                        144
                    ],
                    "risc_hit": -8,
                    "risc_gain": 3,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        0
                    ],
                    "guard": "Mid",
                    "cancel": "CSJ",
                    "roman": "YRP",
                    "startup": 3,
                    "active": [
                        3
                    ],
                    "total_active": 3,
                    "recovery": 7,
                    "gatling": [
                        "5P",
                        "2P",
                        "5K",
                        "2K",
                        "6K",
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
                    "hits": 1,
                    "damage": [
                        12
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": "initial",
                    "prorate_amount": 0.8,
                    "level": [
                        1
                    ],
                    "guard": "Low",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 4,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 6,
                    "gatling": [
                        "5P",
                        "2P",
                        "6P",
                        "2K",
                        "6K",
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
                "c.S": {
                    "key": "c.S",
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "JS",
                    "roman": "YRP",
                    "startup": 6,
                    "active": [
                        8
                    ],
                    "total_active": 8,
                    "recovery": 12,
                    "gatling": [
                        "6P",
                        "6K",
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
                    "hits": 1,
                    "damage": [
                        30
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "JS",
                    "roman": "YRP",
                    "startup": 6,
                    "active": [
                        5
                    ],
                    "total_active": 5,
                    "recovery": 11,
                    "gatling": [
                        "2S",
                        "5H",
                        "2H",
                        "5D",
                        "2D"
                    ]
                },
                "5H": {
                    "key": "5H",
                    "hits": 3,
                    "damage": [
                        24,
                        24,
                        24
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 16,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        3,
                        3,
                        4
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 13,
                    "active": [
                        3,
                        -3,
                        3,
                        -3,
                        3
                    ],
                    "total_active": 15,
                    "recovery": 15,
                    "gatling": [
                        "6K",
                        "f.S",
                        "2H",
                        "5D",
                        "2D"
                    ]
                },
                "5D": {
                    "key": "5D",
                    "hits": 1,
                    "damage": [
                        16
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -20,
                    "risc_gain": 10,
                    "prorate_type": "initial",
                    "prorate_amount": 0.8,
                    "level": [
                        2
                    ],
                    "guard": "High",
                    "cancel": "-",
                    "roman": "YRP",
                    "startup": 25,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 12,
                    "gatling": []
                },
                "6P": {
                    "key": "6P",
                    "hits": 2,
                    "damage": [
                        18,
                        18
                    ],
                    "tension": [
                        264,
                        384
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2,
                        3
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 9,
                    "active": [
                        3,
                        -6,
                        3
                    ],
                    "total_active": 12,
                    "recovery": 12,
                    "gatling": [
                        "2P",
                        "6K",
                        "c.S",
                        "f.S",
                        "2S",
                        "5H",
                        "2H",
                        "5D",
                        "2D"
                    ]
                },
                "6K": {
                    "key": "6K",
                    "hits": 2,
                    "damage": [
                        16,
                        26
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 8,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        1,
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "JS",
                    "roman": "YRP",
                    "startup": 6,
                    "active": [
                        4,
                        -6,
                        12
                    ],
                    "total_active": 22,
                    "recovery": 20,
                    "gatling": [
                        "2P",
                        "2K",
                        "c.S",
                        "f.S",
                        "2S",
                        "2H",
                        "6H",
                        "5D",
                        "2D"
                    ]
                },
                "6H": {
                    "key": "6H",
                    "hits": 1,
                    "damage": [
                        36
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 20,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        4
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 14,
                    "active": [
                        3
                    ],
                    "total_active": 3,
                    "recovery": 22,
                    "gatling": []
                },
                "2P": {
                    "key": "2P",
                    "hits": 1,
                    "damage": [
                        6
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": "initial",
                    "prorate_amount": 0.9,
                    "level": [
                        1
                    ],
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
                        "5H",
                        "2H",
                        "6H",
                        "5D",
                        "2D"
                    ]
                },
                "2K": {
                    "key": "2K",
                    "hits": 1,
                    "damage": [
                        8
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": "initial",
                    "prorate_amount": 0.85,
                    "level": [
                        1
                    ],
                    "guard": "Low",
                    "cancel": "CS",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        3
                    ],
                    "total_active": 3,
                    "recovery": 9,
                    "gatling": [
                        "6P",
                        "5K",
                        "2K",
                        "c.S",
                        "f.S",
                        "2S",
                        "2H",
                        "6H",
                        "5D",
                        "2D"
                    ]
                },
                "2S": {
                    "key": "2S",
                    "hits": 1,
                    "damage": [
                        26
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": "initial",
                    "prorate_amount": 0.85,
                    "level": [
                        2
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 6,
                    "active": [
                        5
                    ],
                    "total_active": 5,
                    "recovery": 9,
                    "gatling": [
                        "5K",
                        "2K",
                        "5H",
                        "2H",
                        "5D",
                        "2D"
                    ]
                },
                "2H": {
                    "key": "2H",
                    "hits": 2,
                    "damage": [
                        28,
                        20
                    ],
                    "tension": [
                        384
                    ],
                    "risc_hit": -6,
                    "risc_gain": 14,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        3,
                        3
                    ],
                    "guard": "Mid",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 11,
                    "active": [
                        8,
                        -6,
                        4
                    ],
                    "total_active": 18,
                    "recovery": 13,
                    "gatling": [
                        "5D",
                        "2D"
                    ]
                },
                "2D": {
                    "key": "2D",
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "Low",
                    "cancel": "JS",
                    "roman": "YRP",
                    "startup": 6,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 16,
                    "gatling": []
                },
                "j.P": {
                    "key": "j.P",
                    "hits": 1,
                    "damage": [
                        11
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        1
                    ],
                    "guard": "High/Air",
                    "cancel": "CS",
                    "roman": "YRP",
                    "startup": 6,
                    "active": [
                        4
                    ],
                    "total_active": 4,
                    "recovery": 16,
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
                    "hits": 1,
                    "damage": [
                        14
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 6,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        1
                    ],
                    "guard": "High/Air",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        8
                    ],
                    "total_active": 8,
                    "recovery": 11,
                    "gatling": [
                        "j.P",
                        "j.S",
                        "j.H",
                        "j.D"
                    ]
                },
                "j.S": {
                    "key": "j.S",
                    "hits": 1,
                    "damage": [
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "High/Air",
                    "cancel": "JS",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        5
                    ],
                    "total_active": 5,
                    "recovery": 9,
                    "gatling": [
                        "j.P",
                        "j.H"
                    ]
                },
                "j.H": {
                    "key": "j.H",
                    "hits": 1,
                    "damage": [
                        35
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2
                    ],
                    "guard": "High/Air",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 5,
                    "active": [
                        10
                    ],
                    "total_active": 10,
                    "recovery": 16,
                    "gatling": []
                },
                "j.D": {
                    "key": "j.D",
                    "hits": 2,
                    "damage": [
                        16,
                        28
                    ],
                    "tension": [
                        264
                    ],
                    "risc_hit": -7,
                    "risc_gain": 10,
                    "prorate_type": null,
                    "prorate_amount": 1.0,
                    "level": [
                        2,
                        2
                    ],
                    "guard": "High/Air",
                    "cancel": "S",
                    "roman": "YRP",
                    "startup": 7,
                    "active": [
                        3,
                        -6,
                        6
                    ],
                    "total_active": 15,
                    "recovery": 16,
                    "recovery_after_landing": 4,
                    "gatling": []
                }
            }
        }
    };

    var universalActions = {
        "_S": { "name": "Stand" },
        "_B": { "name": "Block" },
        "_IB": { "name": "Instant Block" },
        "_FD": { "name": "Faultless Defense" },
        "_C": { "name": "Crouch" },
        "_J": { "name": "Jump" },
        "_L": { "name": "Land" }
    }

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

    function blockstun(level, instant, faultless) {
        var column = 3;
        if(instant) column = 4;
        if(faultless) column = 5;
        return _stunTable[level][column];
    };

    function attackCancelAllowed(curMove, newMove) {
        return (curMove.gatling.indexOf(newMove.key) != -1)
            || (newMove.type === 'special' && curMove.cancel.indexOf('S') != -1);
    };

    function jumpCancelAllowed(curMove) {
        return curMove.cancel.indexOf('J') != -1;
    };

    function hitboxIndex(move, duration) {
        var activeStart = move.startup;
        if(duration < activeStart) {
            return -1;
        }
        var count = 0;
        var ind = 0;
        for(var i = 0; i < move.active.length; i++) {
            if(move.active[i] > 0 
                && duration >= activeStart + count 
                && duration < activeStart + count + move.active[i]) {
                return ind;
            }
            count += Math.abs(move.active[i]);
            if(move.active[i] > 0) {
                ind++;
            }
        }
        return -1;
    }

    return {
        data: data,
        universalActions: universalActions,
        hitstun: hitstun,
        blockstun: blockstun,
        attackCancelAllowed: attackCancelAllowed,
        jumpCancelAllowed: jumpCancelAllowed,
        hitboxIndex: hitboxIndex
    }
})();

export default Characters;