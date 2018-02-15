"use strict";

Vue.component("frame-indicator", {
    props: {
        frameType: Number
    },
    methods: {
        toColor: function(frameType) {
            switch(frameType) {
                case Rules.FrameType.NEUTRAL:
                    return "#ffffff";
                case Rules.FrameType.ATTACK_STARTUP:
                    return "#ffd70f"
                case Rules.FrameType.ATTACK_ACTIVE:
                    return "#c63e00";
                case Rules.FrameType.ATTACK_ACTIVE_NO_HITBOX:
                    return "#ea6417";
                case Rules.FrameType.ATTACK_RECOVERY:
                    return "#9b044b";
                case Rules.FrameType.HITSTUN:
                    return "#ff1c1c";
                case Rules.FrameType.BLOCKSTUN:
                    return "#275fea";
            }
        }
    },
    template: '<div class="frame-indicator" :style="{backgroundColor: toColor(frameType)}"></div>'

});

var app = new Vue({
    el: "#app",
    data: {
        characters: ["Elphelt", "Elphelt"],
        actions: [["5P"], ["_B"]],
        frameData: [[],[]],
    },

    methods: {
        calculateFrameData: function() {
            this.frameData = Rules.calculateFrames(this.characters, this.actions);
        }
    },

    beforeMount(){
        this.calculateFrameData();
    }
});