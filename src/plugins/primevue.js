import PrimeVue from 'primevue2/config'
import Button from 'primevue2/button'
import BadgeDirective from 'primevue2/badgedirective'
import Ripple from 'primevue2/ripple'
import StyleClass from 'primevue2/styleclass'
import Tooltip from 'primevue2/tooltip'
import ToastService from 'primevue2/toastservice'
import ConfirmationService from 'primevue2/confirmationservice'

export default {
  install(Vue, opts = {}) {
    const { locale, inputStyle = false, ripple = false } = opts
    // this.$primevue
    Vue.use(PrimeVue, { locale, ripple, inputStyle })
    // this.$toast
    Vue.use(ToastService)
    // this.$confirm
    Vue.use(ConfirmationService)

    Vue.directive('badge', BadgeDirective)
    Vue.directive('tooltip', Tooltip)
    Vue.directive('ripple', Ripple)
    Vue.directive('styleclass', StyleClass)

    // eslint-disable-next-line vue/no-reserved-component-names
    Vue.component('Button', Button)

    // unplugin-primevue2-resolver 中按需引用
    // for (const key in componentObj) {
    //   Vue.component(key, componentObj[key])
    // }
  }
}
