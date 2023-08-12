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
          src="@/assets/fire-sprinkler-&-suppression/man-inspecting-the-fire-alarm.png"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-2 text-white col-span-6">
        <p class="text-[20px] text-gray-700 leading-8 font-semibold">
          Fire alarm preventive maintenance is important to ensure the system functions as
          intended. Murphy’s law states that anything that can go wrong will go wrong. A
          correct fire alarm maintenance program can save money by avoiding costly repairs
          and impairment. However, many facility managers may find the task daunting and
          simply do not have time to engage in it thoroughly because of their busy
          schedules. Let us save you from this trouble so you can perform your job easier.
        </p>
      </div>
    </div>

    <div class="py-[55px] grid grid-cols-12 justify-items-center items-center gap-20">
      <div class="flex flex-col gap-2 col-span-6">
        <h2
          class="text-[32px] font-semibold text-theme-2 barlow-condensed text-red-color"
        >
          Ensure your safety by hiring internationally certified professionals.
        </h2>
        <p class="text-[20px] text-gray-700 leading-8 font-semibold">
          By hiring Flameguard, you are guaranteed that your system will be handled by
          certified professionals recognized internationally – by NFPA. You will save
          valuable time and resources while ensuring your property’s safety. We will also
          teach you how to conduct basic periodic inspections free of charge!
        </p>
      </div>

      <div class="col-span-6 w-[100%]">
        <img
          class="h-[300px] w-full rounded-lg"
          src="../../../assets/fire-sprinkler-&-suppression/fire-protection-maintained-8.png"
          alt=""
        />
      </div>
    </div>

    <BasicPeriodicInspectionsAndPumpTests />
  </div>
</template>

<script setup>
import BasicPeriodicInspectionsAndPumpTests from "../../reusable-components/basic-periodic-inspections-and-pump-tests.vue";
</script>
