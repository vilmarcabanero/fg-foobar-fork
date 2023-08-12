<template>
  <div class="border-b border-gray-400 py-2">
      <div
          class="flex flex-wrap items-center justify-between cursor-pointer"
          @click="open"
      >
          <slot name="title">
            No Title
          </slot>
          
          <div>
              <FontAwesomeIcon v-if="isOpen" class="text-[18px] md:text-[18px] cursor-pointer" :icon="['fas', 'fa-caret-up']" />
              <FontAwesomeIcon v-else class="text-[18px] md:text-[18px] cursor-pointer" :icon="['fas', 'fa-caret-down']" />
          </div>
      </div>

      <div v-if="isOpen" class="mt-2 w-full">
          <slot>
            No Content for this Accordion
          </slot>
      </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              isOpen: false
          }
      },

      methods: {
          open() {
              this.isOpen = !this.isOpen
          }
      },

      watch: {
        $route() {
          this.isOpen = false;
        }
      },
  }
</script>
