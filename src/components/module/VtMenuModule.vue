<template>
  <section class="menu-module relative py-32">
    <div class="container w-xxl block m-auto text-center">
      <h2 class="capitalize text-center text-12 text-orange-500 font-abrilfatface leading-none mb-16 inline-block px-16 border-b-1 border-orange-500">Menu</h2>
      <VtMenuCard
        class="animate__animated animate__faster opacity-0"
        v-in-viewport="'animate__fadeInUp'"
        v-for="(menu, index) in menus"
        :key="index"
        :menu="menu"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import VtMenuCard from '@common/VtMenuCard'
export default {
  name: 'VtMenuModule',
  components: {
    VtMenuCard
  },
  computed: {
    ...mapState({
      menus: state => state.Menu.menus
    })
  },
  mounted () {
    this.$store.dispatch('Menu/getMenus')
  }
}
</script>
