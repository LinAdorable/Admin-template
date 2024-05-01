<template>
  <div class="sys-header">
    <div class="left">logo</div>
    <div class="right">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          {{ userInfo.userName }}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">修改面</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
let userInfo =  reactive({
  userName:'张三'
})
</script>
<style lang="scss">
.sys-header {
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  .left {
    width: 200px;
    height: 100%;
    background-color: #fff;
    text-align: center;
  }
  .right {
    height: 100%;
    width: calc(100% - 200px);
    text-align: right;
    box-sizing: border-box;
    padding: 0 10px;
  }
}
</style>
