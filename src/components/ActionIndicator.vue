<template>
    <div
        @click="removeAction"
        @dragover.prevent
        @drop="drop"
        @mouseover="hovering = true"
        @mouseout="hovering = false"
        :style="styleObject()"
        class="action-indicator">
        {{ action }}
    </div>
</template>

<script>
    export default {
        props: {
            action: String,
            player: Number,
            frame: Number,
            showBorder: Boolean
        },

        data: function() { return {
            hovering: false,
        }},

        methods: {
            removeAction: function() {
                this.$emit('remove', this.player, this.frame);
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
                if(this.showBorder) {
                    return '#aaa';
                } else {
                    return '#0000';
                }
            },

            drop: function(event) {
                event.preventDefault();
                var name = event.dataTransfer.getData("name");
                this.$emit('add', this.player, this.frame, name);
            }
        }
    }
</script>