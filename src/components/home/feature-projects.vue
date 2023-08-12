<template>
  <div class="bg-gray-100">
    <div class="py-12 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
      <div class="mb-16 text-center">
        <h1 class="text-[35px] sm:text-[40px] 2xl:text-[44px] font-semibold relative">
          <span class="relative tracking-wide barlow-condensed uppercase">
            Featured Projects
            <span
              class="absolute bottom-0 top-[60px] left-1/2 transform -translate-x-1/2 w-20 border-b-4 border-red-500"
            ></span>
          </span>
        </h1>
      </div>

      <div class="bg-white">
        <div>
          <vueper-slides
            class="no-shadow text-xs"
            :visible-slides="visibleSlides"
            :gap="1"
            :slide-ratio="slideRatio"
            :dragging-distance="200"
            :bullets="false"
            autoplay
            infinite
          >
            <vueper-slide
              class="contents"
              v-for="(slide, i) in contents"
              :key="i"
              :image="slide.image"
            />
          </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import { useRoute } from "vue-router";

import ceva from "@/assets/feature-projects-images/ceva-logistics-inc.png";
import molito from "@/assets/feature-projects-images/molito-complex.png";
import msl from "@/assets/feature-projects-images/msl-hub.png";
import oneWilson from "@/assets/feature-projects-images/one-wilson-square.png";
import dominosPizza from "@/assets/feature-projects-images/dominos-pizza.png";
import pricon from "@/assets/feature-projects-images/pricon-microelectronics-inc.png";
import primeSales from "@/assets/feature-projects-images/prime-sales-inc.png";
import seda from "@/assets/feature-projects-images/seda-nuvali.png";
import gruppoEms from "@/assets/feature-projects-images/gruppo-ems-inc.png";
import clifton from "@/assets/feature-projects-images/tagaytay-clifton-resort-suites.png";
import ayala from "@/assets/feature-projects-images/the-columns-ayala.png";
import toyotaIsabela from "@/assets/feature-projects-images/toyota-cordon-isabela.png";
import aguila from "@/assets/feature-projects-images/PL-Aguila-Manufacturing-Inc.png";
import toyotaTuguegarao from "@/assets/feature-projects-images/toyota-tuguegarao.png";
import victoriaTowes from "@/assets/feature-projects-images/victoria-towers.png";


const route = useRoute();
const visibleSlides = ref(4);
const slideRatio = ref(1 / 4);


const contents = ref([
  {
    image: ceva,
  },

  {
    image: molito,
  },
  {
    image: msl,
  },
  {
    image: oneWilson,
  },

  {
    image: dominosPizza,
  },
  {
    image: pricon,
  },
  {
    image: primeSales,
  },
  {
    image: seda,
  },

  {
    image: gruppoEms,
  },
  {
    image: clifton,
  },

  {
    image: ayala,
  },
  {
    image: toyotaIsabela,
  },
  {
    image: aguila,
  },
  {
    image: toyotaTuguegarao,
  },
  {
    image: victoriaTowes,
  },  
]);

  const updateVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      visibleSlides.value = 4;
      slideRatio.value = 1 / 4;
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      visibleSlides.value = 3;
      slideRatio.value = 1 / 3;
    } else if (window.innerWidth < 768 && window.innerWidth >= 640) {
      visibleSlides.value = 2;
      slideRatio.value = 1 / 2;
    } else if (window.innerWidth < 640) {
      visibleSlides.value = 1;
      slideRatio.value = 1 / 1;
    }
  };

  // const updateSlideRatio = () => {
  //   if (window.innerWidth < 900 && window.innerWidth >= 500) {
  //     slideHeight.value = "520px";
  //   }
  // };

  watch(route, () => {
    updateVisibleSlides();
    // updateSlideRatio();
  }),

  onMounted(() => {
    updateVisibleSlides();
    // updateSlideRatio();

    window.addEventListener("resize", updateVisibleSlides);
    // window.addEventListener("resize", updateSlideRatio);
  }),

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateVisibleSlides);
    // window.removeEventListener("resize", updateSlideRatio);
  }) 
</script>

<style scoped>
.contents {
  /* opacity: .5; */
  box-sizing: border-box;
  border: 0px solid #333;
  color: #333;
  background-color: white;
  height: 91%;
  widows: 100%;

  /* background-position: center center; */
  /* cursor: pointer; */
}

.bg-white {
  --tw-bg-opacity: 0;
}

.custom-carousel {
  height: 100px; /* Set the desired height here */
}
</style>
