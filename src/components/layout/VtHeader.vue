<template>
  <header
    class="relative z-0 bg-black h-screen flex flex-col items-center justify-center overflow-hidden"
    @mousemove="getMousePostion"
  >
    <VtBanner
      class="fixed z-10"
      :site-info="siteInfo"
    />
    <VtSliderFade
      class="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-0"
      :images="siteInfo.slider_images"
      :mouse-position="mousePosition"
    />
  </header>
</template>

<script>
import VtBanner from '@common/VtBanner'
import VtSliderFade from '@common/VtSliderFade'
export default {
  name: 'VtHeader',
  props: {
    siteInfo: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    VtBanner,
    VtSliderFade
  },
  data () {
    return {
      mousePosition: { x: 0, y: 0 }
    }
  },
  methods: {
    getMousePostion ($event) {
      this.mousePosition = {
        x: $event.pageX * -1 / 150,
        y: $event.pageY * -1 / 150
      }
    }
  }
}
</script>
