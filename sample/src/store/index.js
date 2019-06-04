import Vue from 'vue'
import Vuex from 'vuex'
import sample from './module/sample'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sample
  }
})