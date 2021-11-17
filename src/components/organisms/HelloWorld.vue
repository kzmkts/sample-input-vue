<script setup lang="ts">
interface Props {
  msg: string
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'Default Message',
})
</script>

<template>
  <h1 class="text-5xl font-bold">{{ props.msg }}</h1>
</template>
