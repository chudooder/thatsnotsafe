<template>
    <transition name="column-slide">
        <div class="frame-col">
            <div class="frame-row">
                <CommandIndicator
                    :cmdName="commands[0][frame-1]"
                    :player="0"
                    :frame="frame-1"></CommandIndicator>
            </div>
            <div class="frame-row">
                <FrameIndicator :top=true :frameData="frameData[0][frame - 1]"></FrameIndicator>
            </div>
            <div class="frame-row">
                <span>{{ frame }}</span>
            </div>
            <div class="frame-row">
                <FrameIndicator :top=false :frameData="frameData[1][frame - 1]"></FrameIndicator>
            </div>
            <div class="frame-row">
                <CommandIndicator
                    :cmdName="commands[1][frame-1]"
                    :player="1"
                    :frame="frame-1"></CommandIndicator>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapState } from 'vuex';
    import FrameIndicator from './FrameIndicator.vue';
    import CommandIndicator from './CommandIndicator.vue';

    export default {
        components: { FrameIndicator, CommandIndicator },

        props: {
            frame: Number
        },

        computed: mapState(['commands', 'characters', 'frameData'])
    }

</script>