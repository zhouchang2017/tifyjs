<template>
  <v-card class="elevation-0">
    <panel-header iconL="explore" iconR="list" title="发现" />
    <v-list three-line>
      <template v-for="(item,ind) in items">
        <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
        <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
        <v-list-tile avatar v-else v-bind:key="ind" @click="">
          <v-list-tile-avatar>
            <img v-bind:src="item.avatar" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            <v-layout style="width:100%;" class="caption" align-content-center align-center row justify-end color="grey lighten-4">
              <v-flex d-flex v-bind="bind">
                <span><v-icon light class="caption">visibility</v-icon>2017</span>
              </v-flex>
              <v-flex d-flex v-bind="bind">
                <span><v-icon light class="caption">query_builder</v-icon>3分钟之前</span>
              </v-flex>
            </v-layout>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  components: {
    'panel-header': () =>
      import ('~/components/PanelHeader')
  },
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
  mounted() {
    for (let i = 0; i <= 50; i++) {
      this.items.push(this.items[0])
      this.items.push(this.items[1])
    }
  },
  computed: {
    bind() {
      if (this.$vuetify.breakpoint.lg) {
        return { 'xs2': true }
      }
      if (this.$vuetify.breakpoint.md) {
        return { 'xs2': true }
      }
      if (this.$vuetify.breakpoint.sm) {
        return { 'xs2': true }
      }
      if (this.$vuetify.breakpoint.xs) {
        return { 'xs3': true }
      }
    }
  }
}

</script>
<style scoped>


</style>
