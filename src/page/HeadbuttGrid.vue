<template>
    <div class="map">
        <Map />
    </div>
    <div class="menu">
        <Menu />
    </div>
</template>

<script setup lang="ts">
import Map from '@/components/Map/Map.vue'
import Menu from '@/components/Menu/Menu.vue'
</script>

<style lang="scss" scoped>
.menu {
    position: absolute;
    top: 4px;
    left: 4px;
}

.map {
    overflow: hidden;
}
</style>
