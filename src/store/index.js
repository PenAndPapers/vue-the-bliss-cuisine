import Vue from 'vue'
import Vuex from 'vuex'

import { About } from './About'
import { Favorites } from './Favorites'
import { Gallery } from './Gallery'
import { Menu } from './Menu'
import { Modal } from './Modal'
import { Navigation } from './Navigation'
import { Recipe } from './Recipe'
import { Reviews } from './Reviews'
import { SiteInfo } from './SiteInfo'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    About,
    Favorites,
    Gallery,
    Menu,
    Modal,
    Navigation,
    Recipe,
    Reviews,
    SiteInfo
  }
})
