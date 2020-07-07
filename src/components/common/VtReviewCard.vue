<template>
  <article class="review-card relative z-10">
    <p class="text-left text-white text-4 leading-7 font-light mb-6">
      <span class="block">
        <i class="font-abrilfatface text-8 text-orange-500 leading-0">&ldquo;</i>
        {{ review.message }}
        <i class="font-abrilfatface text-8 text-orange-500 leading-0">&rdquo;</i>
      </span>
      <i
        class="fa fa-star text-3 text-red-600 mr-1"
        v-for="(star, index) in review.star"
        :key="index"
      /> - <span class="text-3 text-orange-500 font-normal">{{ review.name }}</span>
    </p>
  </article>
</template>

<script>
export default {
  name: 'VtReviewCard',
  props: {
    review: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style scoped>
.review-card {
  -webkit-column-break-inside: avoid;
}
.review-card:after {
  content: '';
  display: block;
}
</style>
