<template>
  <GoogleMap
    :api-key="apiKey"
    style="width: 100%; height: 100%"
    :center="{ lat, lng }"
    :zoom="15"
  >
    <Marker :options="{ position: { lat, lng } }" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      lat: 14.642623,
      lng: 121.0374348,
      apiKey: "AIzaSyDjWLVzrMLZom2t3lbJuL4Z8ZjTTiH2EsI",
    };
  },
};
</script>
