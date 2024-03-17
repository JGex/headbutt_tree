<style lang="scss">
@import './Encounter.scss';
</style>

<template>
  <div class="e__content">
    <div class="e__content__encounter" v-if="Configuration.map.name != ''">
      <div
        :class="`e__content__encounter__versions e__content__encounter__versions--${version}`"
        v-for="(encounterGroup, version) in Map.ENCOUNTER_GROUP"
      >
        <div
          :class="`e__content__encounter__versions__rate e__content__encounter__versions__rate--${rate}`"
          v-for="rate in Encounter"
        >
          <div class="e__content__encounter__versions__rate__label">
            {{ $t('message.encounter.' + rate) }}
          </div>
          <div
            class="e__content__encounter__versions__rate__pokemons"
            v-for="pokemon in getPokemons(encounterGroup, version, rate)"
            v-bind:style="{ backgroundImage: 'url(public/pokemon/' + pokemon.poke + '.png)' }"
          >
            <div class="e__content__encounter__versions__rate__pokemons__rate">
              {{ pokemon.rate }}%
            </div>
          </div>
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
