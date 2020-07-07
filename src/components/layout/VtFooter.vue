<template>
  <footer class="relative z-20 pt-16 pb-1">
    <div class="container w-xxl block m-auto">
      <div class="grid grid-cols-3 gap-4 mb-8">
        <div class="site-map">
          <h2 class="text-left text-6 text-white font-abrilfatface mb-5 inline-block pr-16 border-b-1 border-white">Site Map</h2>
          <nav>
            <a
              class="block text-4 text-white font-light"
              v-for="(link, index) in navLinks"
              :key="index"
              :href="link.url"
              @click.stop.prevent="scrollTo(link.url)"
            >
              {{ link.name }}
            </a>
          </nav>
        </div>
        <div class="contact-social">
          <div class="contact mb-8">
            <h2 class="text-left text-6 text-white font-abrilfatface mb-5 inline-block pr-20 border-b-1 border-white">Contact</h2>
            <p class="text-4 text-white font-light">
              Email: <a :href="'mailto:'+ siteInfo.email">{{ siteInfo.email }}</a>
            </p>
            <p class="text-4 text-white font-light">
              Phone: <a :href="'tel:'+ siteInfo.phone">{{ siteInfo.phone }}</a>
            </p>
          </div>
          <div class="social">
            <h2 class="text-left text-6 text-white font-abrilfatface mb-5 inline-block pr-20 border-b-1 border-white">Follow us</h2>
            <div>
              <a
                class="inline-block mr-2 text-orange-500 hover:text-white"
                v-for="(social, index) in siteInfo.social_media"
                :key="index"
                :href="social.url"
                target="_blank"
              >
                <div class="flex items-center justify-center h-12 w-12 rounded-full bg-white hover:bg-orange-500">
                  <i class="fab text-6" :class="social.icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="location-schedule">
          <div class="location mb-8">
            <h2 class="text-left text-6 text-white font-abrilfatface mb-5 inline-block pr-20 border-b-1 border-white">Visit Us</h2>
            <p
              class="text-4 text-white font-light"
              v-for="(location, index) in siteInfo.location"
              :key="index"
            >
              {{ location }}
            </p>
          </div>
          <div class="schedule mb-8">
            <h2 class="text-left text-6 text-white font-abrilfatface mb-5 inline-block pr-20 border-b-1 border-white">Schedule</h2>
            <p
              class="text-4 text-white font-light"
              v-for="(time, index) in siteInfo.opening_hours"
              :key="index"
            >
              {{ time }}
            </p>
          </div>
        </div>
      </div>
      <hr class="border-t-1 border-white mb-1">
      <p class="copyright text-white text-3 font-light">
        Made 🖤 with Vue JS and Tailwind CSS
      </p>
    </div>
  </footer>
</template>

<script>
import ScrollTo from '@mixins/ScrollTo'
import navLinks from '@data/navLinks'
import siteInfo from '@data/siteInfo'
export default {
  name: 'VtFooter',
  data () {
    return {
      navLinks: navLinks.data,
      siteInfo: siteInfo.data,
      currentYear: new Date().getFullYear(),
      yearCreated: 2020
    }
  },
  mixins: [ScrollTo]
}
</script>
