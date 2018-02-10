<template>
  <v-card class="elevation-0">
    <v-toolbar color="teal" dark class="elevation-0">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="text-xs-center">New Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list three-line dense>
      <v-list-tile v-for="n in 4" :key="n" @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            <h3>苹果发布iOS 11.3 Beta 2，降频开关终于来了</h3>
          </v-list-tile-title>
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
  name: 'hot-list',
  data () {
    return {}
  }
}
</script>
<style scoped>


</style>
