import variables from '@/styles/element-variables.scss'
console.log(variables)
import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo, showAvatar } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo,
  showAvatar
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
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

