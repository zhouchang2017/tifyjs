<template>
	<div>
		<!-- <banner/> -->
		<v-container grid-list-md class="mb-1">
			<v-layout row wrap>
				<v-flex d-flex xs12 sm12 md12>
					<v-breadcrumbs divider="/">
						<v-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">
							{{ item.text }}
						</v-breadcrumbs-item>
					</v-breadcrumbs>
				</v-flex>
				<v-flex d-flex xs12 sm12 md3>
					123
				</v-flex>
				<v-flex d-flex xs12 sm12 md9>
					<v-card>
						<v-card-title primary-title>
							<div>
								<h1>文章标题</h1>
								<span class="grey--text">Number 10</span>
								<br>
								<span>Whitehaven Beach</span>
								<br>
								<span>Whitsunday Island, Whitsunday Islands</span>
							</div>
						</v-card-title>
						<v-card-actions>
							<v-btn flat color="orange">Share</v-btn>
							<v-btn flat color="orange">Explore</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	components: {
		'banner': () =>
			import ('~/components/Banner')
	},
	data() {
		return {
			items: [{
					text: 'Dashboard',
					disabled: false
				},
				{
					text: 'Link 1',
					disabled: false
				},
				{
					text: 'Link 2',
					disabled: true
				}
			]
		}
	}

}

</script>
<style scoped>


</style>
