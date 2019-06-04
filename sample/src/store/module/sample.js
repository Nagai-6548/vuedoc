/**
 * Vuex Store Sample
 */
export default {
  namespaced: true,
  state: {
    /**
     * sample state counter
     */
    count: 0
  },
  getters: {
    /**
     * get multiplied by one million
     * @param {*} state Vuex's State
     * @returns {Integer} count multiplied by one million
     */
    getMillionCount (state) {
      return state.count * 1000000;
    }
  },
  mutations: {
    /**
     * increment count
     * @param {*} state Vuex's State
     */
    increment(state) {
      state.count++;
    }
  },
  actions: {
    /**
     * commit increment mutation
     * @param {*} commit Vuex's Commit
     */
    increment({ commit }) {
      commit("increment")
    }
  }
}