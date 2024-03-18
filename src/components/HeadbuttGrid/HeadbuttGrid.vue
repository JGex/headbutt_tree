<style lang="scss" scoped>
@import './HeadbuttGrid.scss';
</style>

<template>
  <div class="content">
    <div class="panel panel--left">
      <div class="element">
        <Configuration />
      </div>
      <div class="element">
        <Encounter />
      </div>
      <div class="element">
        <Usage />
      </div>
      <div v-if="debug" class="element">
        <Pivot />
      </div>
    </div>
    <div class="panel panel--right">
      <Map />
    </div>
  </div>
</template>

<script setup lang="ts">
import Configuration from '@/components/Configuration/Configuration.vue'
import Encounter from '@/components/Encounter/Encounter.vue'
import Pivot from '@/components/Pivot/Pivot.vue'
import Map from '@/components/Map/Map.vue'
import Usage from '@/components/Usage/Usage.vue'

const urlParams = new URLSearchParams(window.location.search)
const debug = urlParams.has('debug')
</script>
