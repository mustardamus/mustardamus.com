<template>
  <layout>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <div v-for="edge in $page.travels.edges" :key="edge.node.city">
        <g-link :to="cityLink(edge)">
          <img :src="`/${edge.node.cover}`" class="w-full" />
          <span class="block text-center text-2xl">{{ edge.node.city }}</span>
          <span class="block text-center">
            View {{ edge.node.pictures.length }} Pictures
          </span>
        </g-link>
      </div>
    </div>
  </layout>
</template>

<page-query>
query {
  travels: allTravel {
    edges {
      node {
        country
        city
        cover
        pictures {
          thumb
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Travel Pictures",
  },

  methods: {
    cityLink(edge) {
      return `/travels/${edge.node.city.toLowerCase()}/`;
    },
  },
};
</script>
