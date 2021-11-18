<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  options: Array<Option>
  modelValue: Array<string>
  name: string
  label?: string
}
interface Option {
  label: string
  value: string
}
defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', value: string[]): void
}
const checkedList = ref<string[]>([])
const emit = defineEmits<Emits>()
const updateValue = (e: Event) => {
  const target = e.target
  if (!(target instanceof HTMLInputElement)) return
  if (target.checked) {
    checkedList.value.push(target.value)
  } else {
    checkedList.value = checkedList.value.filter((v) => v !== target.value)
  }
  emit('update:modelValue', checkedList.value)
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
              type="checkbox"
              :name="name"
              :value="option.value"
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
