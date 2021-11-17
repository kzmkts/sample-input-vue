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
  <fieldset>
    <template v-for="(option, index) in options" :key="index">
      <label>
        <input
          type="checkbox"
          :name="name"
          :value="option.value"
          @change="updateValue"
        />{{ option.label }}
      </label>
    </template>
  </fieldset>
</template>
