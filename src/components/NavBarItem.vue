<script setup lang="ts">
defineProps({
  href: String
})
</script>

<template>
  <li>
    <router-link :to="href!" class="p-3 text-md font-semibold rounded-md hover:bg-gray-100">
      <slot></slot>
    </router-link>
  </li>
</template>
