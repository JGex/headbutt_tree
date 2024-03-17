<style lang="scss">
@import './HeadbuttGrid.scss';
</style>

<template>
  <div class="hg__content">
    <div class="hg__content__panel hg__content__panel--left">
      <div class="hg__content__panel__element">
        <Configuration />
      </div>
      <div class="hg__content__panel__element">
        <Encounter />
      </div>
      <div class="hg__content__panel__element">
        <Usage />
      </div>
      <div v-if="debug" class="hg__content__panel__element">
        <Pivot />
      </div>
    </div>
    <div class="hg__content__panel hg__content__panel--right">
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
