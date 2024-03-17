<style lang="scss">
@import './Pivot.scss';
</style>

<template>
  <div class="e__content">
    <div class="c__content__rate">
      <span class="c__content__rate__label--rare"> Trainer ID </span>
      <span class="c__content__rate__pivot--rare"> {{ configuration.trainerId }} </span>
    </div>
    <div class="c__content__rate">
      <span class="c__content__rate__label--rare"> Map name </span>
      <span class="c__content__rate__pivot--rare"> {{ configuration.map.name }} </span>
    </div>
    <div class="c__content__rate">
      <span class="c__content__rate__label--rare"> Map scale </span>
      <span class="c__content__rate__pivot--rare"> {{ configuration.map.scale }} </span>
    </div>
    <div class="c__content__rate">
      <span class="c__content__rate__label--rare"> Rare </span>
      <span class="c__content__rate__pivot--rare"> {{ calcPivot() }} </span>
    </div>
    <div class="c__content__rate">
      <span class="c__content__rate__label--moderate"> Normal </span>
      <span class="c__content__rate__pivot--moderate"> {{ calc() }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeadbuttConfiguration } from '@/stores/Configuration'

const configuration = HeadbuttConfiguration()

function calcPivot(): number | null {
  if (configuration.trainerId != '') {
    return configuration.trainerId % 10
  }

  return null
}

function calc(): string {
  let pivot = calcPivot()
  let moderateIds = []
  let lowIds = []
  let moderateList = ''

  if (pivot != null) {
    for (let i = 1; i < 5; i++) {
      moderateIds.push((pivot + i) % 10)
    }
    for (let i = 1; i < 6; i++) {
      lowIds.push((pivot - i + 10) % 10)
    }
    moderateList = moderateIds.join(', ') + ', ' + lowIds.join(', ')
  }

  return moderateList
}
</script>
