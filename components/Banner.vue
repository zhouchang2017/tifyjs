<template>
	<section>
		<v-parallax :src="banner" height="600">
			<v-layout column align-center justify-center class="white--text">
				<!-- <img src="assets/vuetify.png" alt="Vuetify.js" height="200"> -->
				<h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
				<div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
				<v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
					Get Started
				</v-btn>
			</v-layout>
		</v-parallax>
	</section>
</template>
<script>
export default {
	data() {
		return {
			banner: 'https://photo.tuchong.com/469811/f/26332228.jpg'
		}
	}

}

</script>
<style scoped>


</style>
