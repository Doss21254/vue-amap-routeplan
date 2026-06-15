# Vue3 高德地图JSAPI 驾车路线规划Demo
## 技术栈
Vite + Vue3 + script setup + 高德地图Web端jsAPI 2.0 + CDN引入
## Vite构建工具说明
1. Vite开发环境按需加载地图SDK，不会全量打包资源
2. build打包时压缩地图静态资源，优化页面加载速度
3. vite.config.ts配置路径别名，统一管理地图工具类

## 项目功能
1. 地图容器初始化，onUnmounted销毁实例防止内存泄漏
2. 自定义起点/终点，生成驾车路线轨迹
3. 自定义标记点位、路线线条样式
## 本地运行教程
git clone https://github.com/Doss21254/vue-amap-route.git
cd vue-amap-route
npm install
# 本地启动调试地图
npm run dev
# 打包部署静态站点
npm run build
