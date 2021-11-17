<script setup lang="ts">
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter()

interface Link {
  to: string
  label: string
}
const links: Link[] = [
  {
    to: '/',
    label: 'home',
  },
  {
    to: '/form',
    label: 'form',
  },
]
</script>

<template>
  <nav class="bg-white/60 h-13">
    <div class="container divide-x-2 flex-centered p-5">
      <template v-for="(link, index) in links" :key="index">
        <router-link
          :to="link.to"
          class="p-5 uppercase"
          :class="
            currentRoute.name == link.label ? ' text-red-400' : '  text-current'
          "
          >{{ link.label }}
        </router-link>
      </template>
      <p></p>
    </div>
  </nav>
</template>
