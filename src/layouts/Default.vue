<template>
  <div>
    <top-nav />

    <div class="container mx-auto mt-36">
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
