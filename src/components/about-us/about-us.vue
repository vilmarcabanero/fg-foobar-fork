<template>
   <div class="w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto grid grid-cols-12 items-center gap-6 py-12">
    <div style="z-index: 999" class="col-span-12 lg:col-span-6 sm:text-left">
      <p class="text-[20px] text-gray-700 leading-10 font-semibold">
        <span class="text-3xl md:text-4xl font-semibold barlow-condensed text-red-color"
          >Flameguard Fire Protection Inc.</span
        >
        provides unparalleled fire protection services in the Philippines at highly
        competitive rates. Our unwavering dedication to excellence guarantees our clients
        the most practical and efficient solutions. You can trust that our services are
        unmatched and will undoubtedly exceed your expectations.
      </p>
    </div>

    <!-- START OF VIDEO WRAPPER -->
    <div class="col-span-12 lg:col-span-6 w-full">
      <span class="relative">
        <video-player
          ref="videoPlayer"
          class="overflow-hidden rounded-xl h-[250px] sm:h-[300px] md:h-[370px] lg:h-[300px] w-full md:w-3/4 lg:w-full mx-auto"
          :options="playerOptions"
        />
        <div class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" @click="toggleFullscreen">
          <FontAwesomeIcon
            class="text-white cursor-pointer bg-black px-4 sm:px-6 text-[40px] sm:text-[50px]"
            :icon="['fas', 'caret-right']"
          />
        </div>
      </span>
    </div>
    <!-- END OF VIDEO WRAPPER -->
  </div>
</template>

<script>
import videoSource from "@/assets/videos/video.mp4";
import Button from "../../global-components/ButtonComponent.vue";
export default {
  components: {
    Button,
  },

  data() {
    return {
      playerOptions: {
        sources: [
          {
            src: videoSource,
            type: "video/mp4",
          },
        ],
        muted: true,
        controls: false,
        loop: true,
        volume: 1,
        autoplay: true,
      },
    };
  },

  methods: {
    toggleFullscreen() {
      const videoElement = this.$refs.videoPlayer.$el.querySelector("video");

      if (videoElement.requestFullscreen) {
        if (!document.fullscreenElement) {
          videoElement.requestFullscreen();
          videoElement.muted = false;
        } else {
          document.exitFullscreen();
        }
      } else if (videoElement.mozRequestFullScreen) {
        if (!document.mozFullScreenElement) {
          videoElement.mozRequestFullScreen();
          videoElement.muted = false;
        } else {
          document.mozCancelFullScreen();
        }
      } else if (videoElement.webkitRequestFullscreen) {
        if (!document.webkitFullscreenElement) {
          videoElement.webkitRequestFullscreen();
          videoElement.muted = false;
        } else {
          document.webkitExitFullscreen();
        }
      } else if (videoElement.msRequestFullscreen) {
        if (!document.msFullscreenElement) {
          videoElement.msRequestFullscreen();
          videoElement.muted = false;
        } else {
          document.msExitFullscreen();
        }
      }
      // Add event listener for fullscreenchange event
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.addEventListener("mozfullscreenchange", handleFullscreenChange);
      document.addEventListener("MSFullscreenChange", handleFullscreenChange);

      // Function to handle fullscreenchange event
      function handleFullscreenChange() {
        if (
          !document.fullscreenElement &&
          !document.webkitFullscreenElement &&
          !document.mozFullScreenElement &&
          !document.msFullscreenElement
        ) {
          // Video is not in fullscreen mode, mute the video
          videoElement.volume = 0;
        } else {
          // Video is in fullscreen mode, unmute the video
          videoElement.volume = 1;
        }
      }

      this.restartVideo();
    },

    restartVideo() {
      const videoElement = this.$refs.videoPlayer.$el.querySelector("video");
      videoElement.currentTime = 0;
      videoElement.play();
    },
  },
};
</script>

<style scoped>
.asd {
  color: #5d5959;
}
</style>
