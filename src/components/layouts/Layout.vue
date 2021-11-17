<script setup lang="ts">
import NavBar from '@/components/organisms/NavBar.vue'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const { currentRoute } = useRouter()
const emptyLayout = computed(() => currentRoute.value.meta.layout === 'empty')
</script>

<template>
  <NavBar v-if="!emptyLayout" />
  <main class="container flex-centered flex-col">
    <slot />
  </main>
</template>
