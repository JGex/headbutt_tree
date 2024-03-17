<style lang="scss">
@import './Usage.scss';
</style>

<template>
  <div class="u__content">
    <span class="u__content__label">{{ $t('message.usage.usage') }}</span>
    <ul class="u__content__list">
      <li class="u__content__list__element">{{ $t('message.usage.enter_your_trainer_id') }}</li>
      <li class="u__content__list__element">{{ $t('message.usage.select_a_map') }}</li>
      <li class="u__content__list__element">
        {{ $t('message.usage.look_for_the_marked_headbutt_trees_on_the_map') }}
      </li>
    </ul>
    <ul class="u__content__list u__content__list--no-style">
      <li
        class="u__content__list__element"
        v-html="$t('message.usage.star_will_give_encounter_at_encounter_rate', { percent: '80' })"
      ></li>
      <li
        class="u__content__list__element"
        v-html="$t('message.usage.circle_will_give_encounter_at_encounter_rate', { percent: '50' })"
      ></li>
      <li
        class="u__content__list__element"
        v-html="
          $t('message.usage.unmarked_will_give_encounter_at_encounter_rate', { percent: '10' })
        "
      ></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
