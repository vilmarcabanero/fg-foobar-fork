<template>
  <div>
    <div style="z-index: 999">
      <h3
        class="font-bold relative text-[30px] lg:text-[37px] xl:text-[40px] 2xl:text-[44px] mt-[40px] sm:mt-[30px] md:mt-[40px] lg:mt-[0px] xl:mt-[30px] 2xl:mt-0">

        <span class="relative">
          Overview
          <span
            class="absolute bottom-0 top-[35px] md:top-[45px] lg:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[40px] md:w-12 border-b-4 border-red-500"></span>
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

          According to Murphy’s Law: anything that can go wrong will go wrong. Conducting periodic preventive maintenance
          is crucial because the lack of it can result in costly repairs and system impairment. However, many facility
          managers may find the task daunting and simply do not have time to engage in it thoroughly because of their busy
          schedules. Let us save you from this trouble so you can perform your job easier.
        </p>
      </div>

      <div class="col-span-12 2md:col-span-6 w-full order-1 2md:order-2">
        <img
        class="xl:h-[300px] w-full rounded-lg"
          src="@/assets/fire-sprinkler-&-suppression/adjusting-fire-pump.png"
          alt=""
        />
      </div>
    </div>

    <div class="py-[45px] lg:pb-[70px] grid grid-cols-12 justify-items-center items-center gap-4 2md:gap-12 lg:gap-20">
      <div class="col-span-12 2md:col-span-6 w-full">
        <img class="xl:h-[300px] w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCwYPqdeCmX0cYbIq15pTg-5fTXjJPYG1Sg&usqp=CAU"
            alt=""
          />
      </div>

      <div class="flex flex-col gap-2 text-white col-span-12 2md:col-span-6">
        <h2 class="font-semibold barlow-condensed text-red-color text-page-title-sm xl:text-[35px]">
          We also offer preventive maintenance for the following systems:
        </h2>

        <div class="flex flex-col gap-2 leading-8 font-semibold
          xl:text-page-content-xl
          lg:text-page-content-lg 
          md:text-page-content-md 
          text-page-content-sm">
          <p class="xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color" :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Fire Sprinkler
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color" :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Fire Alarm
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color" :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Standpipe
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color" :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Fire Pump
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color " :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Deluge & Preaction
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color " :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Foam Fire Suppression
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color " :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Kitchen Fire Suppression
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color " :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Aerosol Fire Suppression
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color " :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Water-mist Fire Suppression
          </div>
          </p>

          <p class=" xl:text-[20px] text-gray-600 flex gap-2 ml-4">
          <div class="relative bottom-[2px]">
            <FontAwesomeIcon class="text-xs text-red-color relative left-[2px]" :icon="['fas', 'chevron-right']" />
            <FontAwesomeIcon class="text-xs text-red-color " :icon="['fas', 'chevron-right']" />
          </div>

          <div class="text-gray-700">
            Fire Extinguishers
          </div>
          </p>
        </div>
      </div>


    </div>

    <div class="pb-[45px] xl:pb-[55px] grid grid-cols-12 justify-items-center items-center mt-[30px] gap-4 2md:gap-12 lg:gap-20">
      <div class="flex flex-col gap-2 col-span-12 2md:col-span-6 order-2 2md:order-1">
        <h2 class="font-semibold text-theme-2 barlow-condensed text-red-color text-page-title-sm xl:text-[35px]">
          Ensure your safety by hiring internationally certified professionals.
        </h2>

        <p class="text-gray-700 leading-8 font-semibold
          xl:text-page-content-xl
          lg:text-page-content-lg 
          md:text-page-content-md
          text-page-content-sm">
          Flameguard Offers peace of mind and reduced administration costs. You are
          guaranteed that your system will be handled by certified professionals
          recognized internationally - by NFPA. Not only will you save time and resources by choosing us, but you'll also
          be taking a big step toward making sure your property is secure.
        </p>
      </div>

      <div class="col-span-12 2md:col-span-6 w-full order-1 2md:order-2">
        <img class="xl:h-[300px] w-full rounded-lg"
          src="@/assets/fire-sprinkler-&-suppression/fire-protection-maintained-1.png" alt="" />
      </div>

    </div>

    <BasicPeriodicInspectionsAndPumpTests />
  </div>
</template>

<script setup>
import BasicPeriodicInspectionsAndPumpTests from "../../reusable-components/basic-periodic-inspections-and-pump-tests.vue";
</script>
