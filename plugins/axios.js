export default function ({ $axios, redirect }) {
  $axios.setHeader('nuxt-id', process.env.API_REQUEST_HEADER)
//   $axios.onRequest(config => {
//     console.log('Making request to ' + config.url)
//   })

//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status)
//     if (code === 400) {
//       redirect('/400')
//     }
//   })
}
