<template>
    <v-app light>
        <v-navigation-drawer
            fixed
            v-model="drawer"
            class="hidden-md-and-up"
            >
            <catalog-bar/>
        </v-navigation-drawer>
        <v-toolbar app class="elevation-1">
            <v-toolbar-side-icon @click.stop="toggleDrawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>{{options.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <!--<v-toolbar-side-icon @click.native="dialog = true" class="hidden-md-and-up"></v-toolbar-side-icon>-->
            <v-toolbar-items class="hidden-md-and-down">
                <v-btn flat v-for="catelog in options.catelogs" :key="catelog.id" >{{catelog.name}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
        <v-container grid-list-md class="mb-1">
			<v-layout row wrap>
				<v-flex d-flex xs12 sm12 md12>
					<breadcrumbs />
				</v-flex>
				<v-flex  xs12 sm12 md3 class="hidden-sm-and-down">
					<catalog-bar/>
				</v-flex>
                <nuxt/>
			</v-layout>
        </v-container>
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
  components: {
    'banner': () => import('~/components/Banner'),
    'catalog-bar': () => import('~/components/CatalogBar'),
    'breadcrumbs': () => import('~/components/Breadcrumbs')
  },
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
      rightDrawer: false,
      title: 'Vuetify.js',
      drawer: false
    }
  },
  computed: {
    ...mapGetters(['options'])
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
