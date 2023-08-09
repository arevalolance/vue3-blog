<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  date_published: Date
  image: string
}>()

const formattedDate = props.date_published.getFullYear()
</script>

<template>
  <div
    class="group flex flex-col gap-4 py-2 px-4 rounded-md border-2 border-gray-100 ease-in duration-150 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-2"
  >
    <div>
      <img class="rounded-sm group-hover:drop-shadow-sm" :src="image" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="inline-flex gap-2">
        <h1 class="font-bold text-lg">{{ title }}</h1>
      </span>
      <p class="text-gray-400 line-clamp-3">{{ description }}</p>

      <span class="text-sm font-semibold">{{ formattedDate }}</span>
    </div>
  </div>
</template>
