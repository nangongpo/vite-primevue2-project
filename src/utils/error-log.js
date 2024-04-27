import Vue from 'vue'
import store from '@/store'
import settings from '@/settings'

// you can set in settings.js
// errorLog:'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings

function checkNeed() {
  const mode = import.meta.env.MODE
  if (typeof(needErrorLog) === 'string') {
    return mode === needErrorLog
  }
  if (Array.isArray(needErrorLog)) {
    return needErrorLog.includes(mode)
  }
  return false
}

if (checkNeed()) {
  // eslint-disable-next-line no-unused-vars
  Vue.config.errorHandler = function (err, vm, info, a) {
  // Don't ask me why I use Vue.nextTick, it just a hack.
  // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      store.dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      })
      console.log('---------')
      console.error(err, info)
      console.log('---------')
    })
  }
}
