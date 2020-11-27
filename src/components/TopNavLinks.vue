<template>
  <div>
    <top-nav-link to="/" title="About" />
    <top-nav-link to="/posts" title="Posts" />
    <top-nav-link to="/travels" title="Travels" />

    <div class="block text-center p-2 sm:inline-block">
      <a class="inline-block p-3 sm:p-2" href="mailto:contact@mustardamus.com">
        <icon-mail width="18" height="18" />
      </a>

      <a
        class="inline-block p-3 sm:p-2"
        href="https://twitter.com/mustardamus"
        target="_blank"
      >
        <icon-twitter width="18" height="18" />
      </a>

      <a
        class="inline-block p-3 sm:p-2"
        href="https://instagram.com/mustardamus"
        target="_blank"
      >
        <icon-instagram width="18" height="18" />
      </a>
    </div>
  </div>
</template>

<script>
import TopNavLink from "./TopNavLink.vue";
import IconMail from "./icons/Mail.vue";
import IconTwitter from "./icons/Twitter.vue";
import IconInstagram from "./icons/Instagram.vue";

export default {
  components: { TopNavLink, IconMail, IconTwitter, IconInstagram },
};
</script>
