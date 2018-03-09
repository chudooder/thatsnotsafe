<template>
    <div>
        <div
            class="sidebar-header"
            @click="hidden = !hidden">
            <div class="sidebar-header-container" style="display:inline-block"> {{ sectionName }} </div>
            <div class="sidebar-header-container" style="float:right">
                <img :style=getArrowStyle() src="~./img/menu-arrow.png">
            </div>
        </div>
        <div v-if="!hidden">
            <SidebarRow
                v-if="actions"
                v-for="(action, name, index) in actions"
                :key="name"
                :action="action"
                :name="name"
                :index="index"></SidebarRow>
            <SidebarRow
                v-if="moves"
                v-for="(move, name, index) in moves"
                :key="name"
                :move="move"
                :name="name"
                :index="index"
                :character="character"></SidebarRow>
        </div>
    </div>
</template>

<script>
    import SidebarRow from "./SidebarRow.vue";

    export default {
        components: { SidebarRow },
        props: {
            sectionName: String,
            actions: Object,
            moves: Object,
            character: String
        },
        
        data: function() {
            return {
                hidden: false
            }
        },

        methods: {
            getArrowStyle: function() {
                if(this.hidden) {
                    return {transform: "rotate(-90deg)"}
                }
            }
        }
    }
</script>