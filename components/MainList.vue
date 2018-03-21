<template>
    <v-card class="elevation-0">
        <v-list subheader>
            <v-container v-for="(post,index) in posts" :key="post.title">
                <template>
                    <v-layout row>
                        <v-flex xs8>
                            <div>

                                <v-list-tile-content>
                                    <v-list-tile-title class="headline" style="height: auto;">
                                        <nuxt-link to="/post/1">{{ post.title }}</nuxt-link>
                                    </v-list-tile-title>
                                    <div class="text--primary">{{ post.body }}</div>
                                </v-list-tile-content>
                            </div>
                        </v-flex>
                        <v-flex xs4>
                            <img class="post-list__avatar" :src=" post.avatar "
                                 alt="">
                        </v-flex>
                    </v-layout>
                    <v-list-tile-sub-title>
                        <div>
                            <v-icon class="caption">remove_red_eye</v-icon>
                            <span class="caption">
                                {{ post.read_num || 0 }}
                            </span>
                        </div>
                    </v-list-tile-sub-title>
                    <v-divider v-if="index+1!==posts.length"></v-divider>
                </template>
            </v-container>
        </v-list>
    </v-card>
</template>
<script>
  export default {
    props: {
      posts: {
        type: Array,
        default: () => ([{
          title: '特别的日子送上别致的美食——清水牛肉&椒盐玉米仔排',
          body: '2018年3月18日 星期天 晴 二月二，龙抬头。今天是个好日子，对我来说也是个特别的日子...'
        }])
      }
    }
  }
</script>
<style scoped>
    .post-list__avatar {
        object-fit: cover;
        height: 125px;
        width: 100%;
        border-radius: 4px;
    }

</style>
