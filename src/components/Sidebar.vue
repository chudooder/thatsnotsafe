<template>
    <div class="sidebar">
        <div class="sidebar-header">
            Universal Actions
        </div>
        <SidebarRow
            v-for="(action, name, index) in actions"
            :key="name"
            :action="action"
            :name="name"
            :index="index"></SidebarRow>
        <div class="sidebar-header">
            {{ charName }}
        </div>
        <SidebarRow
            v-for="(move, name, index) in moves"
            :key="name"
            :move="move"
            :name="name"
            :index="index"></SidebarRow>
    </div>
</template>

<script>
    import SidebarRow from './SidebarRow.vue';

    export default {
        components: { SidebarRow },
        props: {
            charName: String,
            moves: Object,
            actions: Object
        }
    }
</script>