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
					<catalog-bar/>
				</v-flex>
				<v-flex d-flex xs12 sm12 md9>
					<v-card class="elevation-0">
						<v-card-title primary-title>
							<div>
								<h1>号称三防的Bose蓝牙小音响，能否撑过北极严寒测试？</h1>
								<span class="grey--text">2018-02-10 00:15 出处：PConline原创 作者：隔壁家的老黄、太平洋J2台</span>
								<v-divider></v-divider>
								<v-card class="elevation-0 mt-2 mb-2">
									<v-card-text class="grey lighten-3">“千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。”</v-card-text>
								</v-card>
								<p>
									<img src="https://photo.tuchong.com/1370833/f/20497818.jpg"> 【PConline 极客看世界】古人在很早的时候已经告诉我们，大冬天，天上连只鸟都没有，就该安安静静待房子里。可能大部分人是这么认为的，但是对于崇尚户外运动或者想一领“北国的雪”朋友，在这鬼冷冻的时节更是向往好好出去玩一番。很多南方的孩子，特别是两广地区和海南的孩子，要选择冬天的旅游目的地，当然要去能够看到雪的地方。雪乡什么我们就别瞎凑合了，不如玩得爽一点，去东欧看雪吧？
								</p>
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
			import ('~/components/Banner'),
		'catalog-bar': () =>
			import ('~/components/CatalogBar')
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
