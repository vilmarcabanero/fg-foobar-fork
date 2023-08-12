<template>
  <div class="mt-8 p-6 box-shadow">
    <h2 class="font-bold pb-5">Fill out the form below to download the eBook.</h2>

    <div class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <label for="" class="text-gray-600 font-semibold text-base">First Name </label>
        <span class="text-sm text-red-600">*</span>
        <input
          id="first-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="First Name"
        />
      </div>

      <div class="col-span-2">
        <label for="" class="text-gray-600 font-semibold text-base">Last Name </label>
        <span class="text-sm text-red-600">*</span>
        <input
          id="last-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Last Name"
        />
      </div>

      <div class="col-span-2">
        <label for="" class="text-gray-600 font-semibold text-base">Company Name </label>
        <input
          id="company-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Company Name"
        />
      </div>

      <div class="col-span-2">
        <label for="" class="text-gray-600 font-semibold text-base">Email </label>
        <span class="text-sm text-red-600">*</span>
        <input
          id="first-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Email"
        />
      </div>

      <div class="col-span-2">
        <label for="" class="text-gray-600 font-semibold text-base">Contact No</label>
        <input
          id="last-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Contact No"
        />
      </div>

      <div class="col-span-2 mt-4">
        <Button btnRed btnMinWidth="min-w-[100%] ">Submit</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../../../global-components/ButtonComponent.vue";
</script>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
