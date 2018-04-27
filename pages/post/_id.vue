<template>
	
				<v-flex d-flex xs12 sm12 md9>
					<v-card class="elevation-0">
						<v-card-media :src="post.avatar" height="200px">
        				</v-card-media>
						<v-card-title primary-title>
							<div>
								<h1>{{post.title}}</h1>
								<span class="grey--text">{{post.created_at}}</span>
								<v-divider></v-divider>
								<!-- <v-card class="elevation-0 mt-2 mb-2">
									<v-card-text class="grey lighten-3">“千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。”</v-card-text>
								</v-card> -->
								<div v-html="post.body"></div>
							</div>
						</v-card-title>
						<!-- <v-card-actions>
							<v-btn flat color="orange">Share</v-btn>
							<v-btn flat color="orange">Explore</v-btn>
						</v-card-actions> -->
					</v-card>
				</v-flex>
		
</template>
<script>
export default {
  layout: 'post',
  async asyncData ({store, params, error}) {
    let data = await store.dispatch('posts/show', params.id)
    let catelog = _.head(data.catelogs)
    store.commit('catelogs/SET_ACTIVE', catelog)
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
      nuxt: true,
      to: {name: 'catelog-id',params:{id:catelog.id}}
    },
    {
      text: data.title,
      disabled: true,
      nuxt: false
    }
    ]
    store.commit('SET_BREADCRUMBS', items)
    return {post: data, catelog, items}
  },
  data () {
    return {

    }
  }

}
</script>
<style scoped>


</style>
