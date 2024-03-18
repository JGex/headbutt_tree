<template>
  <div>
    <div>
      <span> Trainer ID :</span>
      <span> {{ configuration.trainerId }} </span>
    </div>
    <div>
      <span> Map name :</span>
      <span> {{ configuration.map.name }} </span>
    </div>
    <div>
      <span> Map scale :</span>
      <span> {{ configuration.map.scale }} </span>
    </div>
    <div>
      <span> Rare :</span>
      <span> {{ calcPivot() }} </span>
    </div>
    <div>
      <span> Normal :</span>
      <span> {{ calc() }} </span>
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
