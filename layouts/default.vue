<template>
    <v-app light>
        <v-toolbar app class="elevation-1">
            <v-toolbar-title>{{options.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <!--<v-toolbar-side-icon @click.native="dialog = true" class="hidden-md-and-up"></v-toolbar-side-icon>-->
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="catelog in options.catelogs" :key="catelog.id" >{{catelog.name}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <nuxt/>
        </v-content>
        <!--<v-footer class="hidden-sm-and-down" :fixed="fixed" app>-->
            <!--<span>&copy; 2017</span>-->
        <!--</v-footer>-->
        <v-bottom-nav app class="hidden-md-and-up" :value="true" :active.sync="e1" color="grey lighten-4">
            <v-btn flat color="teal" value="recent">
                <span>Recent</span>
                <v-icon>history</v-icon>
            </v-btn>
            <v-btn flat color="teal" value="favorites">
                <span>Favorites</span>
                <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn flat color="teal" value="nearby">
                <span>Nearby</span>
                <v-icon>place</v-icon>
            </v-btn>
        </v-bottom-nav>
    </v-app>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      e1: 'recent',
      dialog: false,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  computed: {
    ...mapGetters(['options']),
    title () {
      return this.options.name
    }
  }
}
</script>
