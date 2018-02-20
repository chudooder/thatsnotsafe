<template>
    <div>
        <Sidebar
            :charName="characters[0]"
            :moves="getCharacterMoves(0)"/>

        <div class="timeline">
            <!-- Timeline header -->

            <div class="header-col">
                <div class="header-row"></div>
                <div class="header-row">
                    <span> {{ characters[0] }} </span>
                </div>
                <div class="header-row">
                    <span> -------------------- </span>
                </div>
                <div class="header-row">
                    <span> {{ characters[1] }} </span>
                </div>
                <div class="header-row"></div>
            </div>

            <!-- Timeline elements -->
            <div class="frame-col" v-for="frame in frameData[0].length">
                <div class="frame-row">
                    <ActionIndicator
                        :action="actions[0][frame-1]"
                        :player="0"
                        :frame="frame-1"
                        :showBorder="moveSelected"/>
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
                        :frame="frame-1"
                        :showBorder="moveSelected"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import FrameIndicator from './FrameIndicator.vue'
    import ActionIndicator from './ActionIndicator.vue'
    import Sidebar from './Sidebar.vue'
    import Characters from '../engine/characters.js';
    import Rules from '../engine/rules.js';

    export default {
        components: { FrameIndicator, ActionIndicator, Sidebar },

        data: function() { 
            return {
                moveSelected: false
            }
        },

        computed: mapState(['characters', 'actions', 'frameData']),

        methods: {
            getCharacterMoves: function(player) {
                var charName = this.characters[player];
                return Characters.data[charName].moves;
            }
        },

        beforeMount(){
            this.$store.commit('calculateFrameData');
        }
    }
</script>