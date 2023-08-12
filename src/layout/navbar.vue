<template>
  <div class="fixed top-0 left-0 right-0 z-10 bg-white" style="z-index: 9999999">
    <!-- START OF BLACK BACKGROUND NAV -->
    <nav class="bg-black hidden lg:block">
      <ul class="flex justify-center 2xl:justify-end uppercase text-white text-sm lg:w-[100%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
        <li
          v-for="(navLink, i) in navLinks"
          :key="navLink.title"
          class="relative group border-black font-extrabold flex justify-center items-center hover:bg-red-color hover:text-white duration-500"
          :class="{ 'bg-red-color text-white': isActiveLink(navLink.path) }"
        >
          <RouterLink 
            class="h-full w-full py-2 px-6" 
            :to="navLink.path"
            v-if="navLink.children.length === 0"
            ><span
              class="hover:border-b border-white text-[13px] 2xl:text-sm"
              :class="{
                'border-b border-white': isActiveLink(navLink.path),
              }"
              >{{ navLink.title }}</span
            ></RouterLink
          >

          <div
            v-else
            class="w-full h-full relative"
            @click="toggleDropdown"
            :class="{ 'bg-red-color': isActiveFreeLearningLink }"
          >
            <div
              class="h-full flex justify-center items-center gap-2 cursor-pointer px-6"
            >
              <span
                class="hover:border-b hover:border-white hover:text-white font-extrabold  text-[13px] 2xl:text-sm"
                :class="{ 'border-b border-white text-white': isActiveFreeLearningLink }"
                >{{ navLink.title }}</span
              >
              <FontAwesomeIcon :icon="['fas', 'caret-down']" />
            </div>

            <div class="z-50 absolute top-9 w-[250px]" v-if="isOpenDropdown">
              <!-- Overlay element -->
              <div class="fixed inset-0"></div>

              <div
                class="absolute top-0 left-0 w-full h-full overlay-container drop-shadow-lg"
              >
                <div
                  @click="toggleDropdownAndGetLink(navLinkChild.path)"
                  class="flex flex-col bg-white text-black hover:bg-red-color duration-700 hover:text-white"
                  :class="{ '!bg-red-color text-white': isActiveLink(navLinkChild.path) }"
                  v-for="(navLinkChild, index) in navLink.children"
                  :key="navLinkChild"
                >
                  <RouterLink
                    class="h-full py-2 pl-6 text-[14px] 2xl:text-[15px] font-semibold barlow-condensed"
                    :to="navLinkChild.path"
                  >
                    {{ navLinkChild.title }}</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <!-- END OF BLACK BACKGROUND NAV -->

    <!-- START OF CONTENT OF NAVBAR -->
    <div class="flex flex-col sm:flex-row  items-center justify-between px-[10px] lg:px-[0px] py-[2px] sm:py-[6px] lg:py-[12px] 2xl:py-[14px] lg:w-[90%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
      <div class="flex items-center gap-5">
        <div>
          <h3 class="uppercase font-extrabold text-xl">
            <RouterLink to="/">
              <img class="h-[50px] 2xl:h-[60px] w-[100%]" src="@/assets/logo.png" alt="" />
            </RouterLink>
          </h3>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <p
          class="text-[20px] lg:text-[23px] 2xl:text-[26px] uppercase font-bold barlow-condensed text-center"
          :class="fadingInAnimation"
        >
          Discover The Difference. Call us at
        </p>

        <div>
          <FontAwesomeIcon
            class="text-[22px] lg:text-2xl 2xl:text-3xl text-red-color text-center"
            :class="{ 'animate-phone-ring': isPhoneRinging }"
            :icon="['fas', 'phone']"
          />
          <span class="font-bold text-[26px] lg:text-3xl 2xl:text-4xl text-red-color ml-1">(02)8708-4008</span>
        </div>
      </div>

      <div class="flex justify-end gap-16 items-center">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-center gap-[6px] sm:gap-[4px] md:gap-[6px]">
            <a
              href=""
              class="text-gray-800 hover:text-blue-400 duration-500 text-[30px] lg:text-[34px] 2xl:text-[38px] mt-[2px]"
            >
              <FontAwesomeIcon :icon="['fab', 'square-facebook']" />
            </a>

            <a
              href=""
              class="text-gray-800 hover:text-red-400 duration-500 text-[30px] lg:text-[34px] 2xl:text-[38px] mt-[2px]"
            >
              <FontAwesomeIcon :icon="['fab', 'square-youtube']" />
            </a>

            <a
              href=""
              class="text-gray-800 hover:text-blue-400 duration-500 text-[30px] lg:text-[34px] 2xl:text-[38px] mt-[2px]"
            >
              <FontAwesomeIcon :icon="['fab', 'linkedin']" />
            </a>

            <a
              href=""
              class="text-gray-800 hover:text-amber-600 duration-500 text-[30px] lg:text-[34px] 2xl:text-[38px] mt-[2px]"
            >
              <FontAwesomeIcon :icon="['fab', 'square-instagram']" />
            </a>

            <!-- <a
                href=""
                class="text-gray-800 hover:text-violet-400 duration-500 text-3xl mt-[2px]"
              >
                <FontAwesomeIcon :icon="['fab', 'tiktok']" />
              </a> -->
          </div>
        </div>
      </div>
    </div>
    <!-- END OF CONTENT OF NAVBAR -->

    <!-- START OF RED BACKGROUND NAV -->
    <nav class="bg-red-color">
      <ul class="flex justify-center flex-wrap uppercase text-white text-sm lg:w-[90%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
        <li
          v-for="navLink in belowNavLinks"
          :key="navLink.title"
          class="relative group border-black font-extrabold flex justify-center items-center py-2 hover:bg-dark-red-color hover:text-white duration-500 hidden lg:block"
          :class="{
            'bg-dark-red-color text-white': navLink.isActiveLink,
          }"
        >
          <div
            v-if="navLink.isDropdown"
            class="w-full h-full relative hidden lg:block"
            @click="navLink.toggleDropdown()"
          >
            <div
              class="h-full flex justify-center items-center gap-2 cursor-pointer lg:px-3 xl:px-6 text-[13px] 2xl:text-sm"
            >
              {{ navLink.title }}
              <FontAwesomeIcon :icon="['fas', 'caret-down']" />
            </div>

            <div class="z-50 absolute top-7 w-[300px]" v-if="navLink.isOpen">
              <!-- Overlay element -->
              <div class="fixed inset-0"></div>

              <div
                class="absolute top-0 left-0 w-full h-full overlay-container drop-shadow-lg"
              >
                <div
                  @click="navLink.toggleDropdownAndGetLink(navLinkChild.path)"
                  class="flex flex-col bg-white text-black font-bold hover:bg-red-color duration-700 hover:text-white"
                  :class="{ '!bg-red-color text-white': isActiveLink(navLinkChild.path) }"
                  v-for="navLinkChild in navLink.children"
                  :key="navLinkChild"
                >
                  <RouterLink
                    class="h-full py-2 pl-6 text-[14px] 2xl:text-[15px] font-semibold barlow-condensed"
                    :to="navLinkChild.path"
                  >
                    {{ navLinkChild.title }}</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div v-else class="w-full h-full relative hidden lg:block">
            <div
              class="h-full flex justify-center items-center gap-2 cursor-pointer px-6 text-[13px] 2xl:text-sm"
            >
              <RouterLink :to="navLink.path">{{ navLink.title }}</RouterLink>
            </div>
          </div>
        </li>
      </ul>

      <!-- START OF MOBILE MENU -->
      <div>
        <div class="block lg:hidden text-white">
          <div class="flex justify-center py-1">
            <FontAwesomeIcon @click="openSidebarMenu" class="text-[18px] md:text-[22px] cursor-pointer" :icon="['fas', 'bars']" />
          </div>
        </div>

        <div :class="{ 'translate-x-full': isSidebarNotActive }" class="overflow-y-auto p-4 bg-white fixed top-0 right-0 bottom-0 w-full transform  transition-transform duration-300">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-lg font-medium relative -left-[5px]"><img class="w-[185px]" src="@/assets/logo.png" alt=""></h1>
            <FontAwesomeIcon @click="closeSidebarMenu" class="text-[22px] cursor-pointer" :icon="['fas', 'xmark']" />
          </div>

          <div v-for="navLink in navLinks" :key="navLink.title">
            <div class="py-2 text-[18px] font-bold border-b border-gray-400" v-if="navLink.children.length === 0">
              <RouterLink :to="navLink.path" class="hover:text-red-color text-gray-700"  :class="{ ' text-red-color': isActiveLink(navLink.path) }">
                {{ navLink.title }}
              </RouterLink>
            </div>

       
            <Accordion class="text-gray-700" v-else>
              <template #title>
                <h3 class="text-[18px] font-bold" 
                  >{{ navLink.title }}
                </h3>
              </template>

              <ul class="ml-5" v-for="navLinkChild in navLink.children">
                <RouterLink :to="navLinkChild.path" class="hover:text-red-color text-gray-600"  :class="{ ' text-red-color': isActiveLink(navLinkChild.path) }">
                  <li class="py-[10px] font-semibold text-[18px]">{{ navLinkChild.title }}</li>
                </RouterLink>
              </ul>
            </Accordion>
          </div>

          <div v-for="navLink in belowNavLinks" :key="navLink.title">
            <div class="py-2 text-[18px] font-bold border-b border-gray-400" v-if="navLink.children.length === 0">
              <RouterLink :to="navLink.path" class="hover:text-red-color text-gray-700"  :class="{ ' text-red-color': isActiveLink(navLink.path) }">
                {{ navLink.title }}
              </RouterLink>
            </div>

            <Accordion class="text-gray-700" v-else>
              <template #title>
                <h3 class="text-[18px] font-bold">{{ navLink.title }}</h3>
              </template>

              <ul class="ml-5" v-for="navLinkChild in navLink.children">
                <RouterLink :to="navLinkChild.path" class="hover:text-red-color text-gray-600"  :class="{ ' text-red-color': isActiveLink(navLinkChild.path) }">
                  <li class="py-[10px] font-semibold text-[18px]">{{ navLinkChild.title }}</li>
                </RouterLink>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
      <!-- END OF MOBILE MENU --> 
    </nav>
    <!-- END OF RED BACKGROUND NAV -->
  </div>
</template>

<script setup>
import { reactive, ref, watch, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import Accordion from "@/global-components/AccordionComponent.vue";

const route = useRoute();

let phoneRingingTimeout;

const isSidebarNotActive = ref(true);

const isOpenDropdown = ref(false);
const isActiveFreeLearningLink = ref(false);

const isEscapePressed = ref(false);

const isPhoneRinging = ref(false);

const fadingInAnimation = ref("");

const navLinks = reactive([
  {
    title: "Home",
    path: "/",
    children: [],
  },
  {
    title: "About Us",
    path: "/about-us",
    children: [],
  },
  {
    title: "Products & Services",
    path: "/products-&-services",
    children: [],
  },
  {
    title: "Free Resources",
    children: [
      {
        title: "Videos",
        path: "/free-resources/videos",
      },
      {
        title: "Blogs",
        path: "/free-resources/blogs",
      },
      {
        title: "Preventive Maintenance Ebook",
        path: "/free-resources/preventive-maintenance-ebook",
      },
    ],
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    children: [],
  },
  {
    title: "Careers",
    path: "/careers",
    children: [],
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    children: [],
  },
]);

let belowNavLinks = reactive([
  {
    isDropdown: true,
    isOpen: false,
    isActiveLink: false,
    title: "Fire Sprinkler & Suppression",

    children: [
      {
        title: "Inspection, Testing, & Maintenance",
        path: "/inspection-testing-&-maintenance",
      },
      {
        title: "Design & Installation",
        path: "/design-&-installation",
      },
      {
        title: "Standpipe & Hose System",
        path: "/standpipe-&-hose-system",
      },
      {
        title: "Fire Hydrant",
        path: "/fire-hydrant",
      },
      {
        title: "Fire Pumps",
        path: "/fire-pumps",
      },
      {
        title: "Deluge and Pre-action",
        path: "/deluge-&-preaction",
      },
      {
        title: "Foam Extinguishing System",
        path: "/foam-extinguishing-system",
      },
    ],

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    toggleDropdownAndGetLink(path) {
      if (route.path === path) {
        this.isOpen = true;
        this.isActiveLink = true;
        return;
      }

      this.isOpen = !this.isOpen;
      this.isActiveLink = !this.isActiveLink;
    },
  },

  {
    isDropdown: true,
    isOpen: false,
    isActiveLink: false,
    title: "Fire Alarms",
    children: [
      {
        title: "Inspection, Testing, & Maintenance",
        path: "/inspection-testing-&-maintenance-fire-alarm",
      },
      {
        title: "Design & Installation",
        path: "/design-&-installation-fire-alarm",
      },
    ],

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    toggleDropdownAndGetLink(path) {
      if (route.path === path) {
        this.isOpen = true;
        this.isActiveLink = true;
        return;
      }

      this.isOpen = !this.isOpen;
      this.isActiveLink = !this.isActiveLink;
    },
  },

  {
    isDropdown: false,
    isActiveLink: false,
    title: "Clean Agent Extinguishing System",
    path: "/clean-agent-extinguishing-system",
    children: [],
  },

  {
    isDropdown: true,
    isOpen: false,
    isActiveLink: false,
    title: "Special Hazards",
    children: [
      {
        title: "Kitchen Fire Suppression",
        path: "/special-hazards/kitchen-fire-suppression",
      },
      {
        title: "Aerosol Fire Suppression",
        path: "/special-hazards/aerosol-fire-suppression",
      },
      {
        title: "Water-mist Fire Suppression System",
        path: "/special-hazards/water-mist-fire-suppression-system",
      },
      {
        title: "Fire Extinguishers",
        path: "/special-hazards/fire-extinguishers",
      },
    ],

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    toggleDropdownAndGetLink(path) {
      if (route.path === path) {
        this.isOpen = true;
        this.isActiveLink = true;
        return;
      }

      this.isOpen = !this.isOpen;
      this.isActiveLink = !this.isActiveLink;
    },
  },
]);

watch(route, () => {
  isOpenDropdown.value = false;
  isActiveFreeLearningLink.value = false;
  isPhoneRinging.value = true;
  isSidebarNotActive.value = true;

  clearTimeout(phoneRingingTimeout);

  phoneRingingTimeout = setTimeout(() => {
    isPhoneRinging.value = false;
  }, 2000);

  belowNavLinks.forEach((navLink) => {
    if (navLink.title === "Fire Sprinkler & Suppression") {
      const thereIsCurrentLink = navLink.children.some(
        (childLink) => childLink.path === route.path
      );

      if (thereIsCurrentLink) {
        navLink.isActiveLink = true;
      } else {
        navLink.isActiveLink = false;
      }
    } else if (navLink.title === "Fire Alarms") {
      const thereIsCurrentLink = navLink.children.some(
        (childLink) => childLink.path === route.path
      );

      if (thereIsCurrentLink) {
        navLink.isActiveLink = true;
      } else {
        navLink.isActiveLink = false;
      }
    } else if (navLink.title === "Special Hazards") {
      const thereIsCurrentLink = navLink.children.some(
        (childLink) => childLink.path === route.path
      );

      if (thereIsCurrentLink) {
        navLink.isActiveLink = true;
      } else {
        navLink.isActiveLink = false;
      }
    } else {
      route.path !== navLink.path
        ? (navLink.isActiveLink = false)
        : (navLink.isActiveLink = true);
    }
  });
});

watch(isEscapePressed, (value) => {
  if (value) {
    isOpenDropdown.value = false;
    isEscapePressed.value = false;

    belowNavLinks.forEach((navLink) => {
      navLink.isOpen = false;
    });
  }
});

watch(fadingInAnimation, (value) => {
  if (value === "text-gray-100") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-200 duration-1000";
    }, 1000);
  }

  if (value === "text-gray-200 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-300 duration-1000";
    }, 500);
  }

  if (value === "text-gray-300 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-400 duration-1000";
    }, 500);
  }

  if (value === "text-gray-400 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-500 duration-1000";
    }, 500);
  }

  if (value === "text-gray-500 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-600 duration-1000";
    }, 500);
  }

  if (value === "text-gray-600 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-700 duration-1000";
    }, 500);
  }

  if (value === "text-gray-700 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-800 duration-1000";
    }, 500);
  }

  if (value === "text-gray-800 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-100";
    }, 10000);
  }
});

// const handleEscapeKey = (event) => {
//   if (event.key === "Escape") {
//     isEscapePressed.value = true;
//   }
// };

const isActiveLink = (path) => {
  return path === route.path;
};

const openSidebarMenu = () => {
  isSidebarNotActive.value = false;
}

const closeSidebarMenu = () => {
  isSidebarNotActive.value = true;
}

const toggleDropdownAndGetLink = (path) => {
  if (route.path === path) {
    isActiveFreeLearningLink.value = true;
    isOpenDropdown.value = true;
    return;
  }

  isOpenDropdown.value = !isOpenDropdown.value;
  isActiveFreeLearningLink.value = !isActiveFreeLearningLink.value;
};

const toggleDropdown = () => {
  isOpenDropdown.value = !isOpenDropdown.value;
};

onMounted(() => {
  fadingInAnimation.value = "text-gray-100";
  // const scrollPaddingElement = document.querySelector(".scroll-padding");
  // const initialOffsetTop = scrollPaddingElement.offsetTop;
  // Function to toggle the reduce-padding class based on the scroll position
  // const toggleReducePaddingClass = () => {
  //   if (window.pageYOffset > initialOffsetTop) {
  //     scrollPaddingElement.classList.add("reduce-padding");
  //   } else {
  //     scrollPaddingElement.classList.remove("reduce-padding");
  //   }
  // };
  // window.addEventListener("keydown", handleEscapeKey);
  // window.addEventListener("scroll", toggleReducePaddingClass);
});

// onBeforeUnmount(() => {
//   window.removeEventListener("scroll", toggleReducePaddingClass);
// });

// onUnmounted(() => {
//   window.removeEventListener("keydown", handleEscapeKey);
// });
</script>

<style scoped>
@keyframes phone-ring {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* .scroll-padding {
  transition: padding 0.5s;
} */

/* .scroll-padding.reduce-padding {
  padding: 0px 220px 0px 220px;
} */

.animate-phone-ring {
  animation-name: phone-ring;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}

.asd {
  color: #1b1919a0;
}
</style>
