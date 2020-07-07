import recipes from '@data/recipe'
export const actions = {
  getRecipes ({ commit }) {
    commit('SET_RECIPES', recipes.data)
  }
}
