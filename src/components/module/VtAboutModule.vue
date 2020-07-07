<template>
  <section class="about-module relative py-32">
    <div class="container w-xxl block m-auto text-center" v-if="about">
      <h2 class="text-center text-12 text-orange-500 font-abrilfatface leading-none mb-16 inline-block px-16 border-b-1 border-orange-500">About</h2>
      <VtAboutCard
        class="text-left"
        v-for="(detail, index) in about.details"
        :key="index"
        :class="[(index % 2) ? 'flex-row-reverse' : '']"
        :index="index"
        :detail="detail"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import VtAboutCard from '@common/VtAboutCard'
export default {
  name: 'VtAboutCardModule',
  components: {
    VtAboutCard
  },
  computed: {
    ...mapState({
      about: state => state.About.about
    })
  },
  mounted () {
    this.$store.dispatch('About/getAbout')
  }
}
</script>
