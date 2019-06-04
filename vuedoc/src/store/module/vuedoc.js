const vuedoc = require("../../../vue-docgen-api/dist/output.json");
/**
 * Manage Vue Doc State
 */
export default {
  namespaced: true,
  state: {
    /**
     * Component infomations
     */
    components: vuedoc.components,
    /**
     * Store infomations
     */
    stores: vuedoc.store,
    /**
     * selected
     * {
     *   type: "component"/"store",
     *   item: selected from components or stores
     * }
     */
    selected: null
  },
  mutations: {
    /**
     * select VueDoc object
     * @param {*} state Vuex's State
     * @param {*} selected VueDoc object
     */
    select(state, selected) {
      state.selected = selected;
    }
  }
}