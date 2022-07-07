<template>
  <n-menu :indent="24" :options="menuOptions" />
</template>

<script setup lang="ts">
import { NIcon } from "naive-ui";
import type { MenuOption } from 'naive-ui'
import { h, Component } from 'vue'
import { RouterLink } from "vue-router";

import {
  App as AppIcon,
  CloudMonitoring as CloudMonitoringIcon,
} from '@vicons/carbon'

import {
  ExtensionPuzzleOutline as ExtensionIcon
} from '@vicons/ionicons5'



function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const routerLinkLabel = (key: string, name: string) =>
  h(
    RouterLink,
    {
      to: {
        name: key,
        params: {
          lang: 'zh-CN'
        }
      }
    },
    { default: () => name }
  )
const divider: MenuOption = {
  key: 'divider-1',
  type: 'divider',
  props: {
    style: {
      marginLeft: '32px'
    }
  }
}

// TODO: icon和title之间距离 调控
const menuOptions: MenuOption[] = [
  {
    label: routerLinkLabel('app', '应用管理'),
    title: '应用管理',
    key: 'app',
    icon: renderIcon(AppIcon),
  },
  // 分隔条
  divider,
  {
    label: routerLinkLabel('plugin', '插件管理'),
    title: '插件管理',
    key: 'plugin',
    icon: renderIcon(ExtensionIcon),
  },
  divider,
  {
    label: routerLinkLabel('function', '函数管理'),
    title: '函数管理',
    key: 'function',
    icon: renderIcon(CloudMonitoringIcon),
  },
  divider,
  {
    label: routerLinkLabel('monitor', '监控'),
    title: '监控',
    key: 'monitor',
    icon: renderIcon(CloudMonitoringIcon),
  },
  divider,
  {
    label: routerLinkLabel('about', '关于'),
    title: '关于',
    key: 'about',
    icon: renderIcon(CloudMonitoringIcon),
  },
  divider,
]

</script>

<style scoped>
</style>