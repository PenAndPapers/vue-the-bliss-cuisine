<template>
  <VtFooter
    class="bg-appbg"
    :site-info="siteInfo"
    :site-map="navLinks"
    v-if="siteInfo && navLinks"
  />
</template>

<script>
import { mapState } from 'vuex'
import VtFooter from '@layout/VtFooter'
export default {
  name: 'VtFooterModule',
  components: {
    VtFooter
  },
  computed: {
    ...mapState({
      navLinks: state => state.Navigation.navLinks,
      siteInfo: state => state.SiteInfo.siteInfo
    })
  },
  mounted () {
    this.$store.dispatch('SiteInfo/getSiteInfo')
  }
}
</script>
