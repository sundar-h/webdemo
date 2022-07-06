import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src',
      }
    },
    server: {
      // 这部分是为了跨域
      proxy: {
        '/api': {
          target: env.VITE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, "/v1/"),
        }
      }
    }
  }
})
