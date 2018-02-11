<template>
	<v-card tile class="elevation-0">
		<panel-header iconL="explore" iconR="list" title="文章分类" />
		<v-divider></v-divider>
		<v-list dense class="pt-0">
			<v-list-tile v-for="item in items" :key="item.title" @click="">
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>{{ item.title }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-card>
</template>
<script>
export default {
	components: {
		'panel-header': () =>
			import ('~/components/PanelHeader')
	},
	data() {
		return {
			items: [
				{ title: 'Home', icon: 'dashboard' },
				{ title: 'About', icon: 'question_answer' }
			]
		}
	}

}

</script>
<style scoped>


</style>
