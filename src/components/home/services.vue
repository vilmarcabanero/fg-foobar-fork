<template>
  <div class="py-12 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
    <div class="mb-16 text-center">
      <h1 class="text-[35px] sm:text-[40px] 2xl:text-[44px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
          Products & Services
          <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span>
        </span>
      </h1>
    </div> 

    <div class="grid sm:grid-cols-2 2md:grid-cols-3 gap-6 xl:gap-16"> 
      <div
        class="p-4 pb-6 rounded-md box-shadow"
        v-for="(item, i) in productsServices"
        :key="i"
      >
        <div class="mb-2 border-2 overflow-hidden">
          <RouterLink :to="item.link">
            <img
              class="w-full h-[200px] transition-transform duration-300 transform hover:scale-110"
              :src="item.image"
              alt=""
            />
          </RouterLink>
        </div>

        <h3 class="uppercase text-xl font-semibold mb-1 barlow-condensed">
          <span class="hover:text-red-color duration-500"
            ><RouterLink :to="item.link">{{ item.name }}</RouterLink></span
          >
        </h3>

        <p class="text-[18px] pb-1 text-gray-700">
          {{ limitDescription(item.description) }}
        </p>

        <RouterLink
          :to="item.link"
          class="border-b border-red-color text-red-color hover:border-none font-medium"
          ><span>Learn More.</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

import sprinkler from '@/assets/products-services/fire-sprinkler.png';
const limitDescription = (desc) => {
  const limitedDesc = desc.slice(0, 100).trim();

  return limitedDesc + "...";
};

const productsServices = reactive([
  {
    name: "Fire Sprinkler",
    description:
      "Fire sprinkler systems are designed to automatically spray water onto a fire with specified patterns at predetermined temperatures. They are highly reliable and effective in reducing the risk of death in case of a fire by up to 75%. This, of course, is only true for systems that have been designed and installed properly. Without your fire protection system in working order, a small fire that could have been put out can quickly turn into an uncontrollable blaze.",
    link: "/design-&-installation",
    image: sprinkler,
  },

  {
    name: "Fire Alarm",
    description:
      "Fire alarm systems play an important role in providing life safety. These systems detect smoke, fire, and other hazardous conditions and provide notification to occupants and responders, making buildings safer in the event of an emergency.",
    link: "/design-&-installation-fire-alarm",
    image: "@/assets/products-services/fire-alarm.png",
  },

  {
    name: "Clean Agent Extinguishing System",
    description: `These systems are non-conductive, and that does not leave a residue. They are
          advantageous for special hazard applications, including data centers, computer
          rooms, telecommunication facilities, and areas where water suppression is not
          desirable.`,
    link: "/clean-agent-extinguishing-system",
    image: "@/assets/fire-sprinkler-&-suppression/clean-agent-extinguisher.png",
  },

  {
    name: "Standpipe & Hose System",
    description: `Standpipe systems can significantly improve the efficiency of manual
          firefighting operations by eliminating the need for long and cumbersome hose
          lays from fire apparatus to a fire. Even in buildings protected by automatic
          sprinklers, standpipe systems can play an important role in building fire safety
          by serving as a backup for and complement to sprinklers.`,
    link: "/standpipe-&-hose-system",
    image: "@/assets/fire-sprinkler-&-suppression/standpipe-&-hose-system.png",
  },

  {
    name: "Fire Hydrants",
    description: `A fire hydrant is a visible connection point strategically placed in designated
          areas for firefighters to access a water source. Its purpose is to promptly
          provide the necessary water for firefighters to put out fires.`,
    link: "/fire-hydrant",
    image: "@/assets/fire-sprinkler-&-suppression/fire-hydrant.png",
  },

  {
    name: "Fire Pumps",
    description: `Fire pumps increase the water supply pressure available from tanks or other
          sources. Dedicated fire pumps for fire protection use are more compact, more
          reliable, and easier to maintain.`,
    link: "/fire-pumps",
    image: "@/assets/fire-sprinkler-&-suppression/fire-pumps.png",
  },

  {
    name: "Deluge & Preaction",
    description: `Deluge systems are used to protect against rapidly growing fires by delivering
          large quantities of water in a short period. It is appropriate for facilities
          where significant amounts of highly combustible materials are present like
          transformers, fuel tanks, etc. Preaction systems are typically found in spaces
          containing computers or communications equipment, museums, and facilities where
          inadvertent water leakage from system piping is of major concern.`,
    link: "/deluge-&-preaction",
    image: "@/assets/fire-sprinkler-&-suppression/deluge-preaction.png",
  },

  {
    name: "Foam Extinguishing System",
    description: `Firefighting foams are used primarily to combat flammable and combustible liquid fuel fires. Due to the growing global concern about PFAS, it is advisable to only use these systems when absolutely necessary.`,
    link: "/foam-extinguishing-system",
    image: "@/assets/fire-sprinkler-&-suppression/foam-extinguishing-system.png",
  },

  {
    name: "Special Hazards",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore ullam
          blanditiis soluta, officia fugiat. Inventore deserunt temporibus omnis
          exercitationem, quidem quis doloribus beatae, iure dolores, assumenda molestias
          quaerat eum.`,
    link: "/special-hazards",
    image: "@/assets/fire-sprinkler-&-suppression/special-hazards.png",
  },
]);
</script>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
