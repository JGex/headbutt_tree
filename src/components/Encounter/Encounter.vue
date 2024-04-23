<style lang="scss" scoped>
@import './Encounter.scss';
</style>

<template>
  <div v-if="Configuration.map.name != ''">
    <div
      v-for="(encounterGroup, version) in Map.ENCOUNTER_GROUP"
      :class="`version version--${version}`"
    >
      <div :class="`rate rate--${rate}`" v-for="rate in Encounter">
        <span class="label">
          {{ $t(`message.encounter.${rate}`) }}
        </span>
        <div
          class="pokemon"
          v-for="pokemonEncounter in getPokemons(encounterGroup, version, rate)"
          v-bind:style="{
            backgroundImage: `url(/pokemon/${pokemonEncounter.poke}.png)`
          }"
        >
          <div class="pokemon-rate">{{ pokemonEncounter.rate }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeadbuttConfiguration } from '@/stores/Configuration'
import Encounter from '@/globals/encounter'
import Map, { type PokemonEncounter, type PokemonEncounterGroup } from '@/globals/map'

const Configuration = HeadbuttConfiguration()

function getPokemons(
  group: Array<PokemonEncounterGroup>,
  version: string,
  rate: string
): Array<PokemonEncounter> {
  return group[Map.MAP[Configuration.map.name].encounter[version]][rate]
}
</script>
