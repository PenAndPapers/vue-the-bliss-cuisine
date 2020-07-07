<template>
  <div
    class="slider bg-black relative h-full w-full overflow-hidden"
    v-if="images.length && images.length > 1"
  >
    <div class="slider__track h-full w-full relative">
      <div
        class="item bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 bottom-0"
        v-for="(image, index) in images"
        :key="index"
        :style="{'background-image': 'url('+ require('@/assets/images/'+ image) + ')', 'left': index * sliderWidth + 'px'}"
      />
    </div>
    <div class="slider__arrows flex items-center m-auto absolute top-0 bottom-0 left-0 right-0">
      <span
        class="lnr lnr-arrow-left flex-1 text-10 text-orange-500 font-thin pl-8 cursor-pointer hover:text-white"
        @click="setActiveSlide('left')"
      />
      <span
        class="lnr lnr-arrow-right flex-1 text-10 text-orange-500 text-right font-thin pr-8 cursor-pointer hover:text-white"
        @click="setActiveSlide('right')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtSlider',
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
      default: false
    }
  },
  data () {
    return {
      sliderTrack: '',
      sliderWidth: 0,
      activeSlideIndex: 0,
      intervalState: null
    }
  },
  methods: {
    measureSliderWidth () {
      this.sliderWidth = this.$el.clientWidth
    },
    slideItems () {
      this.sliderTrack.style.marginLeft = '-' + this.sliderWidth * this.activeSlideIndex + 'px'
    },
    setActiveSlide (direction) {
      if (direction && direction === 'left' && this.activeSlideIndex > 0) this.activeSlideIndex -= 1
      if (direction && direction === 'right' && this.activeSlideIndex < this.images.length - 1) this.activeSlideIndex += 1

      this.slideItems()
      clearInterval(this.intervalState)
    },
    autoSlide () {
      this.intervalState = setInterval(() => {
        if (this.activeSlideIndex < this.images.length - 1) this.activeSlideIndex += 1
        this.slideItems()
      }, this.interval)
    }
  },
  mounted () {
    this.sliderTrack = this.$el.children[0]
    this.measureSliderWidth()
    if (this.autoPlay) this.autoSlide()
  }
}
</script>

<style scoped>
.slider__track {
    display: grid;
    grid-template-columns: repeat(1000,1fr);
    grid-auto-rows: 1fr;
    grid-gap: 0px;
    width: 100%;
    margin-left: 0;
    transition: margin .5s;
}
</style>
