<template>
  <div>
    <div style="z-index: 999">
      <h3 class="text-[44px] font-bold relative">
        <span class="relative">
          Overview
          <span
            class="absolute bottom-0 top-[60px] left-1/2 transform -translate-x-1/2 w-12 border-b-4 border-red-500"
          ></span>
        </span>
      </h3>
    </div>

    <div
      class="pb-[55px] grid grid-cols-12 justify-items-center items-center gap-20 mt-[50px]"
    >
      <div class="col-span-6 w-[100%]">
        <img
          class="h-[300px] w-full rounded-lg"
          src="@/assets/fire-sprinkler-&-suppression/fire-pumps.png"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-2 text-white col-span-6">
        <p class="text-[20px] text-gray-700 leading-8 font-semibold">
          Fire pumps increase the water supply pressure available from tanks or other
          sources. Dedicated fire pumps for fire protection use are more compact, more
          reliable, and easier to maintain.
        </p>
      </div>
    </div>

    <div class="pt-[55px] grid grid-cols-12 justify-items-center items-center gap-20">
      <div class="flex flex-col gap-2 col-span-6">
        <h2
          class="text-[32px] font-semibold text-theme-2 barlow-condensed text-red-color"
        >
          Ensure your safety by hiring internationally certified professionals.
        </h2>

        <p class="text-[20px] text-gray-700 leading-8 font-semibold">
          With Flameguard, you can trust that your system is being designed and installed
          by professionals with prestigious NFPA certifications. Not only will you save
          time and resources by choosing us, but you'll also be taking a big step toward
          making sure your property is secure.
        </p>
      </div>

      <div class="col-span-6 w-[100%]">
        <img
          class="h-[300px] w-full rounded-lg"
          src="../../../assets/fire-sprinkler-&-suppression/fire-protection-maintained-5.png"
          alt=""
        />
      </div>
    </div>

    <FireProtectionMaintained />
  </div>
</template>

<script setup>
import FireProtectionMaintained from "../../reusable-components/fire-protection-maintained.vue";
</script>
