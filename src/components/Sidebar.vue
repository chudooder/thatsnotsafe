<template>
    <div class="sidebar">
        <SidebarSection
            :sectionName="'Universal Actions'"
            :actions="getUniversalActions()"></SidebarSection>
        <SidebarSection
            :sectionName="characters[0]"
            :moves="getMoves(characters[0])"></SidebarSection>
        <SidebarSection
            v-if="characters[0] != characters[1]"
            :sectionName="characters[1]"
            :moves="getMoves(characters[1])"></SidebarSection>
    </div>
</template>

<script>
    import SidebarSection from './SidebarSection.vue';
    import Characters from '../engine/characters.js'

    export default {
        components: { SidebarSection },
        props: {
            characters: Array
        },
        methods: {
            getUniversalActions : function() {
                return Characters.universalActions;
            },

            getMoves : function(charName) {
                return Characters.data[charName].moves;
            }
        }
    }
</script>