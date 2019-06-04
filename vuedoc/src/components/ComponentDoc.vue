<template>
  <div v-if="selected && selected.type === 'component'">
    <div class="component-title">{{selected.item.displayName}}</div>
    <div class="component-description">{{ selected.item.description.replace(/\n/g, ' ') }}</div>
    <el-collapse>
      <el-collapse-item title="Props" v-if="isExist(selected.item.props)">
        <div :key="i" v-for="(item, i) in selected.item.props">
          <DataRow :name="i" :item="item"></DataRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Data" v-if="isExist(selected.item.data)">
        <div :key="i" v-for="(item, i) in selected.item.data">
          <DataRow :name="i" :item="item"></DataRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Computed" v-if="isExist(selected.item.computed)">
        <div :key="i" v-for="(item, i) in selected.item.computed">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Watch" v-if="isExist(selected.item.watch)">
        <div :key="i" v-for="(item, i) in selected.item.watch">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="LifeCycle" v-if="isExist(selected.item.lifecycles)">
        <div :key="i" v-for="(item, i) in selected.item.lifecycles">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Methods" v-if="isExist(selected.item.methods)">
        <div :key="i" v-for="(item, i) in selected.item.methods">
          <MethodRow :name="item.name" :item="item"></MethodRow>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import DocMixin from "../mixins/DocMixin"
/**
 * ComponentDoc
 */
export default {
  name: 'ComponentDoc',
  mixins: [DocMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.component-title {
  font-size: 30px;
}
</style>
