<template>
        <v-container grid-list-md class="mb-1">
			<v-layout row wrap>
				<v-flex d-flex xs12 sm12 md12>
					<breadcrumbs />
				</v-flex>
				<v-flex xs12 md4 v-for="catelog in options.catelogs"
                                :key="catelog.id">
                    <catelog-card :item="catelog" />
                </v-flex>
                <nuxt/>
			</v-layout>
        </v-container>
    <!-- <section>
        <v-layout column
                  wrap>
                    <v-container>
                    <v-flex d-flex xs12 sm12 md12>
                                <breadcrumbs />
                            </v-flex>
                    </v-container>
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            
                            <v-flex xs12 md4 v-for="catelog in options.catelogs"
                                :key="catelog.id">
                                <catelog-card :item="catelog" />
                            </v-flex>
                        </v-layout>
                    </v-container>
               
        </v-layout>
    </section> -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'catelog-index',
  components: {
    'catelog-card': () => import('~/components/CatelogCard'),
    'breadcrumbs': () => import('~/components/Breadcrumbs')
  },
  computed: {
    ...mapGetters(['options'])
  },
  fetch ({store}) {
    let items = [{
      text: '首页',
      disabled: false,
      nuxt: true,
      to: {name: 'index'}
    },
    {
      text: '文章分类',
      disabled: false,
      nuxt: false
    }
    ]
    store.commit('SET_BREADCRUMBS', items)
  }
}
</script>