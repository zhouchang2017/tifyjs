<template>
  <v-layout  row wrap>
    <v-flex  xs6 sm6 md4 v-for="(post,index) in list" :key="index">
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-content>
            <!--<v-list-tile-title>列表标题</v-list-tile-title>-->
            <v-list-tile-sub-title>
              {{getCatelog(post).name}} | {{post.title}}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'middle-title-list',
  props: {
    list: Array
  },
  data () {
    return {}
  },
  methods: {
    getCatelog (post) {
      return _.get(post, 'catelogs[0]')
    }
  }
}
</script>
<style scoped>


</style>
