<template>
  <div class="slider block m-auto bg-black h-screen">
    <div
      v-for="(image, index) in images"
      :key="index"
      :style="{'background-image': `url(${require('@/assets/images/'+ image)}`}"
      class="item bg-no-repeat bg-center absolute top-0 bottom-0 left-0 right-0 h-full w-full block m-auto transition-opacity dureation duration-1000 ease-linear"
      :class="[index > 0 ? 'opacity-0' : 'opacity-1']"
    />
    <div class="indicators absolute bottom-6 left-0 right-0 text-center block m-auto z-30">
      <div
        class="rounded-full border-2 border-white mx-1 h-3 w-3 cursor-pointer inline-block"
        :class="[activeSlideIndex === index ? 'bg-white' : 'transparent']"
        v-for="(image, index) in images"
        :key="index"
        @click="setActiveSlide(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtSliderFade',
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true
    },
    interval: {
      type: Number,
      default: 7000
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    mousePosition: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      slides: [],
      activeSlideIndex: 0,
      intervalState: null,
      posX: 0,
      posY: 0
    }
  },
  watch: {
    mousePosition: {
      handler (newVal, oldVal) {
        this.moveBackground(newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    moveBackground (mousePosition) {
      this.slides.forEach(slide => {
        slide.style.backgroundPosition = mousePosition.x + 'px ' + mousePosition.y + 'px'
      })
    },
    setActiveSlide (index) {
      this.animateSlider(index)
      clearInterval(this.intervalState)
    },
    autoChange () {
      this.intervalState = setInterval(() => {
        this.animateSlider()
      }, this.interval)
    },
    animateSlider (index = null) {
      this.$el.children[this.activeSlideIndex].classList.remove('opacity-1')
      this.$el.children[this.activeSlideIndex].classList.add('opacity-0')

      if (index !== null) {
        this.activeSlideIndex = index
      } else {
        this.activeSlideIndex = (this.activeSlideIndex !== this.$el.children.length - 2) ? this.activeSlideIndex + 1 : 0
      }

      this.$el.children[this.activeSlideIndex].classList.remove('opacity-0')
      this.$el.children[this.activeSlideIndex].classList.add('opacity-1')
    },
    translate3dBG () {
      window.addEventListener('scroll', () => {
        this.slides.forEach(slide => {
          slide.style.transform = `translate3d(${window.scrollX}px, -${window.scrollY / 4}px, 0)`
        })
      })
    }
  },
  mounted () {
    const slides = Array.from(this.$el.children)
    slides.pop()
    this.slides = slides
    this.translate3dBG()
    if (this.autoPlay) this.autoChange()
  }
}
</script>

<style scoped>
.slider div{
  transform: perspective(100px) translate3d(0px, 0px, 0px);
}
.slider::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
}
</style>
