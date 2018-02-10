<template>
  <v-layout col wrap>
    <!-- 左右两栏布局 -->
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md6>
        <swiper/>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <post-col-list />
      </v-flex>
    </v-layout>
    <!-- 中间三栏列表 -->
    <middle-title-list/>
    
    <v-layout row wrap fill-height>
      <v-flex d-flex xs12 sm6 md4>
        <media-post/>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <new-post-recommend/>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <hot-list/>
      </v-flex>
      <v-flex d-flex xs12 sm12 md8>
        <main-list/>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  components: {
    'middle-title-list': () =>
      import('~/components/MiddleTitleList'),
    'new-post-recommend': () =>
      import('~/components/NewPostRecommend'),
    'post-col-list': () =>
      import('~/components/PostColList'),
    'swiper': () =>
      import('~/components/Swiper'),
    'hot-list': () =>
      import('~/components/HotList'),
    'main-list': () =>
      import('~/components/MainList'),
    'media-post': () =>
      import('~/components/MediaPost')
  },
  data () {
    return {

    }
  }
}
</script>
