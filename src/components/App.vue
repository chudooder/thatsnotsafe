<template>
  <div>
    <Sidebar
      :charName="characters[0]"
      :moves="getCharacterMoves(0)"/>
    <div class="timeline">
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
      <div class="frame-col" v-for="frame in frameData[0].length">
        <div class="frame-row">
          <span v-if="actions[0][frame-1]"> {{actions[0][frame-1]}} </span>
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
          <span v-if="actions[1][frame-1]"> {{actions[1][frame-1]}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import FrameIndicator from './FrameIndicator.vue'
    import Sidebar from './Sidebar.vue'
    import Characters from '../engine/characters.js';
    import Rules from '../engine/rules.js';

    export default {
        components: { FrameIndicator, Sidebar },

        data: function() {
            return {
                characters: ["Elphelt", "Elphelt"],
                actions: [["5K", null, null, null, null, null, null, "f.S"], ["_B"]],
                frameData: [[],[]]
            }
        },

        methods: {
            calculateFrameData: function() {
                console.log(Rules)
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
    }
</script>