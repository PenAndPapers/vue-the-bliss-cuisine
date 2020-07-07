<template>
  <div class="home-module">
    <VtHeader
      :site-info="siteInfo"
      v-if="siteInfo"
    />
    <VtRecipeModule class="bg-appbg" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VtHeader from '@layout/VtHeader'
import VtRecipeModule from '@module/VtRecipeModule'

export default {
  name: 'VtHomeModule',
  components: {
    VtHeader,
    VtRecipeModule
  },
  computed: {
    ...mapState({
      siteInfo: state => state.SiteInfo.siteInfo
    })
  }
}
</script>
