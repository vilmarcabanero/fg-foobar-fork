<template>
  <div>
    <div
      class="pb-[55px] grid grid-cols-12 justify-items-center items-center gap-20 mt-[50px]"
    >
      <div class="flex flex-col gap-2 col-span-6">
        <h2
          class="text-[32px] font-semibold text-theme-2 barlow-condensed text-red-color"
        >
          Fire Extinguishers
        </h2>

        <p class="text-[20px] text-gray-700 leading-8 font-semibold">
          Flameguard supply fire extinguishers in bulk order. Extinguishers are available
          in several different forms and use a variety of extinguishing agents, including
          water, carbon dioxide, halogenated agents, dry chemicals, dry powders, and foam.
          Extinguishers are classified for use on one or more types of fire, known as
          Class A, Class B, Class C, Class D, and Class K fires.
        </p>
      </div>

      <div class="col-span-6 w-[100%]">
        <img
          class="h-[300px] w-full rounded-lg"
          src="@/assets/fire-sprinkler-&-suppression/fire-extinguishers.png"
          alt=""
        />
      </div>
    </div>

    <div class="pt-[55px] grid grid-cols-12 justify-items-center items-center gap-20">
      <div class="col-span-6 w-[100%]">
        <img
          class="h-[300px] w-full rounded-lg"
          src="../../../src//assets//fire-sprinkler-&-suppression/fire-protection-maintained-11.png"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-2 col-span-6">
        <h2
          class="text-[32px] font-semibold text-theme-2 barlow-condensed text-red-color"
        >
          Ensure your safety by hiring internationally certified professionals.
        </h2>

        <p class="text-[20px] text-gray-700 leading-8 font-semibold">
          By hiring Flameguard, you are guaranteed that your system will be handled by
          certified professionals recognized internationally – by NFPA. You will save
          valuable time and resources while ensuring your property’s safety.
        </p>
      </div>
    </div>

    <FireProtectionMaintained />
  </div>
</template>

<script setup>
import FireProtectionMaintained from "../reusable-components/fire-protection-maintained.vue";
</script>
