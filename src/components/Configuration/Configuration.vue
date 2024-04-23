<style lang="scss" scoped>
@import './Configuration.scss';
</style>

<template>
  <div>
    <div class="form-widget">
      <label for="locale" class="widget-label">
        {{ $t('message.configuration.language') }}
      </label>
      <select id="locale" class="widget-input" v-model="$i18n.locale">
        <option v-for="locale in Locale" :value="locale">
          {{ $t(`message.locale.${locale}`) }}
        </option>
      </select>
    </div>

    <div class="form-widget">
      <label for="trainer_id" class="widget-label">
        {{ $t('message.configuration.trainer_id') }} <br />
      </label>
      <input
        type="text"
        id="trainer_id"
        class="widget-input"
        v-model="trainerId"
        @keyup="checkTrainerID(trainerId)"
        @change=""
        :placeholder="`${$t('message.configuration.enter_trainer_id')}`"
      />
      <span class="input-error" v-if="trainerIdError">
        {{ $t(`error.configuration.trainer_id.${trainerIdError}`) }}
      </span>
    </div>

    <div class="form-widget">
      <label for="map_src" class="widget-label">
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
      <label for="map_scale" class="widget-label">
        {{ $t('message.configuration.scale') }}
      </label>
      <div class="widget-input--with-value">
        <input
          type="range"
          id="map_scale"
          v-model="mapScale"
          class="widget-input"
          min="1"
          max="4"
          step="0.1"
          value="1"
          @change="configuration.setMapScale(mapScale)"
        />
        <span class="widget-value">{{ configuration.map.scale }}x</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeadbuttConfiguration } from '@/stores/Configuration'
import Map from '@/globals/map'
import Locale from '@/globals/locale'
import { ref } from 'vue'

const configuration = HeadbuttConfiguration()
const trainerId = ref<string>(configuration.trainerId)
const mapName = ref<string>(configuration.map.name)
const mapScale = ref<number>(configuration.map.scale)
const trainerIdError = ref<string>('')

function checkTrainerID(trainerId: string): void {
  const trainerIdRegex = /^\d{5}$/

  if ('' !== trainerId && (!trainerIdRegex.test(trainerId) || 65535 <= parseInt(trainerId))) {
    trainerIdError.value = 'malformed'

    return
  }

  trainerIdError.value = ''
  configuration.setTrainerId(trainerId)
}
</script>
