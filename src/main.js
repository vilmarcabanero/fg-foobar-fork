import "./assets/style.css";
import 'aos/dist/aos.css';
import 'video.js/dist/video-js.css'
import 'vueperslides/dist/vueperslides.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'

import AOS from 'aos';
import  VueTypewriterEffect  from "vue-typewriter-effect";
import VideoPlayer from '@videojs-player/vue'



AOS.init({
  once: true,
});

const app = createApp(App);

app.use(router);
app.use(VideoPlayer);

app.component("vue-typewriter-effect", VueTypewriterEffect);

app.mount('#app');
