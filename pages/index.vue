<template>
    <v-layout col wrap>
        <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md6>
                <v-carousel hide-delimiters :lazy="true">
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
            </v-flex>
            <v-flex d-flex xs12 sm6 md6>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <v-layout row wrap>
                            <v-flex d-flex
                                    v-for="n in 3"
                                    :key="n"
                                    xs12
                            >
                                <v-card
                                        color="red lighten-2"
                                        dark
                                >
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <!--<v-flex xs5>-->
                                            <!--<v-card-media-->
                                            <!--src="/img/1.jpg"-->
                                            <!--height="125px"-->
                                            <!--contain-->
                                            <!--&gt;</v-card-media>-->
                                            <!--</v-flex>-->
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
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <middle-title-list/>

        <v-layout row>
            <new-post-recommend/>
            <v-flex d-flex xs12 sm6 md8>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <v-layout row wrap>
                            <v-flex d-flex xs12>
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
                                                    <img v-bind:src="item.avatar"/>
                                                </v-list-tile-avatar>
                                                <v-list-tile-content>
                                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                                    <v-list-tile-sub-title
                                                            v-html="item.subtitle"></v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </template>
                                    </v-list>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4 child-flex>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <v-layout row wrap>
                            <v-flex d-flex
                                    v-for="n in 3"
                                    :key="n"
                                    xs12
                            >
                                <v-card class="elevation-0">
                                    <v-card-media src="/img/1.jpg" height="200px">
                                    </v-card-media>
                                    <v-card-title primary-title>
                                        <div>
                                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New
                                                South Wales, ...
                                            </div>
                                        </div>
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn flat color="orange">Share</v-btn>
                                        <v-btn flat color="orange">Explore</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
  export default {
    components: {
      'middle-title-list': () => import('~/components/MiddleTitleList'),
      'new-post-recommend': () => import('~/components/NewPostRecommend')
    },
    data () {
      return {
        swipers: [
          {
            src: '/img/1.jpg'
          },
          {
            src: '/img/2.jpg'
          },
          {
            src: '/img/3.jpg'
          }
        ],
        items: [
          // {header: 'Today'},
          {
            avatar: '/v.png',
            title: 'Brunch this weekend?',
            subtitle: '<span class=\'grey--text text--darken-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
          },
          {divider: true, inset: true},
          {
            avatar: '/v.png',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: '<span class=\'grey--text text--darken-2\'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'
          },
          {divider: true, inset: true},
          {
            avatar: '/v.png',
            title: 'Oui oui',
            subtitle: '<span class=\'grey--text text--darken-2\'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
          },
          {divider: true, inset: true},
          {
            avatar: '/v.png',
            title: 'Birthday gift',
            subtitle: '<span class=\'grey--text text--darken-2\'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
          },
          {divider: true, inset: true},
          {
            avatar: '/v.png',
            title: 'Recipe to try',
            subtitle: '<span class=\'grey--text text--darken-2\'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
          }
        ],
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
      }
    }
  }
</script>
