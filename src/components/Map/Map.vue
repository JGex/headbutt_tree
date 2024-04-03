<style lang="scss" scoped>
@import './Map.scss';
</style>

<template>
  <div class="map-display" v-if="config.map.name != ''">
    <img v-if="imgLoaded" :src="img.src" :alt="img.alt" :width="img.width" :height="img.height" />
    <div v-if="gridLoaded" class="grid-content">
      <div v-for="w in img.naturalWidth / 16">
        <div
          v-for="h in img.naturalHeight / 16"
          class="grid-tile"
          v-bind:style="{
            width: `${tileSize}px`,
            height: `${tileSize}px`,
            fontSize: `${tileSize - 4 * config.map.scale}px`
          }"
        >
          <span v-if="isStar(w, h)" class="fa fa-star checked high"></span>
          <span v-else-if="isCircle(w, h)" class="fa fa-circle moderate"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeadbuttConfiguration } from '@/stores/Configuration'
import { ref, watch } from 'vue'

const config = HeadbuttConfiguration()
const imgLoaded = ref<boolean>(false)
const gridLoaded = ref<boolean>(false)
const tileSize = ref<number>(16)

let img = new Image()

function loadImage(imageName: string, mapScale: number): HTMLImageElement {
  if (imageName === '') {
    return img
  }

  img.onload = () => {
    img.width = img.naturalWidth * mapScale
    img.height = img.naturalHeight * mapScale

    imgLoaded.value = true
  }

  img.src = `public/maps/${imageName}.png`
  img.alt = imageName

  return img
}

function isStar(w: number, h: number): boolean {
  const pivot = calcPivot()
  const index = calcIndex(w, h)

  return pivot == index
}

function isCircle(w: number, h: number): boolean {
  const pivot = calcPivot()
  let index = calcIndex(w, h)

  if (pivot > index) {
    index += 10
  }

  return index - pivot < 5
}

function calcIndex(w: number, h: number): number {
  let x = w + 4
  let y = h + 4

  return Math.floor((x * y + x + y) / 5) % 10
}

function calcPivot(): number {
  return parseInt(config.trainerId) % 10
}

watch(
  () => [config.map.name, config.map.scale, config.trainerId],
  ([mapName, mapScale, trainerId]) => {
    imgLoaded.value = false
    gridLoaded.value = trainerId !== '' && mapName !== ''
    tileSize.value = 16 * mapScale

    if (mapName != '') {
      img = loadImage(mapName, mapScale)
    }
  },
  { immediate: true }
)
</script>
