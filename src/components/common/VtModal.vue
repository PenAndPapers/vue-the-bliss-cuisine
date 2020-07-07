<template>
  <div
    class="modal w-full h-full max-h-screen flex items-center justify-center ransition-all duration-1000"
    v-if="favorite"
  >
    <div class="container w-lg block m-auto relative z-10 bg-black">
      <div
        class="close-modal flex items-center justify-center text-3 absolute top-0 right-0 bg-black -mt-2 -mr-2 h-6 w-6 cursor-pointer"
        @click="noScroll(0)"
      >X</div>
      <div class="grid grid-cols-12 gap-4 p-12 h-modal overflow-y-auto" >
        <article class="content col-span-12">
          <h2 class="font-abrilfatface text-6">{{ favorite.title }}</h2>
          <hr class="my-8">
          <p>{{ favorite.description }}</p>
          <hr class="my-8">
          <div class="masonry column-3 pb-12" style="">
            <VtMasonryCard
              v-for="(image, index) in favorite.images"
              :key="index"
              :item="{
                image: image,
                title: favorite.title,
                name: favorite.title
              }"
            />
          </div>
        </article>
      </div>
    </div>
    <div
      class="back-drop absolute z-0 top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-75"
      @click="noScroll(0)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VtMasonryCard from '@common/VtMasonryCard'
export default {
  name: 'VtModal',
  components: {
    VtMasonryCard
  },
  computed: {
    ...mapState({
      favorite: state => state.Modal.favorite
    })
  },
  watch: {
    favorite: {
      handler (newVal, oldVal) {
        const scrollState = (newVal) ? 1 : 0
        this.noScroll(scrollState)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    noScroll (state) {
      const body = document.querySelector('body')
      if (state) {
        body.classList.add('h-full', 'overflow-hidden')
      } else {
        body.classList.remove('h-full', 'overflow-hidden')
        this.removeFavorite()
      }
    },
    removeFavorite () {
      this.$store.dispatch('Modal/updateModalContent', null)
    }
  }
}
</script>
