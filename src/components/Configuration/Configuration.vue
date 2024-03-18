<style lang="scss" scoped>
@import './Configuration.scss';
</style>

<template>
  <div>
    <div class="form-widget">
      <label for="locale">
        {{ $t('message.configuration.language') }}
      </label>
      <select id="locale" class="widget-input" v-model="$i18n.locale">
        <option v-for="locale in Locale" :value="locale">
          {{ $t('message.locale.' + locale) }}
        </option>
      </select>
    </div>

    <div class="form-widget">
      <label for="trainer_id">
        {{ $t('message.configuration.trainer_id') }}
      </label>
      <input
        type="text"
        id="trainer_id"
        class="widget-input"
        v-model="trainerId"
        @keyup="configuration.setTrainerId(trainerId)"
        :placeholder="`${$t('message.configuration.enter_trainer_id')}`"
      />
    </div>

    <div class="form-widget">
      <label for="map_src">
        {{ $t('message.configuration.map') }}
      </label>
      <select
        id="map_src"
        class="widget-input"
        v-model="mapName"
        @change="configuration.setMapName(mapName)"
      >
        <option value="" disabled>{{ $t('message.configuration.select_map') }}</option>
        <option v-for="(mapOption, value) in Map.MAP" :value="value">
          {{ $t('message.map.' + value) }}
        </option>
      </select>
    </div>

    <div class="form-widget">
      <label for="map_scale">
        {{ $t('message.configuration.scale') }}
      </label>
      <input
        type="range"
        id="map_scale"
        v-model="mapScale"
        class="widget-input"
        min="1"
        max="4"
        step="0.1"
        value="1"
        @change="configuration.setMapScale(parseFloat(mapScale))"
      />
      <span class="widget-value">{{ configuration.map.scale }}x</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeadbuttConfiguration } from '@/stores/Configuration'
import Map from '@/globals/map'
import Locale from '@/globals/locale'

const configuration = HeadbuttConfiguration()
const trainerId = configuration.trainerId
const mapName = configuration.map.name
const mapScale = configuration.map.scale
</script>
