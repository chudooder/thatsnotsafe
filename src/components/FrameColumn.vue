<template>
    <transition name="fade">
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

    export default {
        components: { FrameIndicator, ActionIndicator },

        props: {
            frame: Number
        },

        computed: mapState(['actions', 'characters', 'frameData'])
    }

</script>