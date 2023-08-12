<template>
  <div>
    <Header />
    <div class="px-[10%] 2xl:px-[20%]">
      <KitchenFireSuppression />
      <AerosolFireSuppression />
      <WaterMistFireSuppressionSystem />
      <FireExtinguishers />
    </div>
    <SubNavFooter title="Are you ready to get your building’s fire protection maintained?"/>
  </div>
</template>

<script setup>
import Header from "./header.vue";
import KitchenFireSuppression from "./kitchen-fire-suppression.vue";
import AerosolFireSuppression from "./aerosol-fire-suppression.vue";
import WaterMistFireSuppressionSystem from "./water-mist-fire-suppression-system.vue";
import FireExtinguishers from "./fire-extinguishers.vue";
import SubNavFooter from "../reusable-components/sub-nav-footer.vue"

</script>

