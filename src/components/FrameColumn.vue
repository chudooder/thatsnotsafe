<template>
    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave">

        <div class="frame-col">
            <div class="frame-row">
                <ActionIndicator
                    :action="actions[0][frame-1]"
                    :player="0"
                    :frame="frame-1"></ActionIndicator>
            </div>
            <div class="frame-row">
                <FrameIndicator :top=true :frame-type="frameData[0][frame - 1]"></FrameIndicator>
            </div>
            <div class="frame-row">
                <span>{{ frame }}</span>
            </div>
            <div class="frame-row">
                <FrameIndicator :top=false :frame-type="frameData[1][frame - 1]"></FrameIndicator>
            </div>
            <div class="frame-row">
                <ActionIndicator
                    :action="actions[1][frame-1]"
                    :player="1"
                    :frame="frame-1"></ActionIndicator>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapState } from 'vuex';
    import FrameIndicator from './FrameIndicator.vue';
    import ActionIndicator from './ActionIndicator.vue';
    import Velocity from 'velocity-animate';

    export default {
        components: { FrameIndicator, ActionIndicator },

        props: {
            frame: Number
        },

        computed: mapState(['actions', 'characters', 'frameData']),

        methods: {
            beforeEnter: function(el) {
                Velocity(
                    el,
                    { opacity: 0, translateY: '-10px' },
                    { duration: 0 });
            },

            enter: function(el, done) {
                Velocity(
                    el,
                    { opacity: 1, translateY: '0px' },
                    { complete: done });
            },

            leave: function(el, done) {
                Velocity(
                    el,
                    { opacity: 0, translateY: '-10px' },
                    { complete: done });
            }
        }
    }

</script>