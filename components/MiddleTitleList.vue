<template>
  <v-layout row wrap>
    <v-flex xs6 sm6 md4 v-for="n in 6" :key="n">
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-content>
            <!--<v-list-tile-title>列表标题</v-list-tile-title>-->
            <v-list-tile-sub-title>
              热门 | 列表标题
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
  data () {
    return {}
  }
}
</script>
<style scoped>


</style>
