<template>
    <v-card class="elevation-1" raised>
        <!-- <v-card-media :src="avatar" height="200px">
        </v-card-media> -->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.name}}</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
  export default {
    name: 'z-card',
    props: {
      item: Object,
      avatar: {
        type: String,
        default: 'https://photo.tuchong.com/395013/f/20037222.jpg'
      }
    },
    components: {
    //   'num':()=>import('~/components/Num')
    }
  }
</script>

<style scoped>

</style>