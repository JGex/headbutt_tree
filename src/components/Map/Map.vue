<template>
    <div class="map-display" v-if="mapStore.isMapLoaded()">
        <img
            v-if="mapImage !== null"
            :src="mapImage.src"
            :alt="mapImage.alt"
            :width="mapImage.width"
            :height="mapImage.height"
        />
        <div v-if="trainerStore.getTrainerId()" class="grid-content">
            <div v-for="(w, i) in mapImage.naturalWidth / 16" v-bind:key="i">
                <div
                    v-for="(h, i) in mapImage.naturalHeight / 16"
                    v-bind:key="i"
                    class="grid-tile"
                    v-bind:style="{
                        width: `${mapStore.getTileSize()}px`,
                        height: `${mapStore.getTileSize()}px`,
                        fontSize: `${mapStore.getTileSize() - 8}px`
                    }"
                >
                    <span
                        :class="getClass(w, h)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MapStore from '@/stores/MapStore'
import TrainerStore from '@/stores/TrainerStore'
import { computed } from 'vue'

const mapStore = MapStore()
const trainerStore = TrainerStore()

const mapImage = computed(() => mapStore.getMapImage())

const getClass = (w: number, h: number): string => {
    if (mapStore.hasStarAtPosition(trainerStore.getTrainerId(), w, h)) {
        return 'fa fa-star high'
    }

    if (mapStore.hasCircleAtPosition(trainerStore.getTrainerId(), w, h)) {
        return 'fa fa-circle moderate'
    }

    return ''
}
</script>

<style lang="scss" scoped>
.map-display {
    border: 2px solid #888888;
    border-radius: 7px;
    overflow: auto;
    width: calc(100vw - 12px);
    height: calc(100vh - 12px);
    display: grid;
    grid-template: 1fr / 1fr;
    place-items: start start;

    & > * {
        grid-column: 1 / 1;
        grid-row: 1 / 1;
    }

    @media (min-width: 1280px) {
        margin-left: 462px;
        width: calc(100vw - 474px);
    }
}

.grid-content {
    display: flex;
    flex-direction: row;
}

.grid-tile {
    border-width: 0 1px 1px 0;
    border-color: #888888;
    border-style: ridge;
    box-sizing: border-box;
    opacity: 0.65;
    display: grid;
    place-items: center center;

    span {
        padding: 0;
        margin: 0;
    }

    .high {
        color: #d50000;
    }

    .moderate {
        color: #07b3ff;
    }
}
</style>
