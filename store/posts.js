import api from '~/util/api.config'

export const actions = {
  async show (ctx, id) {
    let data = await this.$axios.$get(api.posts.show(id))
    return data
  }
}
