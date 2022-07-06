<!-- 统一管理所有 NaiveUI provider 的组件，这样会使代码清晰易懂 -->
<template>
  <!-- 调整主题 -->
  <n-config-provider :locale="lang" :theme="theme" :date-locale="dateLang" :theme-overrides="themeOverrides">
    <!-- 使用对话框 -->
    <n-dialog-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-loading-bar-provider>
            <slot name="default"></slot>
          </n-loading-bar-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  GlobalThemeOverrides
} from 'naive-ui'
import useConfig from '@/hooks/useConfig'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#4fb233',
    primaryColorHover: '#4fb233',
    fontSize: '16px',
    borderRadius: '16px',
  },
  //  Button: {
  //     textColor: '#FF0000'
  //   }

}
const { theme, lang, dateLang } = useConfig()

</script>
