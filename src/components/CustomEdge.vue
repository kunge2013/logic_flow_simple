<!-- CustomEdge.vue -->
<template>
  <div class="custom-edge">
    <h2>自定义连线示例</h2>
    <div ref="container" class="flow-container"></div>
  </div>
</template>

<script setup>
import LogicFlow from '@logicflow/core'
import { onMounted, ref } from 'vue'
import "@logicflow/core/lib/style/index.css";

const container = ref(null)

onMounted(() => {
  const lf = new LogicFlow({
    container: container.value,
    grid: true
  })
  
  // 这里后续可以添加自定义连线的代码
  lf.render()
})
</script>

<style scoped>
.custom-edge {
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