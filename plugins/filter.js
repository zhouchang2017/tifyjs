import Vue from 'vue'

Vue.filter('innerHTML', function (value) {
  if (!value) return ''
  value = value.replace(/<\/?[^>]*>/g, '') // 去除HTML tag
  value = value.replace(/[ | ]*\n/g, '\n') // 去除行尾空白
  // value = value.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
  value = value.replace(/&nbsp;/ig, '')// 去掉&nbsp;
  value = value.replace(/\s/g, '') // 将空格去掉
  return value.slice(0, 35)
})
