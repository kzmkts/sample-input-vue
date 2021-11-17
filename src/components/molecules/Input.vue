<script setup lang="ts">
interface Props {
  modelValue: string
  name: string
  type: 'text' | 'password' | 'email' | 'number'
  label?: string
  placeholder?: string
}
withDefaults(defineProps<Props>(), {
  label: '',
  placeholder: '',
})

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
  <label>
    {{ label }}
    <input
      :name="name"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </label>
</template>
