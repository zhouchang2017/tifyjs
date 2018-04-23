<template>
  <v-card tile class="elevation-0">
    <!-- <panel-header iconL="explore" iconR="list" title="一周热点"/> -->
    <v-progress-linear height="3" :value="50" class="my-0"></v-progress-linear>
    <v-list three-line dense>
      <v-list-tile v-for="post in posts" :key="post.id" @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            <h3>{{post.title}}</h3>
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{post.body | innerHTML}}
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
  props: {
    posts: Array
  },
  data () {
    return {}
  }
}
</script>
<style scoped>


</style>
