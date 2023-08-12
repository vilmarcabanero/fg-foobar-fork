<template>
    <div>
      <HeaderTitle />
      <div class="py-12 lg:py-15 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
        <Content />
      </div>
    </div>
  </template>
  
  <script setup>
  import HeaderTitle from "./header.vue";
  import Content from "./content.vue";
  </script>
  