<template>
  <div>
    <Header />
    <div class="px-[10%] 2xl:px-[20%]">
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./header.vue";
import Content from "./content.vue";
import Footer from "./footer.vue";
</script>
