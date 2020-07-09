import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import(/* webpackChunkName: "Menu" */ '../views/Menu.vue')
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: () => import(/* webpackChunkName: "Reviews" */ '../views/Reviews.vue')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import(/* webpackChunkName: "Gallery" */ '../views/Gallery.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

routes.beforeEach((to, from, next) => {
  const visitedRoutes = JSON.parse(window.localStorage.getItem('visitedRoutes')) || []
  if (!visitedRoutes.includes(to.name)) {
    visitedRoutes.push(to.name)
    window.localStorage.setItem('visitedRoutes', JSON.stringify(visitedRoutes))
  }
  next()
})

export default routes
