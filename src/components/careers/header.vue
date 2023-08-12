<template>
  <div class="bg-img pb-52 pt-[150px] px-12 text-center mt-[170px] relative">
    <h3 class="text-[50px] font-bold text-white relative">
      <span class="relative tracking-wide barlow-condensed uppercase">
        Careers
        <span
          class="absolute bottom-0 top-[65px] left-1/2 transform -translate-x-1/2 w-20 border-b-4 border-red-500"
        ></span>
      </span>
    </h3>

    <svg
      class="absolute -bottom-[95px] left-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.bg-img {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url("@/assets/header-images/testimonials.png");
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
}
</style>
