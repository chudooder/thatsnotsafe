<template>
    <div class="sidebar">
        <div class="sidebar-header">
            {{ charName }}
        </div>
        <SidebarRow
            v-for="(move, name, index) in moves"
            :key="name"
            :move="move"
            :name="name"
            :index="index"/>
    </div>
</template>

<script>
    import SidebarRow from './SidebarRow.vue';

    export default {
        components: { SidebarRow },
        props: {
            charName: String,
            moves: Object
        }
    }
</script>