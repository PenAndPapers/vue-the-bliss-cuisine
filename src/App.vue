<template>
  <div
    id="app"
    class="overflow-x-hidden bg-appbg"
  >
    <VtNavigationModule />
    <main class="min-h-screen">
      <transition
        appear
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </main>
    <VtReservation />
    <VtFooterModule />
    <VtModal class="fixed z-30 top-0 bottom-0 left-0 right-0" />
  </div>
</template>

<script>
import VtNavigationModule from '@module/VtNavigationModule'
import VtReservation from '@layout/VtReservation'
import VtFooterModule from '@module/VtFooterModule'
import VtModal from '@common/VtModal'
export default {
  name: 'App',
  components: {
    VtNavigationModule,
    VtReservation,
    VtFooterModule,
    VtModal
  },
  data () {
    return {
      routeName: ''
    }
  },
  watch: {
    '$route': {
      handler (newVal, oldVal) {
        this.routeName = newVal.name
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
