<template>
  <figure class="masonry-card relative bg-black">
    <img
      :src="require('@/assets/images/'+ item.image)"
      :alt="item.name"
      @load="loadImage"
    />
    <div
      class="social-share absolute top-0 bottom-0 left-0 right-0 bg-transparent hover:bg-black hover:bg-opacity-50 transition-all duration-500"
      @mouseover="isShowSocialIcons = true"
      @mouseleave="isShowSocialIcons = false"
    >
      <div class="absolute bottom-4 right-4">
        <i
          class="fab fa-facebook-f text-6 text-white cursor-pointer block mb-3"
          :class="[isShowSocialIcons ? 'block' : 'hidden']"
        />
        <i
          class="fab fa-twitter text-6 text-white cursor-pointer block mb-3"
          :class="[isShowSocialIcons ? 'block' : 'hidden']"
        />
        <i class="fas fa-paper-plane text-6 text-white cursor-pointer block mb-3"
          :class="[isShowSocialIcons ? 'block' : 'hidden']"
        />
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'VtMasonryCard',
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data () {
    return {
      isImageLoaded: false,
      isShowSocialIcons: false
    }
  },
  methods: {
    loadImage () {
      if (this.$el.children[0].height && this.$el.children[0].width) {
        setTimeout(() => {
          this.isImageLoaded = true
        }, 200)
      }
    }
  }
}
</script>
