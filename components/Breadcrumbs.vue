<template>
  <v-breadcrumbs divider="/">
    <template v-for="item in breadcrumbs">
        <v-breadcrumbs-item :disabled="item.disabled" :nuxt="item.nuxt" exact v-if="item.nuxt" :to="item.to">
            {{ item.text }}
        </v-breadcrumbs-item>
        <v-breadcrumbs-item :disabled="item.disabled" :nuxt="item.nuxt" exact v-else>
            {{ item.text }}
        </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'breadcrumbs',
  computed: {
    ...mapGetters(['breadcrumbs'])
  }
}
</script>