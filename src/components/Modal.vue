<template>
  <div v-show="isActive" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-40 text-center sm:block sm:p-0"
      >
        <div
          class="absolute inset-0 bg-black opacity-90 cursor-pointer"
          @click="close"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          class="inline-block overflow-hidden transform transition-all cursor-pointer lg:max-w-screen-lg sm:my-8 sm:align-middle sm:max-w-screen-sm sm:w-full shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          @click="close"
        >
          <img :src="thumbPath" class="w-full thumb" v-show="isLoading" />

          <img
            :src="distPath"
            class="w-full"
            ref="distImg"
            v-show="!isLoading"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },

    thumbPath: {
      type: String,
      default: "",
    },

    distPath: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isLoading: false,
    };
  },

  watch: {
    isActive(isActive) {
      if (isActive) {
        this.isLoading = true;
      }
    },
  },

  mounted() {
    this.$refs.distImg.addEventListener("load", () => {
      this.isLoading = false;
    });
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.thumb {
  filter: blur(10px);
}
</style>
