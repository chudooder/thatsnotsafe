<template>
    <div class="sidebar-row"
        draggable="true"
        :class="{'sidebar-dark': index % 2 == 0, 'sidebar-light': !(index % 2 == 0)}">
        <span> {{ name }} </span>
        <div style="float:right; display:inline-block;">
            <div class="sidebar-row-framedata startup"><span class="center-span">{{ move.startup }}</span></div><div class="sidebar-row-framedata active"><span class="center-span">{{ move.total_active }}</span></div><div class="sidebar-row-framedata recovery"><span class="center-span">{{ move.recovery }}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            "move": Object,
            "name": String,
            "index": Number
        }
    }
</script>