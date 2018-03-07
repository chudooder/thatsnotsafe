<template>
    <div
        @click="removeAction"
        @dragover.prevent
        @drop="drop"
        @mouseover="hovering = true"
        @mouseout="hovering = false"
        :style="styleObject()"
        class="action-indicator">
        {{ cleanup(action) }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        props: {
            action: String,
            player: Number,
            frame: Number,
        },

        data: function() { return {
            hovering: false,
        }},

        computed: mapState(['selectedMove', 'characters']),

        methods: {
            cleanup: function(str) {
                if(!str) {
                    return str;
                }
                if(str[0] == '_') {
                    str = str.slice(1);
                }
                return str;
            },

            removeAction: function() {
                this.$store.commit('removeAction', {
                    player: this.player, 
                    frame: this.frame
                });
            },

            styleObject: function() {
                return {
                    "background-color": this.backgroundColor(),
                    "border-color": this.borderColor()
                }
            },

            backgroundColor: function() {
                if(!this.action) {
                    return "#fff0";
                } else {
                    if(this.hovering)
                        return "#d51";
                    else
                        return "#5d1";
                }
            },

            borderColor: function() {
                if(this.selectedMove && this.canApply(this.selectedMove)) {
                    return '#aaa';
                } else {
                    return '#0000';
                }
            },

            drop: function(event) {
                event.preventDefault();
                if(this.canApply(this.selectedMove)) {
                    var name = event.dataTransfer.getData("name");
                    this.$store.commit('addAction', {
                        player: this.player,
                        frame: this.frame,
                        name: name
                    });
                }
            },

            canApply: function(movePayload) {
                return !movePayload.character
                    || movePayload.character === this.characters[this.player];
            }
        }
    }
</script>