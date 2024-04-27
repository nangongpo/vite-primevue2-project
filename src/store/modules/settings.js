// import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
import { shareStorage } from '@/utils/web-storage'

const settings = shareStorage.getAll()
const state = Object.assign(defaultSettings, settings)

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
      shareStorage.set(key, value)
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

