import about from '@data/about'
export const actions = {
  getAbout ({ commit }) {
    commit('SET_ABOUT', about.data)
  }
}
