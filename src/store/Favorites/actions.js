import favorites from '@data/favorites'
export const actions = {
  getFavorites ({ commit }) {
    commit('SET_FAVORITES', favorites.data)
  }
}
