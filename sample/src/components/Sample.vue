<template>
  <div>
    <div>store's value</div>
    <div>{{ count }}</div><input type="button" @click="increment()" value="+"/>
    <div>prop's value</div>
    <div>{{ sampleProp }}</div>
    <div>data's value</div>
    <div>{{ sampleData }}</div><input type="text" v-model="sampleData"/>
  </div>
</template>

<script>
/**
 * Vue Component Sample
 */
export default {
  name: 'Sample',
  props: {
    /**
     * sample props
     */
    "sampleProp": {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      /**
       * sample data
       * @type {String}
       * @public
       */
      sampleData: ""
    }
  },
  computed: {
    /**
     * sample computed
     * @returns {Integer} sample store count
     * @public
     */
    count() {
      return this.$store.state.sample.count;
    }
  },
  watch: {
    /**
     * sample watch
     * @public
     */
    count() {}
  },
  /**
   * sample lifecycle method beforeCreate
   * @public
   */
  beforeCreate() {},
  /**
   * sample lifecycle method created
   * @public
   */
  created() {},
  /**
   * sample lifecycle method beforeMount
   * @public
   */
  beforeMount() {},
  /**
   * sample lifecycle method mounted
   * @public
   */
  mounted() {},
  /**
   * sample lifecycle method beforeUpdate
   * @public
   */
  beforeUpdate() {},
  /**
   * sample lifecycle method updated
   * @public
   */
  updated() {},
  /**
   * sample lifecycle method beforeDestroy
   * @public
   */
  beforeDestroy() {},
  /**
   * sample lifecycle method destroyed
   * @public
   */
  destroyed() {},
  methods: {
    /**
     * sample method
     * @param {String} text sample text
     * @returns {Integer} text length
     * @public
     */
    sampleMethod(text) {
      return text.length;
    },
    /**
     * increment method
     * call sample/increment
     * @public
     */
    increment() {
      this.$store.commit("sample/increment");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
