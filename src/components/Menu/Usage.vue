<template>
    <div>
        <span class="label">{{ $t('message.usage.usage') }}</span>
        <ul class="action-list">
            <li class="list-element">{{ $t('message.usage.enter_your_trainer_id') }}</li>
            <li class="list-element">{{ $t('message.usage.select_a_map') }}</li>
            <li class="list-element">
                {{ $t('message.usage.look_for_the_marked_headbutt_trees_on_the_map') }}
            </li>
        </ul>
        <span class="label">{{ $t('message.usage.search_for_headbutt_tree') }}</span>
        <ul class="action-list">
            <li
                class="list-element"
                v-html="
                    $t('message.usage.star_will_give_encounter_at_encounter_rate', {
                        percent: '80'
                    })
                "
            ></li>
            <li
                class="list-element"
                v-html="
                    $t('message.usage.circle_will_give_encounter_at_encounter_rate', {
                        percent: '50'
                    })
                "
            ></li>
            <li
                class="list-element"
                v-html="
                    $t('message.usage.unmarked_will_give_encounter_at_encounter_rate', {
                        percent: '10'
                    })
                "
            ></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.label {
    font-weight: bold;
}

.action-list {
    list-style: '*';
    padding-left: 20px;
}

.list-element {
    padding-left: 5px;
}
</style>
