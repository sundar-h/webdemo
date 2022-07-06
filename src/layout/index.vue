<template>
  <n-layout has-sider>
    <n-layout-sider
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered>

      <logo/>
      <aside-menu/>

    </n-layout-sider>

    <n-layout-content content-style="padding: 24px;">
      平山道
    </n-layout-content>
  </n-layout>
</template>
<script>
import Logo from "./components/Logo.vue";
import AsideMenu from "./components/AsideMenu.vue";
export default {
  components: {AsideMenu, Logo}
}
</script>