<template>
  <div class="data-row">
    <el-table :data="items">
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Type"
        width="180">
      </el-table-column>
      <el-table-column
        prop="defaultValue"
        label="Default Value"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import RowMixin from "../mixins/RowMixin"
/**
 * Props or Data Component
 */
export default {
  name: 'DataRow',
  mixins: [RowMixin],
  computed: {
    items() {
      return [{
        name: this.name,
        type: this.item.type ? this.item.type.name : "",
        defaultValue: this.item.defaultValue ? this.item.defaultValue.value : "",
        description: this.item.description || ""
      }]
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.data-row {
  margin-bottom: 10px;
  .item-title {
    font-size: 15px;
    font-weight: bold;
  }
  .item-title,
  .item-description {
    margin-bottom: 5px;
  }
}
thead {
  border-bottom: 1px solid #eee;
}
td {
  padding-right: 5px;
}
</style>
