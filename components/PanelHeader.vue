<template>
  <v-card tile class="elevation-0">
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <v-icon>explore</v-icon>
            {{title}}
          </v-list-tile-title>
          <!-- <v-list-tile-sub-title>Fitz & The Trantrums</v-list-tile-sub-title> -->
        </v-list-tile-content>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>list</v-icon>
        </v-btn>
      </v-list-tile>
    </v-list>
    <v-progress-linear height="3" :value="50" class="my-0"></v-progress-linear>
  </v-card>
</template>
<script>
export default {
  props: {
    iconL: String,
    iconR: String,
    title: String
  }
}
</script>
<style scoped>


</style>
