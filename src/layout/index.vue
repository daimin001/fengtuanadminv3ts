<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <Aside />
    <!-- 主体 -->
    <main>
      <!-- 头部 -->
      <header>
        <Tools />
        <Tabs />
      </header>
      <!-- 内容 -->
      <section class="content">
        <h1 v-for="num in 30" :key="num">你好</h1>
      </section>
      <!-- 底部 -->
      <footer>2023 © QFADMIN 前端扛把子@千锋教育 🔥 👊🏻👊🏻👊🏻</footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import Aside from './components/aside.vue'
import Tools from './components/tools.vue'
import Tabs from './components/tabs.vue'


</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;

  display: flex;

  // 主体
  main {
    flex: 1;
    overflow: hidden;
    background-color: #f0f2f5;

    // 头部
    header {
      width: 100%;
      height: 90px; // 50 + 40
      background-color: #fff;
    }

    // 内容
    .content {
      width: 96%;
      height: calc(100% - 170px); // header 90 + self 40 + footer 40
      margin: 20px auto;
      background-color: #fff;
      overflow-y: scroll;
    }

    // 底部
    footer {
      width: 100%;
      height: 39px;
      background-color: #fff;

      font-size: 12px;
      border-top: 1px solid #e4e7ed;
      color: rgba(0, 0, 0, 0.4509803922);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
