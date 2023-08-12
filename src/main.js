import "./assets/style.css";
import 'aos/dist/aos.css';
import 'video.js/dist/video-js.css'
import 'vueperslides/dist/vueperslides.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import AOS from 'aos';
import  VueTypewriterEffect  from "vue-typewriter-effect";
import VideoPlayer from '@videojs-player/vue'

import { 
  faSearch, 
  faPhone, 
  faPhoneVolume,
  faLocationDot,
  faCircleCheck,
  faCaretRight,
  faArrowRight,
  faCaretDown,
  faCaretUp,
  faQuoteLeft,
  faQuoteRight,
  faEnvelope,
  faChevronRight,
  faStar,
  faCheck,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { 
  faSquareFacebook, 
  faSquareYoutube, 
  faSquareInstagram, 
  faLinkedin,
  faTiktok,
 } from '@fortawesome/free-brands-svg-icons';

library.add(
  faSearch, 
  faPhone, 
  faPhoneVolume,
  faLocationDot,
  faCircleCheck,
  faCaretRight,
  faArrowRight,
  faCaretDown,
  faCaretUp,
  faQuoteLeft,
  faQuoteRight,
  faEnvelope,
  faChevronRight,
  faStar,
  faCheck,
  faBars,
  faXmark,
  faSquareFacebook, 
  faSquareYoutube, 
  faSquareInstagram,  
  faLinkedin,
  faTiktok,
)

AOS.init({
  once: true,
});

const app = createApp(App);

app.use(router);
app.use(VideoPlayer);


app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component("vue-typewriter-effect", VueTypewriterEffect);

app.mount('#app');
