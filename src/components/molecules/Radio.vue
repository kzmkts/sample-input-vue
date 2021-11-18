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
  <div>
    <fieldset>
      <legend>{{ label }}</legend>
      <div class="flex-centered space-x-6">
        <template v-for="(option, index) in options" :key="index">
          <div class="space-x-2">
            <input
              :id="option.label"
              :name="name"
              :value="option.value"
              type="radio"
              :checked="option.value === modelValue"
              @change="updateValue"
            />
            <label :for="option.label">
              {{ option.label }}
            </label>
          </div>
        </template>
      </div>
    </fieldset>
  </div>
</template>
