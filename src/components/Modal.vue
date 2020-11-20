<template>
  <div
    v-show="isActive"
    class="fixed z-8 inset-0 overflow-y-auto cursor-pointer"
    @click="close"
  >
    <div
      class="flex items-start h-screen min-h-screen justify-center text-center sm:p-5"
    >
      <img
        :src="thumbPath"
        class="z-10 w-full max-w-screen-lg thumb"
        v-show="isLoading"
      />

      <img
        ref="distImg"
        :src="distPath"
        class="z-10 w-full max-w-screen-lg rounded-lg shadow-2xl"
        v-show="!isLoading"
      />
    </div>

    <div class="absolute z-9 inset-0 bg-black opacity-75"></div>
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
