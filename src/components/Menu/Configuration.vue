<template>
    <div>
        <div class="form-widget">
            <label for="locale" class="widget-label">
                {{ $t('message.configuration.language') }}
            </label>
            <select id="locale" class="widget-input" v-model="$i18n.locale">
                <option v-for="locale in Locale" :key="locale" :value="locale">
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
                @keyup="trainerIdChanged"
                :placeholder="`${$t('message.configuration.enter_trainer_id')}`"
            />
            <span class="input-error" v-if="trainerStore.hasTrainerIdError()">
                {{ $t(`error.configuration.trainer_id.${trainerStore.getTrainerIdError()}`) }}
            </span>
        </div>

        <div class="form-widget">
            <label for="map_src" class="widget-label">
                {{ $t('message.configuration.map') }}
            </label>
            <select id="map_src" class="widget-input" @change="mapChanged">
                <option value="" disabled selected>
                    {{ $t('message.configuration.select_map') }}
                </option>
                <option v-for="(mapOption, value) in Map.MAP" :key="value" :value="value">
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
                    @change="scaleChanged"
                    class="widget-input"
                    :min="2"
                    :max="5"
                    :step="0.1"
                    :value="1"
                />
                <span class="widget-value">{{ mapStore.getMapScale() }}x</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Map from '@/globals/map'
import Locale from '@/globals/locale'
import TrainerStore from '@/stores/TrainerStore'
import MapStore from '@/stores/MapStore'

const trainerStore = TrainerStore()
const mapStore = MapStore()

const trainerIdChanged = (event: Event): void => {
    trainerStore.setTrainerId(event.target?.value)
}

const mapChanged = (event: Event): void => {
    mapStore.changeMapName(event.target?.value)
}

const scaleChanged = (event: Event): void => {
    mapStore.changeMapScale(+event.target?.value)
}
</script>

<style lang="scss" scoped>
.form-widget {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
}

.widget-label {
    margin: 5px auto;
}

.widget-input {
    &--with-value {
        display: flex;
        flex-direction: row;
    }

    flex: 9 1 auto;
}

.widget-value {
    flex: 1 1 auto;
    text-align: right;
    width: 30px;
}

.input-error {
    color: red;
}
</style>
