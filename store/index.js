import api from '~/util/api.config'

export const state = () => ({
  sidebar: false,
  option: {}
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  SET_OPTION: (state, option) => state.option = option
}

export const actions = {

  async nuxtServerInit ({ commit }, { req }) {
    let data = await this.$axios.$get(api.client.index())
    commit('SET_OPTION', data)
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
  options: state => state.option
}
