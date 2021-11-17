<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'

interface Props {
  options: Array<Option>
  modelValue: string
  name: string
  label?: string
}
interface Option {
  label: string
  value: string
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()
const updateValue = (e: Event) => {
  if (!(e.target instanceof HTMLSelectElement)) return
  emit('update:modelValue', e.target.value)
}
onMounted(() => {
  emit('update:modelValue', props.options[0].value)
})
</script>
<template>
  <fieldset>
    <select :name="name" @change="updateValue">
      <template v-for="(option, index) in options" :key="index">
        <option :value="option.value">
          {{ option.label }}
        </option>
      </template>
    </select>
  </fieldset>
</template>
