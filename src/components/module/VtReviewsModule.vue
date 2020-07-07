<template>
  <section class="reviews-module relative py-32">
    <div
      class="container w-xxl block m-auto text-center"
      v-if="reviews"
    >
      <h2 class="text-center text-12 text-orange-500 font-abrilfatface leading-none mb-16 inline-block px-16 border-b-1 border-orange-500">Reviews</h2>
      <div class="masonry column-3 gap-12">
        <VtReviewCard
          class="mb-12  animate__animated animate__faster opacity-0"
          v-in-viewport="'animate__fadeInUp'"
          v-for="(review, index) in reviews"
          :key="index"
          :review="review"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import VtReviewCard from '@common/VtReviewCard'
export default {
  name: 'VtReviewsModule',
  components: {
    VtReviewCard
  },
  computed: {
    ...mapState({
      reviews: state => state.Reviews.reviews
    })
  },
  mounted () {
    this.$store.dispatch('Reviews/getReviews')
  }
}
</script>
