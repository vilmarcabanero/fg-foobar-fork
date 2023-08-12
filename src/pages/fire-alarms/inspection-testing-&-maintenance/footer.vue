<template>
  <div class="bg-img py-28 px-[400px]">
    <div class="text-white font-bold text-center">
      <div class="mb-6 flex flex-col gap-2">
        <h4 class="text-[50px] font-bold text-red-color barlow-condensed">
          Are you ready to get your building’s fire alarm maintained?
        </h4>
        <p class="text-[26px] font-bold">
          Call our NFPA-certified experts at (02)87084008 to get a free quotation.
        </p>
      </div>

      <Button btnWhiteOutlined btnMinWidth="min-w-[150px]">Contact Us Now</Button>
    </div>
  </div>
</template>

<script setup>
import Button from "@/global-components/ButtonComponent.vue";
</script>

<style scoped>
.bg-img {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url("@/assets/contact-us-now-images/contact-us-now-2.png");
  background-size: cover;
  background-position: top;
}
</style>
