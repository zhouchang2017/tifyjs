import api from '~/util/api.config'

export const state = () => ({
  catelogs: []
})

export const mutations = {
  SET_CATELOGS: (state, catelogs) => {
    state.catelogs = catelogs.map(item => {
      item.active = false
      return item
    })
  },
  SET_ACTIVE: (state, catelog) => {
    state.catelogs = state.catelogs.reduce((res, cate) => {
      cate.active = cate.id === catelog.id
      res.push(cate)
      return res
    }, [])
  }
}

export const actions = {
  async index ({getters, commit}) {
    if (_.isEmpty(getters.index)) {
      let catelogs = await this.$axios.$get(api.catelogs.index())
      commit('SET_CATELOGS', catelogs)
    }
    return getters.index
  }
}

export const getters = {
  index: state => state.catelogs
}
