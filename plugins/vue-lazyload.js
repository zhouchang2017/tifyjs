import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  lazyComponent: true,
  error: '/img/404.png',
  loading: '/img/img-loading.gif',
  listenEvents: ['scroll', 'transitionend'],
  attempt: 1,
  adapter: {
    loaded ({bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init}) {
      // do something here
      // example for call LoadedHandler
      // console.log(el)
    },
    loading (listender, Init) {
    },
    error (listender, Init) {
      // console.log('error')
      // console.log(listender)
      // listender.el.removeAttribute('lazy-progressive')
      // listender.el.src = listender.error
    }
  },
  filter: {
    progressive (listener, options) {
      const isLaravel = /^\/storage\/.+/
      if (isLaravel.test(listener.src)) {
        listener.el.setAttribute('lazy-progressive', 'true')
        listener.src = `${process.env.API_SERVICE}${listener.src}`
      }
    },
    webp (listener, options) {
      if (!options.supportWebp) return
      const isLaravel = /^\/storage\/.+/
      if (isLaravel.test(listener.src)) {
        listener.src = `${process.env.API_SERVICE}${listener.src}`
      }
    }
  }
})
