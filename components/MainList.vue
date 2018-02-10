<template>
  <v-card class="elevation-0">
    <v-toolbar app color="cyan" dark class="elevation-0">
      <v-toolbar-title>
        <v-icon>explore</v-icon>
        发现
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>list</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list three-line>
      <template v-for="item in items">
        <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
        <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
        <v-list-tile avatar v-else v-bind:key="item.title" @click="">
          <v-list-tile-avatar>
            <img v-bind:src="item.avatar" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      // {header: 'Today'},
      {
        avatar: '/v.png',
        title: 'Brunch this weekend?',
        subtitle: '<span class=\'grey--text text--darken-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
      },
      { divider: true, inset: true }
    ],
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  }),
  mounted () {
    for (let i = 0; i <= 50; i++) {
      this.items.push(this.items[0])
      this.items.push(this.items[1])
    }
  }
}
</script>
<style scoped>


</style>
