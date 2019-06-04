<template>
  <el-container>
    <el-aside width="300px">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-main>
        <ComponentDoc/>
        <StoreDoc/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from './components/Menu'
import ComponentDoc from './components/ComponentDoc'
import StoreDoc from './components/StoreDoc'

export default {
  name: 'App',
  components: {
    Menu,
    ComponentDoc,
    StoreDoc
  }
}
</script>

<style>
.el-main {
  position: absolute;
  left: 300px;
  width: calc(100% - 300px);
  overflow-y: auto;
}
.el-container {
  height: 100%;
}
</style>
