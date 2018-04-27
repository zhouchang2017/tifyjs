<template>
    <div>
        <section v-if="banners.main">
            <v-parallax :src="banners.main.avatar" height="600">
                <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                >
                    <h1 class="white--text mb-2 display-1 text-xs-center">{{banners.main.title}}</h1>
                    <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                    <v-btn
                    v-if="banners.main.post_id"
                    nuxt
                    :to="{name:'post-id',params:{id:banners.main.post_id}}"
                            class="blue lighten-2 mt-5"
                            style="color:#64b5f6 !important;"
                            large
                            outline
                    >
                        Read More
                    </v-btn>
                    <v-btn
                    v-else
                    :href="banners.main.link"
                            class="blue lighten-2 mt-5"
                            dark
                            large
                    >
                        Read More
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout
                    column
                    wrap
                    class="my-5"

            >
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">The best way to start developing</h2>
                        <span class="subheading">
                            Cras facilisis mi vitae nunc
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12 fill-height>
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            <v-flex xs12 md4 v-for="hot in body.hot" :key="hot.title">
                                <post-card :post="hot"/>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section v-if="banners.mid">
            <v-parallax :src="banners.mid.avatar" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">{{banners.mid.title}}</div>
                    <em>Kick-start your application today</em>
                    <v-btn
                            class="blue lighten-2 mt-5"
                            dark
                            large
                    >
                        Get Started
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-container grid-list-lg>
                <v-layout row wrap justify-center class="my-2">
                    <v-flex xs12>
                        <middle-title-list :list="body.hotList"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>

        <section>
            <v-container grid-list-lg>
                <v-layout row wrap justify-center>
                    <v-flex d-flex xs12 sm6 md4 v-if="!mediaPostIsEmpty">
                        <media-post :item="body.recommend"/>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 v-bind="autoMd" v-for="(posts,index) in random" :key="index">
                        <hot-list :posts="posts"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>

        <section>
            <v-container grid-list-lg>
                <v-layout row wrap justify-start>
                    <v-flex d-flex xs12 sm8 md8>
                        <main-list :posts="posts"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>


    </div>
</template>

<script>
  export default {
    components: {
      'middle-title-list': () => import('~/components/MiddleTitleList'),
      'hot-list': () => import('~/components/HotList'),
      'media-post': () => import('~/components/MediaPost'),
      'post-card': () => import('~/components/PostCard'),
      'main-list': () => import('~/components/MainList')
    },
    async asyncData ({store}) {
      let [data, body, byCatelog, posts] = await Promise.all([
        store.dispatch('client'),
        store.dispatch('body'),
        store.dispatch('byCatelog', {catelog_id: 4}),
        store.dispatch('posts')
      ])
      const group = _.groupBy(data.banners, 'type')
      let banners = {
        main: _.head(_.get(group, 'main')),
        mid: _.head(_.get(group, 'mid'))
      }
      let random = _.chunk(body.randomPost, 5)
      return {config: data, banners, body, byCatelog, posts, random}
    },
    computed: {
      mediaPostIsEmpty () {
        return _.isEmpty(this.body.recommend)
      },
      autoMd () {
        return {md6: this.mediaPostIsEmpty, md4: !this.mediaPostIsEmpty}
      }
    },
    methods:{
      handler (component) {
        console.log('this component is showing')
      }
    }
  }
</script>
