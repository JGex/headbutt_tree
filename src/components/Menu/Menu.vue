<template>
    <div class="content">
        <div class="burger">
            <img src="/icon/hamburger.svg" alt="Menu" @click="toggleMenu" />
        </div>
        <transition>
            <div class="menu-content" v-show="menuDisplayed">
                <div class="element">
                    <Configuration />
                </div>
                <div class="element">
                    <Encounter />
                </div>
                <div class="element">
                    <Usage />
                </div>
                <div v-if="hasDebug" class="element">
                    <Debug />
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'

import Usage from '@/components/Menu/Usage.vue'
import Configuration from '@/components/Menu/Configuration.vue'
import Encounter from '@/components/Menu/Encounter.vue'
import Debug from '@/components/Debug/Debug.vue'

const urlParams: URLSearchParams = new URLSearchParams(window.location.search)
const hasDebug: boolean = urlParams.has('debug')
const menuDisplayed: Ref<boolean> = ref(false)

function toggleMenu(): void {
    menuDisplayed.value = !menuDisplayed.value
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: row;
    border: 2px solid #888888;
    border-radius: 7px;
    min-height: 35px;
    max-height: calc(100vh - 8px);
    min-width: 35px;
    max-width: 530px;
    float: left;
    background-color: white;
    overflow: auto;
}

.menu-content {
    overflow: auto;
    height: calc(100vh - 12px);
    max-width: 495px;

    @media (min-width: 1280px) {
        display: block !important;
        width: 460px;
    }

    &.v-enter-active,
    &.v-leave-active {
        transition: all 0.5s ease;
        overflow: hidden;
        max-width: 495px;
        height: calc(100vh - 12px);
        opacity: 1;
    }

    &.v-enter-from,
    &.v-leave-to {
        overflow: hidden;
        max-width: 0;
        height: 35px;
        opacity: 0;
    }
}

.element {
    padding: 6px;
}

.burger {
    width: 35px;
    min-height: 25px;
    background-color: #dddddd;

    @media (min-width: 1280px) {
        display: none !important;
    }

    img {
        width: 25px;
        margin-top: 5px;
        margin-left: 5px;
    }
}
</style>
