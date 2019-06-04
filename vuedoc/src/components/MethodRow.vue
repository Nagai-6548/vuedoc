<template>
  <div class="method-row">
    <div class="item-title">{{name}}</div>
    <div class="item-description"><span v-html="description"></span></div>
    <div class="item-parameters" v-if="item.params && item.params.length > 0">Parameters
      <el-table v-if="item.params && item.params.length > 0" :data="item.params">
        <el-table-column
          prop="name"
          label="Parameters"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type.name"
          label="Type"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="Description">
        </el-table-column>
      </el-table>
    </div>
    <div class="item-returns" v-if="item.returns && Object.keys(item.returns).length > 0">Returns
      <el-table v-if="item.returns && Object.keys(item.returns).length > 0" :data="[item.returns]">
        <el-table-column
          prop="type.name"
          label="Type"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="Description"
          width="360">
        </el-table-column>
      </el-table>
    </div>
    <el-collapse v-if="item.innerFunctions && item.innerFunctions.length > 0">
      <el-collapse-item title="Inner Functions">
        <div :key="i" v-for="(item, i) in item.innerFunctions">
          <method-row class="inner-functions" :name="item.name" :item="item"></method-row>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import RowMixin from "../mixins/RowMixin"
/**
 * Method and Other Functions Component
 * computed, watch, methods, lifecycles...
 */
export default {
  name: 'MethodRow',
  mixins: [RowMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.method-row {
  margin-bottom: 10px;
  .item-title {
    font-size: 15px;
    font-weight: bold;
  }
  .item-title,
  .item-description,
  .item-parameters,
  .item-returns {
    margin-bottom: 5px;
  }
  .inner-functions {
    margin-left: 30px;
  }
}
</style>
