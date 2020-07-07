
import gallery from '@data/gallery'
export const actions = {
  getGallery ({ commit }) {
    commit('SET_GALLERY', gallery.data)
  }
}
