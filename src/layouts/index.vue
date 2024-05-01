<template>
  <div class="sys-layout">
    <!-- 顶部导航 -->
    <div class="sys-layout-navbar">
      <Navbar />
    </div>
      <!-- 侧边导航 -->
      <Sidebar class="sys-layout-sidebar"/>
    <div class="sys-layout-appmian">
    <!-- 内容区域 -->
    <AppMain />
  </div>
  </div>
</template>
<script setup name="Layout">
import { AppMain, Navbar, Sidebar } from "./components";
</script>

<style lang="scss">
.sys-layout {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  .sys-layout-navbar {
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .sys-layout-sidebar {
    position: absolute;
    top: 60px;
    height: calc(100vh - 60px);
    width: 200px;
  }
  .sys-layout-appmian {
    width: calc( 100vw - 200px);
    height: calc( 100vh - 60px);
    position: relative;
    left: 200px;
    top: 60px;
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
