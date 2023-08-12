<template>
  <div style="z-index: 999">
    <div class="mb-16 text-center">
      <h1 class="text-[35px] sm:text-[40px] 2xl:text-[44px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
          Services
          <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span>
        </span>
      </h1>
    </div>

    <div style="z-index: 999"> 
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 mb-24">
        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/inspection-testing-&-maintenance">
              <img
                class="xl:h-[300px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/adjusting-fire-pump.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[24px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/inspection-testing-&-maintenance">
              Inspection, Testing & Maintenance
            </RouterLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/design-&-installation">
              <img
                class="xl:h-[300px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/designing.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[24px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/design-&-installation">Design and Installation</RouterLink>
          </h3>
        </div>
      </div>

      <div class="mb-16 text-center">
        <h1 class="text-[35px] sm:text-[40px] 2xl:text-[44px] font-semibold relative">
          <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
            Systems
            <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
            ></span>
          </span>
        </h1>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/standpipe-&-hose-system">
              <img
                class="xl:h-[200px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/standpipe-&-hose-system.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[22px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/standpipe-&-hose-system">
              Standpipe and Hose System
            </RouterLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/fire-hydrant">
              <img
                class="xl:h-[200px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/fire-hydrant.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[22px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/fire-hydrant">Fire Hydrant</RouterLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/fire-pumps">
              <img
                class="xl:h-[200px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/fire-pumps.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[22px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/fire-pumps">Fire Pumps</RouterLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/deluge-&-preaction">
              <img
                class="xl:h-[200px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/deluge-preaction.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[22px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/deluge-&-preaction">Deluge and Pre-action</RouterLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/foam-extinguishing-system">
              <img
                class="xl:h-[200px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/foam-extinguishing-system.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[22px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/foam-extinguishing-system">
              Foam Extinguishing System
            </RouterLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/clean-agent-extinguishing-system">
              <img
                class="xl:h-[200px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/clean-agent-extinguisher.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[22px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/clean-agent-extinguishing-system">
              Clean Agent Extinguishing System
            </RouterLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <RouterLink to="/special-hazards">
              <img
                class="xl:h-[200px] w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                src="@/assets/fire-sprinkler-&-suppression/special-hazards.png"
                alt=""
              />
            </RouterLink>
          </div>

          <h3 class="text-[22px] font-bold hover:text-red-600 duration-500 mt-2 text-center">
            <RouterLink to="/special-hazards"> Special Hazards </RouterLink>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
