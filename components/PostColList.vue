<template>
  <v-layout row wrap>
    <v-flex d-flex v-for="n in 3" :key="n" xs12>
      <v-card color="red lighten-2" dark class="elevation-0">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <!-- <v-flex xs5>
              <v-card-media src="/img/1.jpg" height="125px" contain>
              </v-card-media>
            </v-flex> -->
            <v-flex xs7>
              <div>
                <div class="headline">Supermodel</div>
                <div>Foster the People</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {

}
</script>
<style scoped>


</style>
