<template>
  <div class=" bg-black text-white ">
    <div class="px-4 xl:px-0 lg:w-[100%] xl:w-[1100px] 2xl:w-[1200px] mx-auto grid grid-cols-12 py-10">
      <div class="col-span-12 md:col-span-6 flex flex-col items-center justify-center gap-4 md:mr-8 lg:mr-12 mb-10 md:mb-0">
        <div class="mb-2 text-center">
          <h1 class="text-2xl xl:text-3xl 2xl:text-4xl font-semibold relative">
            <span class="relative tracking-wide barlow-condensed pb-2 block">
              ATTENTION PROPERTY MANAGERS!
              <span
                class="absolute bottom-0 top-[36px] lg:top-[40px] xl:top-[46px] left-1/2 transform -translate-x-1/2 w-12 lg:w-16 border-b-4 border-red-500"
              ></span>
            </span>
          </h1>
        </div>

        <div class="text-sm leading-4 text-center gap-4">
          <div class="w-full">
            <div class="text-base md:text-lg">
              Wanna know how to maintain your fire protection system? Download our
              Simplified Guide to Fire Protection Maintenance for Property Managers.
            </div>
          </div>
        </div>
      </div>  

      <div class="col-span-12 md:col-span-6 flex flex-col lg:flex-row items-center gap-6 xl:gap-16">
        <img class="h-[110px] lg:h-[120px] xl:h-[150px] lg:w-[170px] xl:w-[200px]" src="@/assets\free-resources\e-book.jpg" alt="" />

        <div class="flex flex-col gap-2">
          <p class="uppercase font-bold text-base xl:text-lg text-center">
            Get free learning materials - ebooks, checklists, and more.
          </p>
          <div class="md:w-[70%] lg:w-[90%] mx-auto">
            <div class="flex justify-center w-full mb-1">
              <input
                v-model="email"
                type="text"
                class="border text-black w-full border-gray-300 px-3 xl:px-4 py-[2px] lg:py-[4px] xl:py-[6px] rounded-tl-lg rounded-bl-lg focus:outline-none text-[15px] xl:text-base"
                placeholder="Email Address"
              />
              
              <Button class="text-[15px] xl:text-base" isRoundedRight btnRed @click="handleSubmit">Subscribe</Button>
            </div>
            <span class="text-red-color">{{ emailValidation }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-black text-white text-center ">
      <div class="border-t  border-gray-600 py-4 text-base">
        <div class="w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
         Copyright &copy; 2023 Flameguard Fire Protection Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/global-components/ButtonComponent.vue";
import Swal from "sweetalert2";

const email = ref("");
const emailValidation = ref("");

const handleSubmit = () => {
  if (!email.value) {
    Swal.fire({
      icon: 'error',
      title: 'Email address field is required!',
      text: 'Please make sure to fill up the email address field.',
      confirmButtonColor: '#DD2427',
    })

    emailValidation.value = "Email address field is required";

    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Your email address submitted successfully!',
    showConfirmButton: true,
    // confirmButtonColor: '#DD2427',
  });

  email.value = "";
  emailValidation.value = "";
}
</script>

<style scoped>
.image-placeholder {
}
</style>
