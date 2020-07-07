import siteInfo from '@data/siteInfo'
export const actions = {
  getSiteInfo ({ commit }) {
    commit('SET_SITE_INFO', siteInfo.data)
  }
}
