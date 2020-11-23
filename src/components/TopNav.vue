<template>
  <nav class="h-20 fixed top-0 w-full bg-white">
    <div class="grid grid-cols-4">
      <div class="p-2">
        <g-link to="/" class="inline">
          <g-image src="~/assets/images/logo.png" height="62" width="62" />
        </g-link>
      </div>

      <div class="col-span-3 pr-7 pt-7">
        <div class="grid grid-cols-3 lg:pl-52">
          <top-nav-link to="/" title="About" />
          <top-nav-link to="/posts" title="Posts" />
          <top-nav-link to="/travels" title="Travels" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import TopNavLink from "./TopNavLink.vue";

export default {
  components: { TopNavLink },
};
</script>
