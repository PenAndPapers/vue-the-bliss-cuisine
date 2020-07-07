import menu from '@data/menu'
export const actions = {
  getMenus ({ commit }) {
    commit('SET_MENUS', menu.data)
  },
  getMenu ({ commit }) {
    commit('SET_MENUS', menu)
  }
}
