<template>
    <div class="sidebar-row"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
        :class="{'sidebar-dark': index % 2 == 0, 'sidebar-light': !(index % 2 == 0), 'sidebar-selected': isSelected}">
        <template v-if="action">
            <span> {{ action.name }} </span>
        </template>

        <template v-if="move">
            <span> {{ name }} </span>
            <div v-if="move" style="float:right; display:inline-block;">
                <div class="sidebar-row-framedata startup"><span class="center-span">{{ move.startup }}</span></div><div class="sidebar-row-framedata active"><span class="center-span">{{ move.total_active }}</span></div><div class="sidebar-row-framedata recovery"><span class="center-span">{{ move.recovery }}</span></div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            "move": Object,
            "action": Object,
            "name": String,
            "index": Number,
            "character": String
        },

        computed: {
            isSelected: function() {
                var selectedMove = this.$store.state.selectedMove;
                if(!selectedMove)
                    return false;
                return this.character == selectedMove.character
                    && this.action == selectedMove.action
                    && this.move == selectedMove.move
            }
        },

        methods: {
            dragStart: function(event) {
                event.dataTransfer.setData("name", this.name);
                this.$store.commit('selectMove', {
                    move: this.move,
                    action: this.action,
                    character: this.character
                });
            },

            dragEnd: function(event) {
                this.$store.commit('deselectMove');
            }
        }
    }
</script>