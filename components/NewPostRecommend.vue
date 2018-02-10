<template>
  <v-card class="elevation-0">
    <v-list dense>
      <v-list-tile v-for="n in 8" :key="n" @click="">
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
