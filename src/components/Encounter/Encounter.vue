<style lang="scss" scoped>
@import './Encounter.scss';
</style>

<template>
  <div v-if="Configuration.map.name != ''">
    <div
      :class="`version version--${version}`"
      v-for="(encounterGroup, version) in Map.ENCOUNTER_GROUP"
    >
      <div :class="`rate rate--${rate}`" v-for="rate in Encounter">
        <span class="label">
          {{ $t('message.encounter.' + rate) }}
        </span>
        <div
          class="pokemon"
          v-for="pokemon in getPokemons(encounterGroup, version, rate)"
          v-bind:style="{ backgroundImage: 'url(public/pokemon/' + pokemon.poke + '.png)' }"
        >
          <div class="pokemon-rate">{{ pokemon.rate }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeadbuttConfiguration } from '@/stores/Configuration'
import Encounter from '@/globals/encounter'
import Map from '@/globals/map'

const Configuration = HeadbuttConfiguration()

function getPokemons(group: Array, version: string, rate: string) {
  return group[Map.MAP[Configuration.map.name].encounter[version]][rate]
}
</script>
