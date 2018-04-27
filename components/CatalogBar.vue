<template>
	<v-card tile
	        class="elevation-0">
		<panel-header iconL="list"
		              title="文章分类" />
		<v-divider></v-divider>
		<v-list>
			<template v-for="catelog in catelogs">
				<v-list-group v-if="catelog.posts.length>0"
				              >
					<v-list-tile slot="activator">
						<v-list-tile-content>
							<v-list-tile-title class="subheading">{{ catelog.name }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile exact
					             v-for="post in catelog.posts"
					             :key="post.title"
					             :to="{name:'post-id',params:{id:post.id}}"
					             @click="">
						<v-list-tile-content>
							<v-list-tile-title class="caption">{{ post.title }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-group>
				<v-list-tile exact
				             v-else
				             @click="">
					<!-- <v-list-tile-action>
                        <v-icon>{{ item.action }}</v-icon>
                    </v-list-tile-action> -->
					<v-list-tile-content>
						<v-list-tile-title class="subheading">{{ catelog.name }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</template>
		</v-list>
	</v-card>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  components: {
    'panel-header': () => import('~/components/PanelHeader')
  },
  computed: {
    ...mapGetters('catelogs', {
      catelogs: 'index'
    }),
		catelogsFilter(){
			return this.catelogs.filter(item=>item.posts.length>0)
		}
  }
}
</script>
<style scoped>

</style>
