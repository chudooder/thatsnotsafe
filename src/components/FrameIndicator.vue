<template>
    <div class="frame-indicator" :style="getStyle()">
        <span class="frame-tooltip unselectable" :style=getTooltipStyle(top) >{{ toString(frameData) }}</span>
    </div>
</template>

<script>
    import Rules from '../engine/rules.js';
    import Velocity from 'velocity-animate'

    export default {
        props: {
            frameData: Object,
            top: Boolean
        },

        computed: {
            color: function() {
                return this.toColor(this.frameData.type);
            },

            stripeBackground: function() {
                return require('./img/black-twill.png');
            }
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
                    case Rules.FrameType.JUMPSQUAT:
                        return "#333333";
                    case Rules.FrameType.LANDING_RECOVERY:
                        return "#9b044b";
                }
            },

            toString: function(frameData) {
                switch(frameData.type) {
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
                        return "Hitstun (" + frameData.stun + "F)";
                    case Rules.FrameType.BLOCKSTUN:
                        return "Blockstun (" + frameData.stun + "F)";
                    case Rules.FrameType.JUMPSQUAT:
                        return "Jump Startup"
                    case Rules.FrameType.LANDING_RECOVERY:
                        return "Landing Recovery"
                }
            },

            getStyle: function() {
                var style = {};
                style.backgroundColor = this.color;

                if(this.frameData.startOfHitbox) {
                    style.backgroundImage = 'url(' + this.stripeBackground + ')';
                }

                return style;
            },

            getTooltipStyle: function(top) {
                if(top) {
                    return {top: "120%"};
                } else {
                    return {bottom: "120%"};
                }
            }
        },

        watch: {
            color: function(newColor) {
                Velocity(
                    this.$el,
                    { backgroundColor: newColor },
                    { duration: 500 }
                );
            }
        }
    }
</script>