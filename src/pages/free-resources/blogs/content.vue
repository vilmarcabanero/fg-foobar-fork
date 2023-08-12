<template>
  <div style="z-index: 999">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10" style="z-index: 999">
      <div
        style="z-index: 999"
        class="p-4 pb-6 rounded-md box-shadow"
        v-for="(content, i) in contents"
        :key="i"
      >
        <div class="mb-2 border-2 overflow-hidden">
          <RouterLink :to="content.link">
            <img
              class="w-full transition-transform duration-300 transform hover:scale-110"
              :src="content.imageLink"
              alt=""
            />
          </RouterLink>
        </div>

        <h2 class="text-xl font-semibold barlow-condensed uppercase">
          <span class="hover:text-gray-500 duration-500"
            ><RouterLink :to="content.link">{{ content.title }}</RouterLink>
          </span>
        </h2>

        <div class="my-2 text-red-color text-[18px] barlow-condensed font-medium">
          <span class="mr-1">by {{ content.author }} |</span>
          <span class="mr-1">{{ content.date }} |</span>
          <span>{{ content.category }}</span>
        </div>

        <p class="text-[18px] pb-1 text-gray-700">
          {{ limitDescription(content.description) }}
        </p>

        <RouterLink
          :to="content.link"
          class="border-b border-red-color text-red-color hover:border-none font-medium"
          ><span>Learn More.</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const limitDescription = (desc) => {
  const limitedDesc = desc.slice(0, 250).trim();

  return limitedDesc + "...";
};

const contents = ref([
  {
    title: "A Day in the Life of Rapid Response Firefighters",
    author: "Flameguard",
    date: "June 15, 2023",
    category: "Fire Protection",
    link: "/free-resources/blogs/1",
    imageLink:
      "https://tse1.mm.bing.net/th?id=OIP.lZeHkwFav7zWamxaE3vpNAHaE8&pid=Api&P=0&h=180",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil excepturi accusantium illum ipsum quod dolorem quae, ea corporis debitis et aut maiores aperiam facere commodi eum porro. Nemo corporis, corrupti magnam ipsa est, excepturi totam tenetur laudantium optio voluptas voluptatum quam quasi, saepe placeat dolorem. Ipsa consequuntur sapiente nemo!",
  },

  {
    title: "Guardian Fire Brigade's Stories of Valor",
    author: "Flameguard",
    date: "January 28, 2023",
    category: "Fire Protection",
    link: "/free-resources/blogs/2",
    imageLink:
      "https://tse1.mm.bing.net/th?id=OIP.lZeHkwFav7zWamxaE3vpNAHaE8&pid=Api&P=0&h=180",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil excepturi accusantium illum ipsum quod dolorem quae, ea corporis debitis et aut maiores aperiam facere commodi eum porro. Nemo corporis, corrupti magnam ipsa est, excepturi totam tenetur laudantium optio voluptas voluptatum quam quasi, saepe placeat dolorem. Ipsa consequuntur sapiente nemo!",
  },

  {
    title: "Ember Force's Guide to Fire Rescue",
    author: "Flameguard",
    date: "March 10, 2023",
    category: "Fire Protection",
    link: "/free-resources/blogs/3",
    imageLink:
      "https://tse1.mm.bing.net/th?id=OIP.lZeHkwFav7zWamxaE3vpNAHaE8&pid=Api&P=0&h=180",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil excepturi accusantium illum ipsum quod dolorem quae, ea corporis debitis et aut maiores aperiam facere commodi eum porro. Nemo corporis, corrupti magnam ipsa est, excepturi totam tenetur laudantium optio voluptas voluptatum quam quasi, saepe placeat dolorem. Ipsa consequuntur sapiente nemo!",
  },

  {
    title: "Tales of Bravery from Firestorm Heroes",
    author: "Flameguard",
    date: "February 7, 2023",
    category: "Fire Protection",
    link: "/free-resources/blogs/4",
    imageLink:
      "https://tse1.mm.bing.net/th?id=OIP.lZeHkwFav7zWamxaE3vpNAHaE8&pid=Api&P=0&h=180",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil excepturi accusantium illum ipsum quod dolorem quae, ea corporis debitis et aut maiores aperiam facere commodi eum porro. Nemo corporis, corrupti magnam ipsa est, excepturi totam tenetur laudantium optio voluptas voluptatum quam quasi, saepe placeat dolorem. Ipsa consequuntur sapiente nemo!",
  },

  {
    title: "Top 10 Fire Safety Tips for Your Home",
    author: "Flameguard",
    date: "April 3, 2023",
    category: "Fire Protection",
    link: "/free-resources/blogs/5",
    imageLink:
      "https://tse1.mm.bing.net/th?id=OIP.lZeHkwFav7zWamxaE3vpNAHaE8&pid=Api&P=0&h=180",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil excepturi accusantium illum ipsum quod dolorem quae, ea corporis debitis et aut maiores aperiam facere commodi eum porro. Nemo corporis, corrupti magnam ipsa est, excepturi totam tenetur laudantium optio voluptas voluptatum quam quasi, saepe placeat dolorem. Ipsa consequuntur sapiente nemo!",
  },

  {
    title: "Inspiring Stories from the Frontline",
    author: "Flameguard",
    date: "May 11, 2023",
    category: "Fire Protection",
    link: "/free-resources/blogs/6",
    imageLink:
      "https://tse1.mm.bing.net/th?id=OIP.lZeHkwFav7zWamxaE3vpNAHaE8&pid=Api&P=0&h=180",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil excepturi accusantium illum ipsum quod dolorem quae, ea corporis debitis et aut maiores aperiam facere commodi eum porro. Nemo corporis, corrupti magnam ipsa est, excepturi totam tenetur laudantium optio voluptas voluptatum quam quasi, saepe placeat dolorem. Ipsa consequuntur sapiente nemo!",
  },

  {
    title: "Phoenix Fire Department's Resilience",
    author: "Flameguard",
    date: "January 16, 2023",
    category: "Fire Protection",
    link: "/free-resources/blogs/7",
    imageLink:
      "https://tse1.mm.bing.net/th?id=OIP.lZeHkwFav7zWamxaE3vpNAHaE8&pid=Api&P=0&h=180",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil excepturi accusantium illum ipsum quod dolorem quae, ea corporis debitis et aut maiores aperiam facere commodi eum porro. Nemo corporis, corrupti magnam ipsa est, excepturi totam tenetur laudantium optio voluptas voluptatum quam quasi, saepe placeat dolorem. Ipsa consequuntur sapiente nemo!",
  },
]);
</script>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
