import { createRouter, createWebHashHistory } from "vue-router";

// START OF ABOVE HEADER LINKS
import Home from "../pages/home.vue";
import AboutUs from "../pages/about-us.vue";
import ProductsAndServices from "../pages/products-&-services.vue";
import Testimonials from "../pages/testimonials.vue";
import Careers from "../pages/careers.vue";
import CustomerSurvey from "../pages/customer-survey.vue";
import ContactUs from "../pages/contact-us.vue";

import PreventiveMaintenanceEbook from "../pages/free-resources/preventive-maintenance-ebook/index.vue";
import Blogs from "../pages/free-resources/blogs/index.vue";
import Blog from "../pages/free-resources/blog/index.vue";
import Videos from "../pages/free-resources/videos/index.vue";
// END OF ABOVE HEADER LINKS

// START OF BOTTOM HEADER LINKS
import InspectionTestingAndMaintenance from "../pages/fire-sprinkler-&-suppression/inspection-testing-&-maintenance/index.vue";
import DesignAndInstallation from "../pages/fire-sprinkler-&-suppression/design-&-installation/index.vue";
import StandpipeAndHoseSystem from "../pages/fire-sprinkler-&-suppression/standpipe-&-hose-system/index.vue";
import FireHydrant from "../pages/fire-sprinkler-&-suppression/fire-hydrant/index.vue";
import FirePumps from "../pages/fire-sprinkler-&-suppression/fire-pumps/index.vue";
import DelugeAndPreaction from "../pages/fire-sprinkler-&-suppression/deluge-&-preaction/index.vue";
import FoamExtinguishingSystem from "../pages/fire-sprinkler-&-suppression/foam-extinguishing-system/index.vue";

import InspectionTestingAndMaintenanceFireAlarm from "../pages/fire-alarms/inspection-testing-&-maintenance/index.vue";
import DesignAndInstallationFireAlarm from "../pages/fire-alarms/design-&-installation/index.vue";

import CleanAgentExtinguishingSystem from "../pages/clean-agent-extinguishing-system/index.vue";

import OtherServices from "../pages/special-hazards/index.vue"
// END OF BOTTOM HEADER LINKS

const routes = [
  // START OF ABOVE HEADER LINKS
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/about-us",
    name: "About Us",
    component: AboutUs
  },

  {
    path: "/products-&-services",
    name: "Products and Services",
    component: ProductsAndServices
  },

  {
    path: "/free-resources/blogs",
    name: "Blogs",
    component: Blogs
  },

  {
    path: "/free-resources/blogs/:id",
    name: "Blog",
    component: Blog
  },

  {
    path: "/free-resources/videos",
    name: "Videos",
    component: Videos
  },

  {
    path: "/free-resources/preventive-maintenance-ebook",
    name: "Preventive Maintenance Ebook",
    component: PreventiveMaintenanceEbook
  },

  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials
  },

  {
    path: "/careers",
    name: "Careers",
    component: Careers
  },

  {
    path: "/customer-survey",
    name: "Customer Survey",
    component: CustomerSurvey
  },


  {
    path: "/contact-us",
    name: "Contact Us",
    component: ContactUs
  },
  // END OF ABOVE HEADER LINKS


  // START OF BOTTOM HEADER LINKS
  {
    path: "/inspection-testing-&-maintenance",
    name: "Inspection Testing and Maintenance",
    component: InspectionTestingAndMaintenance
  },

  {
    path: "/design-&-installation",
    name: "Design and Installation",
    component: DesignAndInstallation
  },

  {
    path: "/standpipe-&-hose-system",
    name: "Stand Pipe and Hose System",
    component: StandpipeAndHoseSystem
  },

  {
    path: "/fire-hydrant",
    name: "Fire Hydrant",
    component: FireHydrant
  },

  {
    path: "/fire-pumps",
    name: "Fire Pumps",
    component: FirePumps
  },

  {
    path: "/deluge-&-preaction",
    name: "Deluge and Preaction",
    component: DelugeAndPreaction
  },

  {
    path: "/foam-extinguishing-system",
    name: "Foam Entinguishing System",
    component: FoamExtinguishingSystem
  },

  {
    path: "/inspection-testing-&-maintenance-fire-alarm",
    name: "Inspection Testing and Maintenance Fire Alarm",
    component: InspectionTestingAndMaintenanceFireAlarm
  },

  {
    path: "/design-&-installation-fire-alarm",
    name: "Design and Installation Fire Alarm",
    component: DesignAndInstallationFireAlarm
  },

  {
    path: "/clean-agent-extinguishing-system",
    name: "Clean Agent Extinguishing System",
    component: CleanAgentExtinguishingSystem
  },

  {
    path: "/special-hazards/kitchen-fire-suppression",
    name: "Kitchen Fire Suppression",
    component: OtherServices
  },

  {
    path: "/special-hazards/aerosol-fire-suppression",
    name: "Aerosol Fire Suppression",
    component: OtherServices
  },

  {
    path: "/special-hazards/water-mist-fire-suppression-system",
    name: "Water Mist Fire Suppression System",
    component: OtherServices
  },

  {
    path: "/special-hazards/fire-extinguishers",
    name: "Fire Extinguishers",
    component: OtherServices
  },
  // END OF BOTTOM HEADER LINKS


];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    }
  }
});

export default router;