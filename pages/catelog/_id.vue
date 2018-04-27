<template>
  <v-container grid-list-md class="mb-1">
    <v-layout row wrap>
        <v-flex d-flex xs12 sm12 md12>
            <breadcrumbs />
        </v-flex>
        <v-flex xs12 md4 v-for="post in body.posts"
                        :key="post.id">
            <post-card :post="post" />
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'catelog-id',
  components: {
    'post-card': () => import('~/components/PostCard'),
    'breadcrumbs': () => import('~/components/Breadcrumbs')
  },
  computed: {
    ...mapGetters('catelogs', {
      catelogs: 'index'
    })
  },
  async asyncData ({store,params}) {
    let catelog = store.state.catelogs.catelogs.find(item=>item.id === parseInt(params.id))
    let items = [{
      text: '首页',
      disabled: false,
      nuxt: true,
      to: {name: 'index'}
    },
    {
      text: '文章分类',
      disabled: false,
      nuxt: true,
      to: {name: 'catelog'}
    },
    {
      text: catelog.name,
      disabled: false,
      nuxt: false
    }
    ]
    store.commit('SET_BREADCRUMBS', items)
    let qs = {with:'posts'}
    let body = await store.dispatch('catelogs/show',{...params,qs})
    return {body,catelog}
  }
}
</script>