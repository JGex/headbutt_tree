<style lang="scss">
@import './Map.scss';
</style>

<template>
  <div v-if="config.map.name != ''">
    <img v-if="loaded" :src="img.src" :alt="img.alt" :width="img.width" :height="img.height" />
  </div>
</template>

<script setup lang="ts">
import { HeadbuttConfiguration } from '@/stores/Configuration'
import Map from '@/globals/map'
import { ref, watch } from 'vue'

const config = HeadbuttConfiguration()

let img = new Image()
let loaded = ref(false)

function loadImage(imageName: string, mapScale: number): HTMLImageElement {
  if (imageName == '') {
    return img
  }

  img.onload = () => {
    img.width = img.naturalWidth * mapScale
    img.height = img.naturalHeight * mapScale

    loaded.value = true
  }
  img.src = `public/maps/${imageName}.png`
  img.alt = Map.MAP[imageName].text

  return img
}

watch(
  () => [config.map.name, config.map.scale],
  ([mapName, mapScale]) => {
    loaded.value = false

    if (mapName != '') {
      img = loadImage(mapName, mapScale)
    }
  },
  { immediate: true }
)
</script>
