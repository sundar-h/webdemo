<template>
   <n-breadcrumb>
      <n-breadcrumb-item>
         <n-dropdown :options="options1">
            <div class="trigger">
               I'm ok
            </div>
         </n-dropdown>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
         <n-dropdown :options="options2">
            <div class="trigger">
               I'm ok
            </div>
         </n-dropdown>
      </n-breadcrumb-item>
   </n-breadcrumb>
</template>

<script setup lang="ts">
const options1 = [
   {
      label: 'David Tao',
      key: 1
   },
   {
      label: '黑色柳丁',
      key: 2
   }
]
const options2 = [
   {
      label: '小镇姑娘',
      key: 1
   },
   {
      label: '普通朋友',
      key: 2
   }
]
</script>