import navLinks from '@data/navLinks'
export const actions = {
  getNavlinks ({ commit }) {
    commit('SET_NAV_LINKS', navLinks.data)
  }
}
