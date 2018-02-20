import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex/dist/vuex.js';
import App from './components/App.vue';
import Characters from './engine/characters.js';
import Rules from './engine/rules.js';

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
        actions: [["5K", null, null, null, null, null, null, "f.S"], ["_B"]],
        frameData: [[],[]],
        moveSelected: false
    },

    mutations: {
        calculateFrameData: function(state) {
            state.frameData = Rules.calculateFrames(state.characters, state.actions);
        },

        removeAction: function(state, payload) {
            state.actions[payload.player][payload.frame] = null;
            trimActions(state.actions);
            state.frameData = Rules.calculateFrames(state.characters, state.actions);
        },

        addAction: function(state, payload) {
            // pad out actions array
            for(var i = state.actions[payload.player].length; i < payload.frame; i++) {
                state.actions[payload.player][i] = null;
            }
            state.actions[payload.player][payload.frame] = payload.name;
            trimActions(state.actions);
            state.frameData = Rules.calculateFrames(state.characters, state.actions);
        },

        selectMove: function(state) {
            state.moveSelected = true;
        },

        deselectMove: function(state) {
            state.moveSelected = false;
        }
    }
});

var app = new Vue({
    el: "#app",
    template: "<App/>",
    components: { App },
    store   // inject store
});