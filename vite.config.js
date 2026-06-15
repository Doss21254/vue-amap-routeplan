import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // @ 直接等价 src，导入组件不用写../../
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    open: true, // 启动自动打开浏览器，提升开发效率
    host: '0.0.0.0' // 允许局域网他人访问你的页面，团队调试方便
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // 调整分包体积告警阈值，优化打包体积
    // 生产环境分包拆分，避免单js文件过大，页面加载更快
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
        }
      }
    }
  }
})