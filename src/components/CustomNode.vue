<!-- CustomNode.vue -->
<template>
  <div class="custom-node">
    <h2>自定义节点示例</h2>
    <div ref="container" class="flow-container"></div>
  </div>
</template>

<script setup>
import LogicFlow from '@logicflow/core'
import { onMounted } from 'vue'
import "@logicflow/core/lib/style/index.css";

onMounted(() => {
  const lf = new LogicFlow({
    container: container.value,
    grid: true
  })
  
  // 这里后续可以添加自定义节点的代码
  lf.render()
})
</script>

<style scoped>
.custom-node {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.flow-container {
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style> 