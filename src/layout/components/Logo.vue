<template>
  <div class="logo">
    <img class="logo-img" src="@/assets/images/logo.png" alt="Sensetime Lambda" />
    <!-- <h2 v-show="!collapsed" class="title">Lambda Dashboard</h2> -->
    <span class="logo-title">{{ projectName }}</span>
  </div>
</template>

<script setup lang="ts">

defineProps({ collapsed: Boolean })
const projectName = "Lambda"
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  .logo-img {
    height: 64px;
  }

  .logo-title {
    margin-bottom: 0;
    font-weight: bold;
  }

}
</style>
