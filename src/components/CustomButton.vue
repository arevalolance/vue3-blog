<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  click: Function
  variant: 'primary' | 'secondary'
}>()

const computedClasses = computed(() => [
  'py-2 px-4 rounded-md border-2',
  props.variant === 'primary' ? 'bg-black text-white border-none' : '',
  props.variant === 'secondary' ? 'bg-white border-black text-black' : ''
])
</script>

<template>
  <button @:click="click" :class="computedClasses">
    <slot></slot>
  </button>
</template>
