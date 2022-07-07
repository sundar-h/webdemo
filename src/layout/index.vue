<template>
  <!-- TODO: 智商有一个header 空白区域，本视图没有指定、全占页面空间 -->
  <n-hr align=center width=300 color=#987cb9 SIZE=1></n-hr>

  <n-layout has-sider>
    <n-layout-sider collapse-mode="width" :collapsed-width="64" :width="240" show-trigger="bar"
      content-style="padding: 24px;" bordered>

      <!-- 图标logo -->
      <logo />
      <!-- 左侧导航栏 -->
      <aside-menu />

    </n-layout-sider>

    <n-layout-content content-style="padding: 24px;">
      <!-- 菜单栏、面包屑 -->
      <main-header></main-header>
      <!-- tabs -->
      <main-tabs></main-tabs>
      <!-- 路由views -->
      <main-content></main-content>
    </n-layout-content>
  </n-layout>

</template>

<script setup lang="ts">
import Logo from "./components/Logo.vue";
import AsideMenu from "./components/AsideMenu.vue";
import MainHeader from "@/layout/components/MainHeader.vue";
import MainTabs from "./components/MainTabs.vue";
</script>

<style scoped>
.layout-sider {
  min-height: 100vh;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  position: relative;
  z-index: 13;
  transition: all 0.2s ease-in-out;
}

.layout-sider-fix {
  position: fixed;
  top: 0;
  left: 0;
}
</style>