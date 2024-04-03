<style lang="scss" scoped>
@import './Menu.scss';
</style>

<template>
  <div class="content">
    <div class="burger">
      <img src="/public/icon/hamburger.svg" alt="Menu" @click="toggleMenu" />
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
        <div v-if="debug" class="element">
          <Pivot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Usage from '@/components/Usage/Usage.vue'
import Configuration from '@/components/Configuration/Configuration.vue'
import Pivot from '@/components/Pivot/Pivot.vue'
import Encounter from '@/components/Encounter/Encounter.vue'
import { ref } from 'vue'

const urlParams = new URLSearchParams(window.location.search)
const debug = urlParams.has('debug')
const menuDisplayed = ref<boolean>(false)

function toggleMenu(): void {
  menuDisplayed.value = !menuDisplayed.value
}
</script>
