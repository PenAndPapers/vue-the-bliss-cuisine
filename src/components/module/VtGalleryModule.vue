<template>
  <section class="gallery-module relative py-32">
    <div
      class="container w-xxl block m-auto text-center"
      v-if="gallery"
    >
      <h2 class="text-center text-12 text-orange-500 font-abrilfatface leading-none mb-16 inline-block px-16 border-b-1 border-orange-500">Gallery</h2>
      <div class="masonry column-3">
        <VtMasonryCard
          class="animate__animated animate__fast opacity-0"
          v-in-viewport="'animate__fadeInUp'"
          v-for="(item, index) in gallery"
          :key="index" :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import VtMasonryCard from '@common/VtMasonryCard'
export default {
  name: 'VtGalleryModule',
  components: {
    VtMasonryCard
  },
  computed: {
    ...mapState({
      gallery: state => state.Gallery.gallery
    })
  },
  mounted () {
    this.$store.dispatch('Gallery/getGallery')
  }
}
</script>
