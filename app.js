"use strict";

Vue.component("frame-indicator", {
    props: {
        frameType: Number,
        top: Boolean
    },
    methods: {
        toColor: function(frameType) {
            switch(frameType) {
                case Rules.FrameType.NEUTRAL:
                    return "#ffffff";
                case Rules.FrameType.ATTACK_STARTUP:
                    return "#ffd70f"
                case Rules.FrameType.ATTACK_ACTIVE:
                    return "#ff6a00";
                case Rules.FrameType.ATTACK_ACTIVE_NO_HITBOX:
                    return "#ffb86d";
                case Rules.FrameType.ATTACK_RECOVERY:
                    return "#9b044b";
                case Rules.FrameType.HITSTUN:
                    return "#ff1c1c";
                case Rules.FrameType.BLOCKSTUN:
                    return "#275fea";
            }
        },

        toString: function(frameType) {
            switch(frameType) {
                case Rules.FrameType.NEUTRAL:
                    return "Neutral";
                case Rules.FrameType.ATTACK_STARTUP:
                    return "Startup"
                case Rules.FrameType.ATTACK_ACTIVE:
                    return "Active (hitbox)";
                case Rules.FrameType.ATTACK_ACTIVE_NO_HITBOX:
                    return "Active (no hitbox)";
                case Rules.FrameType.ATTACK_RECOVERY:
                    return "Recovery";
                case Rules.FrameType.HITSTUN:
                    return "Hitstun";
                case Rules.FrameType.BLOCKSTUN:
                    return "Blockstun";
            }
        },

        getTooltipStyle: function(top) {
            if(top) {
                return {bottom: "120%"};
            } else {
                return {top: "120%"};
            }
        }
    },
    template: '<div class="frame-indicator" :style="{backgroundColor: toColor(frameType)}">'
    + '<span class="frame-tooltip" :style=getTooltipStyle(top) >{{ toString(frameType) }}</span></div>'
});

var app = new Vue({
    el: "#app",
    data: {
        characters: ["Elphelt", "Elphelt"],
        actions: [["5K", null, null, null, null, null, null, "f.S"], ["_B"]],
        frameData: [[],[]],
    },

    methods: {
        calculateFrameData: function() {
            this.frameData = Rules.calculateFrames(this.characters, this.actions);
        },

        getCharacterMoves: function(player) {
            var character = this.characters[player];
            return Characters.data[character].moves;
        }
    },

    beforeMount(){
        this.calculateFrameData();
    }
});