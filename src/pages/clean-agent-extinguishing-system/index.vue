<template>
  <div>
    <Header />
    <div class="px-[10%] 2xl:px-[20%]">
      <Content />
    </div>
    <SubNavFooter title="Are you ready to get your fire protection system designed and installed?"/>
  </div>
</template>

<script setup>
import Header from "./header.vue";
import Content from "./content.vue";
import SubNavFooter from "../reusable-components/sub-nav-footer.vue"
</script>
