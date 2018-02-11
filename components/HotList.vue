<template>
  <v-card tile class="elevation-0">
    <panel-header iconL="explore" iconR="list" title="一周热点"/>
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
  components: {
    'panel-header': () => import('~/components/PanelHeader')
  },
  data () {
    return {}
  }
}
</script>
<style scoped>


</style>
