<template>
  <div>
    <v-card hover nuxt :to="{name:'catelog-id',params:{id:item.id}}" class="elevation-1" raised>
        <v-card-media :src="item.avatar" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.name}}</h3>
          </div>
        </v-card-title>
        
      </v-card>
      </div>
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