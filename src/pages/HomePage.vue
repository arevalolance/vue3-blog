<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'

function deployAction() {
  window.open(
    'https://vercel.com/new/clone?repository-url=https://github.com/arevalolance/vue3-blog',
    '_blank'
  )
}

function openRepo() {
  window.open('https://github.com/arevalolance', '_blank')
}
</script>

<template>
  <main class="container px-4 mx-auto my-20">
    <div class="flex flex-col gap-y-8">
      <div class="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center w-full gap-8">
        <div class="flex flex-col gap-y-8 items-center text-center lg:text-left lg:items-start">
          <h1 class="text-4xl font-bold">Welcome to Vue</h1>
          <p class="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus justo in leo
            scelerisque, et porta nibh egestas. Donec nec gravida tellus, et imperdiet justo.
            Phasellus sit amet lacus aliquam, posuere dui et, lacinia enim.
          </p>

          <div class="flex flex-row gap-x-4">
            <CustomButton :click="deployAction" variant="primary">Deploy</CustomButton>
            <CustomButton :click="openRepo" variant="secondary">Learn more</CustomButton>
          </div>
        </div>

        <div><img class="rounded-lg border-2 border-gray-200" src="../assets/og.png" /></div>
      </div>

      <div class="flex flex-col gap-4">
        <p class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
          tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
          diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
          orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
        </p>

        <p class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
          tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
          diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
          orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
        </p>
      </div>
    </div>
  </main>
</template>
