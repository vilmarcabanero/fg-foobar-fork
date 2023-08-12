<template>
  <div>
    <Header />
    <div class="w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
      <Content />
    </div>
    <SubNavFooter title="Are you ready to get your building’s fire protection maintained?" />
  </div>
</template>

<script setup>
import Header from "./header.vue";
import Content from "./content.vue";
import SubNavFooter from "../../reusable-components/sub-nav-footer.vue"
</script>
