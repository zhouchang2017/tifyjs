<template>
  <v-carousel hide-delimiters :lazy="true" class="elevation-0">
    <v-carousel-item v-for="(item,i) in swipers" :src="item.src" :key="i">
      <v-container fill-height>
        <v-layout fill-height>
          <v-flex xs12 align-end reverse>
            <span class="headline" style="color:#fff;text-shadow: black 0.0em 0.02em 0.01em">{{ `Top ${i} Australian beaches` }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data: () => ({
    swipers: [{
      src: '/img/1.jpg'
    },
    {
      src: '/img/2.jpg'
    },
    {
      src: '/img/3.jpg'
    }
    ]
  })
}
</script>
<style scoped>


</style>
