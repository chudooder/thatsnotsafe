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
            <FrameColumn
                v-for="frame in frameData[0].length"
                :key="frame"
                :frame="frame"></FrameColumn>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import FrameColumn from './FrameColumn.vue';
    import Sidebar from './Sidebar.vue';
    import Characters from '../engine/characters.js';
    import Rules from '../engine/rules.js';

    export default {
        components: { FrameColumn, Sidebar },

        data: function() { 
            return {
                moveSelected: false
            }
        },

        computed: mapState(['characters', 'frameData']),

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