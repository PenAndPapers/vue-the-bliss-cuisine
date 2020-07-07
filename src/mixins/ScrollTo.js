export default {
  methods: {
    scrollTo (id) {
      const navHeight = document.querySelector('nav').offsetHeight
      const section = document.getElementById(id)

      // scroll to home page section
      if (section) {
        const scrollY = section.getBoundingClientRect().top + window.pageYOffset - navHeight
        window.scrollTo({ top: scrollY })
        return
      }

      // when id is the same as current route path
      // move to other section
      if (id.indexOf('/') > -1 && this.$route.path === id) {
        return window.scrollTo({ top: 0 })
      }

      // when id is not equal to current route path
      // redirect to other pages
      if (id.indexOf('/') > -1 && this.$route.path !== id) {
        return this.$router.push({ path: id })
      }
    }
  }
}
