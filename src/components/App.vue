<template>
    <div>
        <Sidebar :characters="characters"/>

        <div class="timeline">
            <!-- Timeline header -->

            <div class="header-col">
                <div class="header-row"></div>
                <div class="header-row">
                    <div class="select-char">
                        <!-- totally violates Vuex mutations but oh well -->
                        <select v-model="characters[0]">
                            <option v-for="char in getCharacterList()">{{char}}</option>
                        </select>
                    </div>
                </div>
                <div class="header-divider">
                </div>
                <div class="header-row">
                    <div class="select-char">
                        <select v-model="characters[1]">
                            <option v-for="char in getCharacterList()">{{char}}</option>
                        </select>
                    </div>
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
            getCharacterList: function() {
                return Object.keys(Characters.data);
            },

            getCharacterMoves: function(player) {
                var charName = this.characters[player];
                return Characters.data[charName].moves;
            },

            getUniversalActions: function() {
                return Characters.universalActions;
            }
        },

        beforeMount(){
            this.$store.commit('calculateFrameData');
        }
    }
</script>