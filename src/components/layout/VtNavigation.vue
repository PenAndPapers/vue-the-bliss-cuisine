<template>
  <nav
    id="navigation"
    class="fixed w-full z-20 text-center transition-all duration-500 leading-0 bg-appbg border-b-1 border-orange-500"
    :class="[$route.path !== '/' ? '' : 'bg-opacity-25']"
  >
    <div class="container w-xxl flex items-center m-auto">
      <div class="logo text-center">
        <a
          href="/"
          @click.stop.prevent="scrollTo('/')"
        >
          <span class="block uppercase leading-5 text-5 text-white font-abrilfatface">The Bliss</span>
          <hr class="border-t-1 border-white">
          <span class="block uppercase leading-5 text-5 text-white font-abrilfatface">Cuisine</span>
        </a>
      </div>
      <div class="menu flex-1 text-right">
        <a
          class="relative overflow-hidden relative h-full text-5 text-white font-light leading-none uppercase inline-block px-5 py-6 last:mr-0 hover:text-orange-500 transition-all duration-200"
          :class="[$route.name === link.name ? 'active' : '']"
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.url"
          @click.stop.prevent="scrollTo(link.url)"
        >
          {{ link.name }}
          <span class="line hidden m-auto transition-all duration-200 border-b-1 border-orange-500" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import ScrollTo from '@mixins/ScrollTo'
export default {
  name: 'VtNavigation',
  props: {
    navLinks: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      self: '',
      navH: '',
      reservationH: '',
      footerH: '',
      documentH: '',
      screenH: window.innerHeight,
      offSetTop: 70
    }
  },
  mixins: [ScrollTo],
  methods: {
    compareScrollYToElemHeights () {
      const reservationSection = document.querySelector('section.reservation')

      this.navH = this.self.offsetHeight
      this.reservationH = reservationSection ? reservationSection.offsetHeight : 0
      this.footerH = document.querySelector('footer').scrollHeight
      this.documentH = document.body.scrollHeight - (this.reservationH + this.footerH + this.navH + this.offSetTop)

      if (this.$route.path === '/') {
        if (window.scrollY >= this.screenH - this.navH) {
          this.changeNavBgColor(1)
        } else {
          this.changeNavBgColor(0)
        }
      }

      if (window.scrollY <= this.documentH) {
        this.showNav(1)
      } else {
        this.showNav(0)
      }
    },
    changeNavBgColor (state) {
      if (state) {
        this.self.classList.add('bg-opacity-100')
      } else {
        this.self.classList.remove('bg-opacity-100')
      }
    },
    showNav (state) {
      if (state) {
        this.self.classList.remove('hide')
      } else {
        this.self.classList.add('hide')
      }
    }
  },
  mounted () {
    this.self = this.$el
    window.addEventListener('scroll', this.compareScrollYToElemHeights)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.compareScrollYToElemHeights)
  }
}
</script>

<style scoped>
  nav.hide {
    margin-top: -78px;
  }
  .menu a.active {
    color: #dd6b20;
  }
  .menu a .line {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0%;
    display: block;
  }
  .menu a.active .line {
    width: 100%;
  }
  .menu a:hover .line {
    width: 100%;
    display: block;
  }
</style>
