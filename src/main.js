import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex/dist/vuex.js';
import App from './components/App.vue';
import Characters from './engine/characters.js';
import Rules from './engine/rules.js';

import Tests from './engine/tests.js';

import styles from './styles/styles.css'
import anims from './styles/animation.css'

Vue.use(Vuex);

// helper functions
var trimActions = function(arr) {
    for(var p = 0; p <= 1; p++) {
        var i = arr[p].length - 1;
        while(arr[p][i] == null && i >= 0) {
            i--;
        }
        arr[p] = arr[p].slice(0, i+1);
    }
}

const store = new Vuex.Store({
    state: {
        characters: ["Elphelt", "Elphelt"],
        commands: [["5K"], ["_B", "_C"]],
        frameData: [[],[]],
        selectedCommand: null
    },

    mutations: {
        calculateFrameData: function(state) {
            state.frameData = Rules.calculateFrames(state.characters, state.commands);
        },

        removeAction: function(state, payload) {
            state.commands[payload.player][payload.frame] = null;
            trimActions(state.commands);
            state.frameData = Rules.calculateFrames(state.characters, state.commands);
        },

        addAction: function(state, payload) {
            // pad out commands array
            for(var i = state.commands[payload.player].length; i < payload.frame; i++) {
                state.commands[payload.player][i] = null;
            }
            state.commands[payload.player][payload.frame] = payload.name;
            trimActions(state.commands);
            state.frameData = Rules.calculateFrames(state.characters, state.commands);
        },

        selectCommand: function(state, payload) {
            state.selectedCommand = payload;
        },

        deselectCommand: function(state) {
            state.selectedCommand = null;
        },

        setCharacter: function(state, payload) {
            state.characters[payload.player] = payload.character;
        }
    }
});

var app = new Vue({
    el: "#app",
    template: "<App/>",
    components: { App },
    store   // inject store
});