<template>
    <div v-on:click="removeAction" class="action-indicator">
        <span class="center-span unselectable">{{ action }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            action: String,
            player: Number,
            frame: Number
        },

        methods: {
            removeAction: function() {
                console.log('button clicked');
                this.$emit('remove', this.player, this.frame);
            }
        }
    }
</script>