<template>
  <div>
    <Header />
    <div class="px-[10%] 2xl:px-[20%]">
      <Content />
    </div>
    <SubNavFooter title="Are you ready to get your building’s fire protection maintained?"/>
  </div>
</template>

<script setup>
import Header from "./header.vue";
import Content from "./content.vue";
import SubNavFooter from "../../reusable-components/sub-nav-footer.vue"
</script>