<template>
  <div>
    <top-nav />

    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import TopNav from "~/components/TopNav.vue";

export default {
  components: { TopNav },
};
</script>
