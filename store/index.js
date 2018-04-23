import api from '~/util/api.config'

export const state = () => ({
  sidebar: false,
  option: {},
  breadcrumbs: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  SET_OPTION: (state, option) => state.option = option,
  SET_BREADCRUMBS: (state, items) => state.breadcrumbs = items
}

export const actions = {

  async nuxtServerInit ({ commit }, { req }) {
    let data = await this.$axios.$get(api.client.index())
    let catelogs = await this.$axios.$get(api.catelogs.index())
    commit('SET_OPTION', data)
    commit('catelogs/SET_CATELOGS', catelogs)
  },

  async client (ctx) {
    let data = await this.$axios.$get(api.client.index())
    return data
  },
  async body (ctx, queryBuild = {}) {
    let data = await this.$axios.$get(api.client.body(), {
      params: queryBuild
    })
    return data
  },
  async posts (ctx, queryBuild = {}) {
    let data = await this.$axios.$get(api.client.posts(), {
      params: queryBuild
    })
    return data
  },
  async byCatelog (ctx, queryBuild = {}) {
    let data = await this.$axios.$get(api.client.byCatelog(), {
      params: queryBuild
    })
    return data
  }
}

export const getters = {
  options: state => state.option,
  breadcrumbs: state => state.breadcrumbs
}
