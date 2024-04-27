import Scrollbar from './src/main.jsx'

/* istanbul ignore next */
Scrollbar.install = function (Vue) {
  Vue.component(Scrollbar.name, Scrollbar)
}

export default Scrollbar
