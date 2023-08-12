<template>
  <div>
    <Header />
    <div class="py-12 lg:py-15 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
      <ProductsAndServices />
    </div> 
  </div>
</template> 

<script setup>
import Header from "@/components/products-&-services/header.vue";
import ProductsAndServices from "@/components/products-&-services/products-&-services.vue";
</script>
