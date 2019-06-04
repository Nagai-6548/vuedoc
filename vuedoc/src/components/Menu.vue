<template>
  <div class="aside-menu">
    <div class="menu-box">
      <div class="menu-title">Component</div>
      <div :key="i" v-for="(item, i) in components">
        <p class="component-link" @click="onClickComponent(item)">{{item.displayName}}</p>
      </div>
    </div>
    <div class="menu-box">
      <div class="menu-title">Store</div>
      <div :key="i" v-for="(item, i) in stores">
        <p class="store-link" @click="onClickStore(item)">{{item.displayName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Menu Component
 */
export default {
  name: 'Menu',
  computed: {
    /**
     * Ref Vue Doc Components
     */
    components() {
      return this.$store.state.vuedoc.components;
    },
    /**
     * Ref Vue Doc Stores
     */
    stores() {
      return this.$store.state.vuedoc.stores;
    }
  },
  methods: {
    /**
     * Select Component
     */
    onClickComponent(item) {
      this.$store.commit("vuedoc/select", {
        type: "component",
        item
      });
    },
    /**
     * Select Store
     */
    onClickStore(item) {
      this.$store.commit("vuedoc/select", {
        type: "store",
        item
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$main-color: #000;
.aside-menu {
  position: fixed;
  padding: 0px 10px;
  width: 280px;
  .menu-box {
    margin-top: 20px;
    position: relative;
    padding: 10px 10px 5px;
    border: 1px solid $main-color;
    border-radius: 5px;
    div > p {
      color: $main-color;
      text-decoration: underline;
      cursor: pointer;
      margin-bottom: 5px;
    }
    div:last-child > p {
      margin-bottom: 0px;
    }
    .menu-title {
      position: absolute;
      display: inline-block;
      top: -13px;
      left: 10px;
      padding: 0 9px;
      line-height: 1;
      font-size: 19px;
      background: #FFF;
      color: $main-color;
      font-weight: bold;
    }
  }
}
</style>
