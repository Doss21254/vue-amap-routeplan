# Vue3 高德地图路线规划Demo
## 技术栈
Vue3 + Vite + script setup + 高德地图JS API
## 实现功能
1. 初始化地图容器，生命周期钩子避免DOM加载报错
2. 驾车路线规划，自定义起点/终点坐标
3. 自定义路线线条样式、点位标记图标
4. onUnmounted会销毁地图实例，防止内存泄漏
## 本地启动步骤
1. 克隆仓库
git clone https://github.com/Doss21254/vue-amap-route.git
2. 进入项目
cd vue-amap-route
3. 安装依赖
npm install
4. 配置高德key：在地图初始化代码填入自己Web端密钥
5. 启动项目
npm run dev
