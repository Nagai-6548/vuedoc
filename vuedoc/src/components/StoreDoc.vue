<template>
  <div v-if="selected && selected.type === 'store'">
    <div class="store-title">{{selected.item.displayName}}</div>
    <div class="store-description">{{ selected.item.description.replace(/\n/g, ' ') }}</div>
    <el-collapse>
      <el-collapse-item title="State" v-if="isExist(selected.item.state)">
        <div :key="i" v-for="(item, i) in selected.item.state">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Getter" v-if="isExist(selected.item.getters)">
        <div :key="i" v-for="(item, i) in selected.item.getters">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Mutations" v-if="isExist(selected.item.mutations)">
        <div :key="i" v-for="(item, i) in selected.item.mutations">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Actions" v-if="isExist(selected.item.actions)">
        <div :key="i" v-for="(item, i) in selected.item.actions">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import DocMixin from "../mixins/DocMixin"
/**
 * StoreDoc
 */
export default {
  name: 'StoreDoc',
  mixins: [DocMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.store-title {
  font-size: 30px;
}
</style>