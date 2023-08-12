<template>
  <div class="pb-[80px] pt-[20px] grid grid-cols-12 gap-12">
    <div class="mb-10 text-center col-span-12">
      <h1 class="text-[44px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase">
          Customer Feedback Form
          <span
            class="absolute bottom-0 top-[60px] left-1/2 transform -translate-x-1/2 w-20 border-b-4 border-red-500"
          ></span>
        </span>
      </h1>
    </div>

    <p class="col-span-12 text-[20px] font-semibold text-gray-700">
      Thank you for choosing
      <span class="text-red-color font-bold">Flameguard Fire Protection Inc!</span> We
      strive to provide the best possible experience for our valued customers, and your
      feedback plays a crucial role in helping us achieve that goal. We kindly ask you to
      take a few minutes to complete this survey to share your thoughts with us.
    </p>

    <div class="p-8 pb-5 box-shadow grid grid-cols-12 gap-4 col-span-12">
      <div class="col-span-6">
        <label for="first-name" class="text-gray-600 font-semibold text-[18px]"
          >First Name </label
        ><span class="text-red-600">*</span>
        <input
          v-model="feedbackForm.firstName"
          id="first-name"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="First Name"
        />
        <span class="text-red-color">{{ feedbackFormValidation.firstName }}</span>
      </div>

      <div class="col-span-6">
        <label for="last-name" class="text-gray-600 font-semibold text-[18px]"
          >Last Name </label
        ><span class="text-red-600">*</span>
        <input
        v-model="feedbackForm.lastName"
          id="last-name"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Last Name"
        />
        <span class="text-red-color">{{ feedbackFormValidation.lastName }}</span>
      </div>

      <div class="col-span-12">
        <label for="email" class="text-gray-600 font-semibold text-[18px]">Email </label
        ><span class="text-red-600">*</span>
        <input
        v-model="feedbackForm.email"
          id="email"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Email"
        />
        <span class="text-red-color">{{ feedbackFormValidation.email }}</span>
      </div>

      <div class="col-span-12">
        <label for="phone-no" class="text-gray-600 font-semibold text-[18px]"
          >Contact No.</label
        >
        <input
        v-model="feedbackForm.contactNumber"
          id="phone-no"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Contact No"
        />
      </div>

      <div class="col-span-12">
        <label for="company-name" class="text-gray-600 font-semibold text-[18px]"
          >Company Name</label
        >
        <input
          v-model="feedbackForm.companyName"
          id="company-name"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Company Name"
        />
      </div>

      <div class="col-span-12">
        <label for="company-position" class="text-gray-600 font-semibold text-[18px]"
          >Company Position</label
        >
        <input
          v-model="feedbackForm.companyPosition"
          id="company-position"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Company Position"
        />
      </div>

      <div class="col-span-12">
        <label for="comments" class="text-gray-600 font-semibold text-[18px]"
          >Describe Your Experience with Flameguard
        </label>
        <span class="text-red-600">*</span>
        <textarea
          v-model="feedbackForm.experience"
          name=""
          id="comments"
          cols="30"
          rows="5"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Message"
        ></textarea>
        <span class="text-red-color">{{ feedbackFormValidation.experience }}</span>
      </div>

      <div class="col-span-12 mt-4">
        <Button btnRed btnMinWidth="min-w-[100%]" @click="handleSubmit">Submit</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Button from "../../global-components/ButtonComponent.vue";
import Swal from "sweetalert2";

const feedbackForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  companyName: "",
  companyPosition: "",
  experience: ""
})

const feedbackFormValidation = reactive({
  firstName: "",
  lastName: "",
  email: "",
  experience: ""
})

function handleSubmit() {
  if (!feedbackForm.firstName && !feedbackForm.lastName && !feedbackForm.email && !feedbackForm.experience) {
    Swal.fire({
      icon: 'error',
      title: 'Input fields are required!',
      text: 'Please make sure to fill up the required fields.',
    })

    feedbackFormValidation.firstName = "First name field is required";
    feedbackFormValidation.lastName = "Last name field is required";
    feedbackFormValidation.email = "Email field is required";
    feedbackFormValidation.experience = "Experience field is required";

    return;
  } 

  Swal.fire({
    icon: 'success',
    title: 'Your feedback has been submitted successfully!',
    showConfirmButton: true,
    // confirmButtonColor: '#DD2427',
  })

  feedbackForm.firstName = "";
  feedbackForm.lastName = "";
  feedbackForm.email = "";
  feedbackForm.experience = "";
  
  feedbackFormValidation.firstName = "";
  feedbackFormValidation.lastName = "";
  feedbackFormValidation.email = "";
  feedbackFormValidation.experience = "";
}
</script>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
