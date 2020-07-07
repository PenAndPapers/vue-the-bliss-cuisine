import reviews from '@data/reviews'
export const actions = {
  getReviews ({ commit }) {
    commit('SET_REVIEWS', reviews.data)
  }
}
