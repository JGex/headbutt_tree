<style lang="scss" scoped>
@import './HeadbuttGrid.scss';
</style>

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
