<template>
    <div v-if="mapStore.isMapLoaded()">
        <div
            v-for="(encounterGroup, version) in Map.ENCOUNTER_GROUP"
            v-bind:key="version"
            :class="`version version--${version}`"
        >
            <div
                :class="`rate rate--${rate}`"
                v-for="rate in Encounter"
                v-bind:key="`${version}-${rate}`"
            >
                <span class="label">
                    {{ $t(`message.encounter.${rate}`) }}
                </span>
                <div
                    class="pokemon"
                    v-for="pokemonEncounter in getPokemons(encounterGroup, version, rate)"
                    v-bind:key="`${version}-${rate}-${pokemonEncounter.poke}`"
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
import Encounter from '@/globals/encounter'
import Map, { type PokemonEncounter, type PokemonEncounterGroup } from '@/globals/map'
import MapStore from '@/stores/MapStore'

const mapStore = MapStore()

function getPokemons(
    group: Array<PokemonEncounterGroup>,
    version: string,
    rate: string
): Array<PokemonEncounter> {
    return group[Map.MAP[mapStore.getMapName()].encounter[version]][rate]
}
</script>

<style lang="scss" scoped>
.version {
    margin-top: 5px;

    &--gold {
        background-color: #daa520;
    }

    &--silver {
        background-color: #c0c0c0;
    }

    &--crystal {
        background-color: #4fd9ff;
    }
}

.rate {
    padding: 2px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;

    &--normal {
        color: white;
    }

    &--rare {
        color: red;
    }
}

.label {
    margin-bottom: auto;
    margin-top: auto;
    width: 60px;
    font-weight: bold;
}

.pokemon {
    height: 32px;
    display: flex;
    flex-direction: row;
    border-radius: 16px;
    border: 1px solid black;
    padding-right: 8px;
    padding-left: 32px;
    background-position: top -4px left -1px;
    background-repeat: no-repeat;
    background-color: white;
    margin-right: 5px;
}

.pokemon-rate {
    margin-top: auto;
    margin-bottom: auto;
    color: black;
    font-weight: bold;
}
</style>
