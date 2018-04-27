<template>
  <v-card class="elevation-0">
    <v-card-media :src="item.avatar" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{item.title}}</h3>
        <div>{{item.body | innerHTML}}...</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange" nuxt :to="{name:'post-id',params:{id:item.id}}">READ MORE</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'media-post',
  props: {
    item: Object
  },
  computed: {
    data () {
      return _.get(this.item, '[0]', [])
    }
  }
}
</script>
<style scoped>


</style>
