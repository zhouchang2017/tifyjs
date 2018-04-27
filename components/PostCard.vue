<template>
    <v-card class="elevation-0">
        <v-card-media
                class="white--text"
                height="170px"
                :src="post.avatar"
        >
            <v-container fill-height fluid>
                <v-layout>
                    <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ post.title }}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-media>
        <v-card-text style="min-height: 138px;">
            {{ post.desc }}
        </v-card-text>
        <v-card-actions>
            <v-btn icon class="red--text">
                <v-icon medium>fa-reddit</v-icon>
            </v-btn>
            <v-btn icon class="light-blue--text">
                <v-icon medium>fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
                <v-icon medium>fa-facebook</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn nuxt flat class="blue--text" :to="{name:'post-id',params:{id:post.id}}">Read More</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    name: 'post-card',
    props: {
      post: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style scoped>

</style>