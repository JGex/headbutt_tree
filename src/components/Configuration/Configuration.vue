<style lang="scss">
@import './Configuration.scss';
</style>

<template>
  <div class="c__form">
    <div class="c__form__widget">
      <label class="c__form__widget__label" for="locale">
        {{ $t('message.configuration.language') }}
      </label>
      <select id="locale" class="c__form__widget__input" v-model="$i18n.locale">
        <option v-for="locale in Locale" :value="locale">
          {{ $t('message.locale.' + locale) }}
        </option>
      </select>
    </div>

    <div class="c__form__widget">
      <label class="c__form__widget__label" for="trainer_id">
        {{ $t('message.configuration.trainer_id') }}
      </label>
      <input
        type="text"
        id="trainer_id"
        class="c__form__widget__input"
        v-model="trainerId"
        @keyup="configuration.setTrainerId(trainerId)"
        :placeholder="`${$t('message.configuration.enter_trainer_id')}`"
      />
    </div>

    <div class="c__form__widget">
      <label class="c__form__widget__label" for="map_src">
        {{ $t('message.configuration.map') }}
      </label>
      <select
        id="map_src"
        class="c__form__widget__input"
        v-model="mapName"
        @change="configuration.setMapName(mapName)"
      >
        <option value="" disabled>{{ $t('message.configuration.select_map') }}</option>
        <option v-for="(mapOption, value) in Map.MAP" :value="value">
          {{ $t('message.map.' + value) }}
        </option>
      </select>
    </div>

    <div class="c__form__widget">
      <label class="c__form__widget__label" for="map_scale">
        {{ $t('message.configuration.scale') }}
      </label>
      <input
        type="range"
        id="map_scale"
        v-model="mapScale"
        class="c__form__widget__input"
        min="1"
        max="4"
        step="0.1"
        value="1"
        @change="configuration.setMapScale(parseFloat(mapScale))"
      />
      <span class="c__form__widget__value">{{ configuration.map.scale }}x</span>
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
