<template>
    <div class="sidebar-row"
        draggable="true"
        @click="click"
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
                    && this.name === selectedMove.name
            }
        },

        methods: {
            dragStart: function(event) {
                this.$store.commit('selectMove', {
                    name: this.name,
                    character: this.character
                });
            },

            dragEnd: function(event) {
                this.$store.commit('deselectMove');
            },

            click: function(event) {
                if(this.isSelected) {
                    this.$store.commit('deselectMove');
                } else {
                    this.$store.commit('selectMove', {
                        name: this.name,
                        character: this.character
                    });
                }
            }
        }
    }
</script>