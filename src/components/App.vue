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
                        v-on:remove="removeAction"
                        v-on:add="addAction"
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
                        v-on:remove="removeAction"
                        v-on:add="addAction"
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
    import FrameIndicator from './FrameIndicator.vue'
    import ActionIndicator from './ActionIndicator.vue'
    import Sidebar from './Sidebar.vue'
    import Characters from '../engine/characters.js';
    import Rules from '../engine/rules.js';

    export default {
        components: { FrameIndicator, ActionIndicator, Sidebar },

        data: function() {
            return {
                characters: ["Elphelt", "Elphelt"],
                actions: [["5K", null, null, null, null, null, null, "f.S"], ["_B"]],
                frameData: [[],[]],
                moveSelected: false
            }
        },

        methods: {
            calculateFrameData: function() {
                this.frameData = Rules.calculateFrames(this.characters, this.actions);
            },

            getCharacterMoves: function(player) {
                var character = this.characters[player];
                return Characters.data[character].moves;
            },

            removeAction: function(player, frame) {
                this.actions[player][frame] = null;
                this.trimActions();
                this.calculateFrameData();
            },

            addAction: function(player, frame, name) {
                // pad out actions array
                for(var i = this.actions[player].length; i < frame; i++) {
                    this.actions[player][i] = null;
                }
                this.actions[player][frame] = name;
                this.trimActions();
                this.calculateFrameData();
            },

            trimActions: function() {
                for(var p = 0; p <= 1; p++) {
                    var i = this.actions[p].length - 1;
                    while(this.actions[p][i] == null && i >= 0) {
                        i--;
                    }
                    this.actions[p] = this.actions[p].slice(0, i+1);
                }
            }
        },

        beforeMount(){
            this.calculateFrameData();
        }
    }
</script>