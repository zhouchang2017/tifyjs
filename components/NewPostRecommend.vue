<template>
<div>
    <v-flex d-flex xs12 sm4 md4>
        <v-card class="elevation-0">
            <v-card-media src="http://img1.feng.com/1/h062/h26/29ac2e0bimg201802091851360_306__220.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
    <v-flex d-flex xs12 sm4 md4>
        <v-layout row wrap>
            <v-flex d-flex>
                <v-card class="elevation-0">
                    <v-list dense>
                        <v-list-tile v-for="n in 10" :key="n" @click="">
                            <v-list-tile-action>
                                <v-icon color="pink">star</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-sub-title>
                                    AirPower/AirPods无线充电盒或将于三月上市
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-flex>
</div>
</template>

<script>
  export default {
    name: 'new-post-recommend',
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>