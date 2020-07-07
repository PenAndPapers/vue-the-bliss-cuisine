export const actions = {
  updateModalContent ({ commit }, favorite) {
    commit('UPDATE_MODAL_CONTENT', favorite)
  },
  updateModalState ({ commit }, modalState) {
    if (modalState) {
      commit('UPDATE_MODAL_STATE', modalState)
    }
  }
}
