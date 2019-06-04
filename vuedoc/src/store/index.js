import Vue from 'vue'
import Vuex from 'vuex'
import vuedoc from './module/vuedoc'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vuedoc
  }
});