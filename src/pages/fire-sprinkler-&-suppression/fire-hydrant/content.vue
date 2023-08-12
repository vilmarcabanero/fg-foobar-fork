<template>
  <div>
    <div style="z-index: 999">
      <h3 class="font-bold relative  text-[30px] lg:text-[37px] xl:text-[40px] 2xl:text-[44px] mt-[40px] sm:mt-[30px] md:mt-[40px] lg:mt-[0px] xl:mt-[30px] 2xl:mt-0">
        <span class="relative">
          Overview
          <span
            class="absolute bottom-0 top-[35px] md:top-[45px] lg:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[40px] md:w-12 border-b-4 border-red-500"
          ></span>
        </span>
      </h3>
    </div>

    <div class="pb-[45px] lg:pb-[70px] xl:pb-[100px] grid grid-cols-12 justify-items-center items-center mt-[30px] gap-4 2md:gap-12 lg:gap-20">
    <div class="text-white col-span-12 2md:col-span-6 order-2 2md:order-1">
        <p class="text-gray-700 leading-8 font-semibold  
            xl:text-page-content-xl
            lg:text-page-content-lg 
            md:text-page-content-md 
            text-page-content-sm">
          A fire hydrant is a visible connection point strategically placed in designated
          areas for firefighters to access a water source. Its purpose is to promptly
          provide the necessary water for firefighters to put out fires.
        </p>
      </div>

      <div class="col-span-12 2md:col-span-6 w-full order-1 2md:order-2">
        <img
          class="h-[300px] w-full rounded-lg"
          src="@/assets/fire-sprinkler-&-suppression/fire-hydrant.png"
          alt=""
        />
      </div>

    </div>

    <div class="py-[45px] lg:pb-[70px] grid grid-cols-12 justify-items-center items-center gap-4 2md:gap-12 lg:gap-20">

      <div class="col-span-12 2md:col-span-6 w-full">
        <img
          class="h-[300px] w-full rounded-lg"
          src="@/assets/fire-sprinkler-&-suppression/fire-protection-maintained-4.png"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-2 text-white col-span-12 2md:col-span-6">
        <h2
          class="font-semibold barlow-condensed text-red-color text-page-title-sm xl:text-[35px]">
          Ensure your safety by hiring internationally certified professionals.
        </h2>
        <p class="text-gray-700 leading-8 font-semibold  
          xl:text-page-content-xl
          lg:text-page-content-lg 
          md:text-page-content-md 
          text-page-content-sm">
          With Flameguard, you can trust that your system is being designed and installed
          by professionals with prestigious NFPA certifications. Not only will you save
          time and resources by choosing us, but you'll also be taking a big step toward
          making sure your property is secure.
        </p>
      </div>
    </div>

    <FireProtectionMaintained />
  </div>
</template>

<script setup>
import FireProtectionMaintained from "../../reusable-components/fire-protection-maintained.vue";
</script>
