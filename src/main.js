import './utils/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import primevue from './plugins/primevue'
import './permission'
import './utils/error-log'
import './utils/vee-validate'
import { getPublicUrl } from './utils'

Vue.config.productionTip = false
// template中的引用public的资源打包时不会追加公共基础路径base
Vue.prototype.$publicUrl = getPublicUrl

Vue.use(primevue, store.state.settings)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
