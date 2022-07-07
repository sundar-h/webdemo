<template>
   <router-view v-slot="{ Component, route }">
      <!-- 过度效果 -->
      <transition appear>
         <!-- keep-alive + component 缓存组件，避免重复渲染 -->
         <!-- <keep-alive :include="a"> -->
         <!-- <p>Main</p> -->
         <!-- <component> 动态组件: tab切换; :is=组件名或组件对象, 切换以后会被卸载，使用keep-alive 保持 -->
         <component :is="Component" :key="route.fullPath" />
         <!-- </keep-alive> -->
      </transition>
   </router-view>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>