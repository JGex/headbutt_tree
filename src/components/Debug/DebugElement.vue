<template>
    <div class="element">
        <span>{{ props.title }}:</span>
        <div class="inner" v-for="(data, i) in props.debugData" v-bind:key="i">
            <span class="element-name"> {{ data.name }} => </span>
            <span
                :class="{
                    'element-value': true,
                    'value-object': typeof data.value === 'object',
                    'value-string': typeof data.value === 'string',
                    'value-number': typeof data.value === 'number',
                    'value-boolean': typeof data.value === 'boolean',
                    'value-null': data.value === null
                }"
            >
                {{ needQuote(data.value) ? '"' : '' }}{{ data.value
                }}{{ needQuote(data.value) ? '"' : '' }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
type DebugData = {
    name: string
    value: string | number | boolean | object | null
}

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    debugData: {
        type: Array<DebugData>,
        required: true
    }
})

const needQuote = (value: string | number | boolean | object | null): boolean => {
    return typeof value === 'string'
}
</script>

<style lang="scss" scoped>
.element {
    padding-top: 10px;
    font-family: monospace;
}

.inner {
    padding-left: 10px;
}

.element-name {
    color: rgba(10, 51, 154, 0.56);
    font-weight: bold;
}

.value-string {
    color: rgba(28, 104, 12, 0.56);
}

.value-number {
    color: rgba(5, 184, 153, 0.82);
}

.value-boolean {
    color: #9f4c04;
}

.value-null {
    color: #9f4c04;
}
</style>
