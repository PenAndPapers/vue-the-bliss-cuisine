<template>
  <article
    class="flex items-center animate__animated animate__faster opacity-0 bg-gray-1000"
    v-in-viewport="'animate__fadeInUp'"
  >
    <div class="flex-1 bg-white w-1/2 h-100 relative overflow-hidden">
      <div
        class="bg-white bg-cover bg-center bg-no-repeat absolute top-0 bottom-0 left-0 right-0"
        :style="{'background-image': 'url('+ require('@/assets/images/'+ detail.image_url[0]) + ')'}"
        v-if="detail.image_url.length && detail.image_url.length === 1"
      />
      <VtSlider
        :images="detail.image_url"
        v-if="detail.image_url.length && detail.image_url.length > 1"
      />
    </div>
    <div class="flex-1">
      <div :class="[index % 2 ? 'pl-0 pr-16' : 'pl-16 pr-0 text-right']">
        <h2
          class="text-8 text-white font-abrilfatface inline-block border-b-1 border-appbg"
          :class="[index % 2 ? 'pl-0 pr-16' : 'pl-16 pr-0 text-right']"
        >
          {{ detail.name }}
        </h2>
        <p class="mb-6 text-5 text-white font-light">
          {{ detail.role }}
        </p>
        <div
          class="wysiwyg text-4 text-white font-light"
          v-html="detail.description"
        />
      </div>
    </div>
  </article>
</template>

<script>
import VtSlider from '@common/VtSlider'
export default {
  name: 'VtAboutCard',
  props: {
    detail: {
      type: Object,
      default: () => {},
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {
    VtSlider
  }
}
</script>
