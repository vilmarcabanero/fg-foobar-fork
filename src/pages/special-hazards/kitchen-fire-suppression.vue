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
          src="@/assets/fire-sprinkler-&-suppression/kitchen-fire-suppression.png"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-2 col-span-6">
        <h2
          class="text-[32px] font-semibold text-theme-2 barlow-condensed text-red-color"
        >
          Kitchen Fire Suppression
        </h2>

        <p class="text-[20px] text-gray-700 leading-8 font-semibold">
          These systems are equipped with wet chemical extinguishing agents that are
          specifically designed to quickly put out cooking fires and grease fires in
          kitchens.
        </p>
      </div>
    </div>
  </div>
</template>
