<template>
  <div class="flex gap-2">
    <button 
      class="py-2 px-4 min-w-[100px] rounded shadow-lg bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent transition duration-300" 
    >
      Button Outlined
    </button>

    <button 
      class="py-2 px-4 min-w-[100px] rounded shadow-lg bg-red-500 text-white transition-transform duration-300 transform hover:-translate-y-1" 
    >
      Button Solid
    </button>
  </div>
</template>