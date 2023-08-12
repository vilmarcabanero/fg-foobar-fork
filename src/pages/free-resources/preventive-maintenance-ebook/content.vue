<template>
  <div style="z-index: 999"
    class="grid grid-cols-12 justify-items-center items-center gap-4 sm:gap-8 lg:gap-12">
    <div style="z-index: 999" class="flex flex-col col-span-12 lg:col-span-7 mb-10">
      <h2 class="text-page-title-sm xl:text-[35px] mb-4 font-semibold barlow-condensed">
        Simplified Guide to Fire Protection Maintenance for Property Managers
      </h2>

      <div class="grid grid-cols-3 gap-5">
        <div class="col-span-3 lg:col-span-2">
          <p class="text-[20px] text-gray-700 font-semibold leading-8 mb-4">
            Fire protection maintenance is crucial to ensure the safety of the people and
            assets within your building. The extensive NFPA 25 maintenance handbook and
            related documents can be overhwhelming, with over 1,000 pages to read, and can
            cost a fortune.
          </p>

          <p class="text-[20px] text-gray-700 font-semibold leading-8">
            But don't worry because we have summarized them into a simplified eBook that
            you can download for free to make your job easier.
          </p>
          <br />
        </div>

        <div class="col-span-3 lg:col-span-1 flex justify-center mb-10 lg:mb-0">
          <img class="h-[200px] sm:w-[200px]" src="@/assets\free-resources\e-book.jpg" alt="" />
        </div>

        <div class="col-span-3">
          <DetailsSection />
        </div>
      </div>
    </div>

    <div style="z-index: 999" class="col-span-12 lg:col-span-5 w-[100%] text-[20px]">
      <h1 class="text-[22px] font-bold px-2">
        Download the free
        <span class="text-red-color font-bold italic">Simplified Guide to Fire Protection Maintenance for Property
          Managers</span>
        right now for an easier and safer way to secure your property from fire.
      </h1>
      <Form />
    </div>
  </div>
</template>

<script setup>
import DetailsSection from "./details.vue";
import Form from "./form.vue";
</script>
