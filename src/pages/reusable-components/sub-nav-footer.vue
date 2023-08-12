<template>
  <div class="bg-img py-16 2md:py-28">
    <div class="text-white font-bold w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto text-center">
      <div class="mb-6 flex flex-col gap-2">
        <h4 class="font-bold text-red-color barlow-condensed text-[32px] sm:text-[35px] md:text-[36px] lg:text-[38px] xl:text-[45px] ">
          {{ title }}
        </h4>
        <p class="font-bold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]">
          Call our NFPA-certified experts at (02)87084008 to get a free quotation.
        </p>
      </div>

      <Button btnWhiteOutlined btnMinWidth="min-w-[150px]">Contact Us Now</Button>
    </div>
  </div>
</template>
  
<script setup>
import Button from "@/global-components/ButtonComponent.vue";
  defineProps({title:""})
</script>
  
<style scoped>
.bg-img {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url("@/assets/contact-us-now-images/contact-us-now-2.png");
  background-size: cover;
  background-position: top;
}
</style>
  