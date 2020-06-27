import Vue from 'vue'
import Vuex from 'vuex'
// import notificationsModule from './modules/notificationsModule'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowTitlesStates: true
  },
  mutations: {
    TOGGLE_SHOW_TITLES_STATES(state, type) {
      state.isShowTitlesStates = type
    }
  },
  actions: {
  }
})
