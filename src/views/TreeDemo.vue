<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>树</h5>
        <Tree
          selection-keys.sync="selectedTreeValue"
          :value="treeValue"
          selection-mode="checkbox"
        />
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <h5>树表</h5>
        <TreeTable
          selection-keys.sync="selectedTreeTableValue"
          :value="treeTableValue"
          :row-hover="true"
          selection-mode="checkbox"
        >
          <template #header>
            文件系统
          </template>
          <Column
            field="name"
            header="名称"
            :expander="true"
          />
          <Column
            field="size"
            header="大小"
          />
          <Column
            field="type"
            header="类型"
          />
        </TreeTable>
      </div>
    </div>
  </div>
</template>

<script>
import NodeService from '../api/NodeService'

export default {
  data() {
    return {
      treeValue: null,
      selectedTreeValue: null,
      treeTableValue: null,
      selectedTreeTableValue: null
    }
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService()
  },
  mounted() {
    this.nodeService.getTreeNodes().then((data) => (this.treeValue = data))
    this.nodeService
      .getTreeTableNodes()
      .then((data) => (this.treeTableValue = data))
  }
}
</script>

<style scoped></style>
