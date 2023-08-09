<script setup lang="ts">
import BlogCard from '@/components/BlogCard.vue'
import { reactive, ref, computed } from 'vue'

const searchInput = ref('')

let posts = reactive([
  {
    title: 'Hello, world!',
    description:
      'Ut tempus urna sit amet fermentum iaculis. Quisque eu consectetur ex. Aliquam nec condimentum nisl.',
    date_published: new Date(),
    image: 'src/assets/og.png'
  },
  {
    title: 'World, hello!',
    description:
      'Nulla odio justo, porttitor ut porta non, auctor et sem. Vestibulum vel vehicula felis, non laoreet turpis. Nullam iaculis dui eu ante ullamcorper aliquam.',
    date_published: new Date(),
    image: 'src/assets/og.png'
  },
  {
    title: 'Not a blog post!',
    description:
      'Etiam mattis, lectus ac semper molestie, lorem risus dictum neque, at vehicula ex est sit amet ligula. Nunc nec lacus eget ligula eleifend viverra',
    date_published: new Date(),
    image: 'src/assets/og.png'
  }
])

const filteredPosts = computed(() => {
  if (!searchInput.value) {
    return posts
  }
  const query = searchInput.value.toLowerCase()
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query)
  )
})
</script>

<template>
  <main class="container px-4 mx-auto my-20">
    <div class="flex flex-col gap-10">
      <input
        v-model="searchInput"
        class="px-4 py-2 outline outline-1 outline-gray-200 focus:outline-2 focus:outline-gray-500 rounded-md w-full border-2 border-gray-200"
        type="search"
        placeholder="Search for specific posts"
      />

      <div class="grid grid-cols-3 gap-4">
        <BlogCard
          v-for="post in filteredPosts"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date_published="post.date_published"
        />
      </div>
    </div>
  </main>
</template>
