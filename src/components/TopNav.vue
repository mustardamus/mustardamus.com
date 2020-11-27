<template>
  <nav class="h-14 fixed top-0 w-full bg-blue-300">
    <div class="grid grid-cols-2">
      <div class="pt-2 pl-2">
        <g-link to="/">
          <g-image
            src="~/assets/images/logo.png"
            height="62"
            width="62"
            class="h-10 w-10 inline"
          />

          <span class="pl-2 font-bold">Mustardamus</span>
        </g-link>
      </div>

      <div class="text-right">
        <a
          class="w-13 h-13 inline-block cursor-pointer mt-4 mr-4 sm:hidden"
          @click="onBurgerClick"
        >
          <icon-menu v-show="!isMenuActive" />
          <icon-minimize v-show="isMenuActive" />
        </a>

        <top-nav-links class="hidden sm:inline-block" />
      </div>
    </div>

    <top-nav-links
      class="bg-blue-300 fixed top-14 block w-full"
      style="box-shadow: 0 10px 5px rgba(0, 0, 0, 0.7)"
      v-show="isMenuActive"
    />
  </nav>
</template>

<script>
import IconMenu from "./icons/Menu.vue";
import IconMinimize from "./icons/Minimize.vue";
import TopNavLinks from "./TopNavLinks.vue";
import TopNavLink from "./TopNavLink.vue";

export default {
  components: { IconMenu, IconMinimize, TopNavLinks },

  data() {
    return {
      isMenuActive: false,
    };
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMenuActive = false;
    });
  },

  methods: {
    onBurgerClick() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>
