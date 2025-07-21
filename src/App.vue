<script setup>
// 不需要导入组件，因为已经在路由中定义了
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/basic">基础流程图</router-link> |
      <router-link to="/custom-node">自定义节点</router-link> |
      <router-link to="/custom-edge">自定义连线</router-link>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  margin-bottom: 2rem;
}

nav a {
  color: #666;
  text-decoration: none;
  padding: 0 1rem;
}

nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .logo {
    margin: 0 0 1rem;
  }
}
</style>
