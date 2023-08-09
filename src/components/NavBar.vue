<script setup lang="ts">
import NavBarItem from './NavBarItem.vue'
import { routes } from '@/lib/router'
</script>

<template>
  <nav class="container mx-auto py-4">
    <ul class="w-fit mx-auto flex flex-1 list-none space-x-1">
      <NavBarItem v-for="route in routes" :href="route.path">{{ route.name }}</NavBarItem>
    </ul>
  </nav>
</template>
