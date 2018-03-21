<template>
    <div>
        <section>
            <v-parallax src="https://photo.tuchong.com/469811/f/26332228.jpg" height="600">
                <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                >
                    <img src="/v.png" alt="Vuetify.js" height="200">
                    <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
                    <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
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
                        <v-layout row wrap >
                            <v-flex xs12 md4 v-for="post in posts" :key="post.title">
                                <post-card :post="post" />
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax src="https://photo.tuchong.com/1370833/ft640/20501041.webp" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
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
                        <middle-title-list/>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>

        <section>
            <v-container grid-list-lg>
                <v-layout row wrap justify-center>
                    <v-flex d-flex xs12 sm6 md4>
                        <media-post/>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md4>
                        <hot-list/>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md4>
                        <hot-list/>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>

        <section>
            <v-container grid-list-lg>
                <v-layout row wrap justify-start>
                    <v-flex d-flex xs12 sm8 md8>
                        <main-list/>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>



    </div>
</template>

<script>
  export default {
    components: {
      'middle-title-list': () => import ('~/components/MiddleTitleList'),
      'hot-list': () => import ('~/components/HotList'),
      'media-post': () => import ('~/components/MediaPost'),
      'post-card': () => import('~/components/PostCard'),
      'main-list': () => import ('~/components/MainList')
    },
    data () {
      return {
        posts: [
          {
            title: 'Fusce ullamcorper tellus',
            content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
          },
          {
            title: 'Donec vitae suscipit lectus, a luctus diam.',
            content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
          },
          {
            title: 'Vestibulum condimentum quam',
            content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
          }
        ]
      }
    }
  }
</script>
