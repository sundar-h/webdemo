<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="Sensetime" :class="{ 'mr-2': !collapsed }" />
<!--    <h2 v-show="!collapsed" class="title">Lambda Dashboard</h2>-->
  </div>
</template>

<script setup lang="ts">

defineProps({collapsed: Boolean})
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

img {
  width: auto;
  height: 32px;
}

.title {
  margin-bottom: 0;
}

}
</style>
