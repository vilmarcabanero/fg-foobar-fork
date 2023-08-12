<template>
  <div class="mt-[160px] sm:mt-[95px] lg:mt-[165px] 2xl:mt-[170px]">
    <vueper-slides
      infinite
      :autoplay="true"
      :touchable="false"
      duration="7000"
      fixed-height="500px"
      fade 
    >
      <vueper-slide v-for="(slide, i) in contents" :key="i" :image="slide.image">
        <template #content>
          <div class="px-[10%] 2xl:px-[20%] h-full horizontal-gradient flex items-center">
            <div class="text-center lg:text-left lg:w-[600px] flex flex-col gap-3 details-container">
              <h2
                class="text-white text-[30px] sm:text-[40px] xl:text-[45px] 2xl:text-[50px] font-semibold uppercase barlow-condensed leading-[55px]"
              >
                {{ slide.mainText }}
              </h2>
              <p class="text-white text-[18px] sm:text-[20px] 2xl:text-[22px] font-medium">
                {{ slide.subText }}
              </p>

              <RouterLink :to="slide.link">
                <Button btnRed isRounded
                  ><span>{{ slide.btnText }}</span></Button
                >
              </RouterLink>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import Button from "../../global-components/ButtonComponent.vue";

export default {
  components: {
    VueperSlides,
    VueperSlide,
    Button,
  },

  data() {
    return {
      contents: [
        {
          image: "@/assets/header-images/books.png",
          // link: '/testimonials'
          mainText: "Safeguard Your Building and Save Money",
          subText:
            "Download our simplified comprehensive eBook on Fire Protection Maintenance for Facility Managers.",
          dataAos: "fade-in",
          btnText: "Click Here to Download",
          link: "/#",
        },

        {
          image: "@/assets/header-images/woman-corporate-attire.png",
          // link: '/testimonials',
          mainText: "Free Online Resources",
          subText:
            "Get free instant access to comprehensive fire safety information right at your fingertips.",
          dataAos: "fade-in",
          btnText: "Click Here to Learn More",
          link: "/#",
        },
        {
          image: "@/assets/header-images/engineer-with-computer.png",
          // link: '/testimonials'
          mainText: "Science-Based Fire Safety",
          subText:
            "Our team consists of highly skilled professionals with extensive expertise and training in fire safety. We take pride in being the only contractor in the Philippines with personnel who have earned distinguished certifications from the National Fire Protection Association (NFPA), including Certified Fire Protection Specialist (CFPS) and Certified Water-Based System Professional (CWBSP).",
          dataAos: "fade-in",
          btnText: "Learn More About Us",
          link: "/about-us", 
        },
      ],
    };
  },
};
</script>

<style scoped>
.horizontal-gradient {
  background: linear-gradient(
    to left,
    transparent,
    rgba(0, 0, 0, 0),
    rgba(64, 60, 60, 0.932),
    rgb(54, 53, 53),
    rgb(54, 53, 53)
  );
}

/* .slanted-bg {
  position: relative;
  overflow: hidden;
  transform: skewY(-14deg);
  transform: skewX(-30deg);
  border-radius: 40px;
}

.slanted-bg:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  transform: skewY(14deg);
  transform: skewX(30deg);
} */
</style>
