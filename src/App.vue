<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./layout/navbar.vue";
import Footer from "./layout/footer.vue";
</script>

<style>
.vueperslides__arrow {
  font-size: 6px;
}

.vueperslides__bullet .default {
  width: 8px;
  height: 8px;
}

.vueperslides__bullet--active .default {
  border-width: 4px;
}

.vueperslides__arrow svg {
  stroke-width: 3;
}

.testimonials-carousel-container .vueperslides__arrows, .testimonials-carousel-container .vueperslides__bullets {
  color: black;
}

@keyframes right-to-original-spot {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.vueperslide--visible .details-container {
  animation: right-to-original-spot 2s ease-in-out;
}
</style>
