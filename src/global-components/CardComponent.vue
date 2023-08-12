<template>
  <div class="bg-white  text-black w-full rounded-md">
    <div class="relative overflow-hidden" v-if="src">
      <img class="w-full h-52 border-2 rounded-md  duration-300 hover:scale-110" :src="src" alt="">
    </div>
    <div class="py-6 px-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
  }
})
</script>
