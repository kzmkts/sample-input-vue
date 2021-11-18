<script setup lang="ts">
interface Props {
  myTextarea: string
  name: string
  rows?: number
  cols?: number
  label?: string
  placeholder?: string
}
const props = withDefaults(defineProps<Props>(), {
  rows: 10,
  cols: 30,
  label: '',
  placeholder: '',
})

interface Emits {
  (e: 'update:myTextarea', value: string): void
}
const emit = defineEmits<Emits>()
const updateValue = (e: Event) => {
  if (!(e.target instanceof HTMLTextAreaElement)) return
  emit('update:myTextarea', e.target.value)
}
</script>

<template>
  <div>
    <label class="block" :for="label">{{ label }}</label>
    <textarea
      :id="label"
      class="w-full rounded"
      :name="name"
      :value="myTextarea"
      :placeholder="placeholder"
      :rows="rows"
      :cols="cols"
      @input="updateValue"
    ></textarea>
  </div>
</template>
