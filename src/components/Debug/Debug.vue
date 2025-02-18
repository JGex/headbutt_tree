<template>
    <div>
        <debug-element
            title="Trainer Store"
            :debug-data="[
                { name: 'getTrainerId', value: trainerStore.getTrainerId() },
                { name: 'getTrainerIdError', value: trainerStore.getTrainerIdError() }
            ]"
        />
        <debug-element
            title="Map Store"
            :debug-data="[
                { name: 'getMapScale', value: mapStore.getMapScale() },
                { name: 'isMapLoaded', value: mapStore.isMapLoaded() },
                { name: 'getTileSize', value: mapStore.getTileSize() }
            ]"
        />
    </div>
</template>

<script setup lang="ts">
import TrainerStore from '@/stores/TrainerStore'
import MapStore from '@/stores/MapStore'
import DebugElement from '@/components/Debug/DebugElement.vue'

const trainerStore = TrainerStore()
const mapStore = MapStore()
</script>

<style lang="scss" scoped>
.element {
    padding-top: 10px;
}

.inner {
    padding-left: 10px;
}
</style>
