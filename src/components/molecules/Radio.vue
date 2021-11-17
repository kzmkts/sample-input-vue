<script setup lang="ts">
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
defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()
const updateValue = (e: Event) => {
  if (!(e.target instanceof HTMLInputElement)) return
  emit('update:modelValue', e.target.value)
}
</script>
<template>
  <fieldset>
    <legend>{{ label }}</legend>
    <template v-for="(option, index) in options" :key="index">
      <label>
        {{ label }}
        <input
          :name="name"
          :value="option.value"
          type="radio"
          :checked="option.value === modelValue"
          @change="updateValue"
        />{{ option.label }}
      </label>
    </template>
  </fieldset>
</template>
