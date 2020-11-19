<template>
  <layout>
    <div>
      <h1 class="text-6xl" v-html="$page.travel.city" />
      <h2 class="text-4x1" v-html="$page.travel.country" />

      <g-link to="/travels/">Back to all cities</g-link>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <div v-for="picture in $page.travel.pictures" :key="picture.dist">
        <img
          :src="picture.thumb"
          @click="open(picture)"
          class="w-full cursor-pointer"
        />
      </div>
    </div>

    <modal
      :isActive="isModalActive"
      :thumbPath="currentPictureThumb"
      :distPath="currentPictureDist"
      @close="close"
    />
  </layout>
</template>

<page-query>
query ($id: ID!) {
  travel(id: $id) {
    city
    country
    pictures {
      thumb
      dist
    }
  }
}
</page-query>

<script>
import Modal from "~/components/Modal.vue";

export default {
  components: { Modal },

  metaInfo() {
    return {
      title: this.$page.travel.city,
    };
  },

  data() {
    return {
      isModalActive: false,
      currentPictureDist: null,
      currentPictureThumb: null,
    };
  },

  methods: {
    open(picture) {
      this.currentPictureDist = picture.dist;
      this.currentPictureThumb = picture.thumb;
      this.isModalActive = true;
    },

    close() {
      this.isModalActive = false;
    },
  },
};
</script>
