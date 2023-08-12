<template>
  <div class="flex flex-col gap-2 -mt-3" style="z-index: 999">
    <div>
      <h6 class="text-[32px] font-semibold mb-2 text-red-color barlow-condensed">
        How Can We Assist You?
      </h6>
      <p class="text-[20px] font-semibold text-gray-700">
        Welcome to our Contact Us page! We're here to provide the support and assistance
        you need. Whether you have a question, feedback, or need help with our products or
        services, we've got you covered.
      </p>
    </div>

    <div>
      <h6 class="text-[32px] font-semibold mb-2 text-red-color barlow-condensed">
        You may also contact us via
      </h6>

      <p class="text-[20px] font-semibold text-gray-700">
        <FontAwesomeIcon class="mr-2" :icon="['fas', 'phone']" />
        <span class="font-bold mr-1">Landline:</span>
        <span class="">(02)8708-4008</span>
      </p>

      <p class="text-[20px] font-semibold text-gray-700">
        <FontAwesomeIcon class="mr-2" :icon="['fas', 'envelope']" />
        <span class="font-bold mr-1">Email (Admin):</span>
        admin@flameguardph.com
      </p>
      <p class="text-[20px] font-semibold text-gray-700">
        <FontAwesomeIcon class="mr-2" :icon="['fas', 'envelope']" />
        <span class="font-bold">Email (Sales):</span>
        sales@flameguardph.com
      </p>
    </div>

    <div class="mb-2">
      <h6 class="text-[32px] font-semibold mb-2 text-red-color barlow-condensed">
        Our office is located at
      </h6>
      <p class="text-[20px] font-semibold text-gray-700">
        191 AFP Road, Holy Spirit, Quezon City.
      </p>
    </div>

    <GoogleMap />
  </div>
</template>

<script setup>
import GoogleMap from "./google-map.vue";
</script>
