<template>
  <Vtnavigation
    :nav-links="navLinks"
    v-if="navLinks"
  />
</template>

<script>
import { mapState } from 'vuex'
import Vtnavigation from '@layout/VtNavigation'
export default {
  name: 'VtNavigationModule',
  components: {
    Vtnavigation
  },
  computed: {
    ...mapState({
      navLinks: state => state.Navigation.navLinks
    })
  },
  mounted () {
    this.$store.dispatch('Navigation/getNavlinks')
  }
}
</script>
