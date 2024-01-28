<template>
  <div
    @click="isLeftIcon = !isLeftIcon"
    :class="{
			menuMobileBg: true,
			menuMobileBgClose: !isLeftIcon
		}"
  ></div>
  <!-- <aside> -->
  <aside
    :class="{
			menuMobile: true,
			menuMobileClose: !isLeftIcon
		}"
    :style="{ width: isLeftIcon ? '200px' : '64px' }"
  >
    <!-- logo -->
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/logo.png" width="43" height="34" />
      <div v-show="isLeftIcon">
        <h1 class="logoTitle">锋团运营平台</h1>
      </div>
    </div>
    <!-- 菜单 -->
    <el-menu
      default-active="2"
      :collapse="!isLeftIcon"
      @open="handleOpen"
      @close="handleClose"
      background-color="$qf-bg-color"
      text-color="#fff"
      :collapse-transition="false"
    >
      <!-- 一级菜单 -->
      <template v-for="(item,index) in tableData" :key="index">
        <el-sub-menu :index="String(index)">
          <template #title>
            <i :class="['iconfont', item.icon]"></i>
            <span>{{ item.auth_name }}</span>
          </template>
          <!-- 二级菜单 -->
          <template v-for="(item2,index2) in item.children" :key="index2">
            <el-menu-item :index="`${index}-${index2}`">
              <i :class="['iconfont', item2.icon]"></i>
              {{ item2.auth_name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </aside>
</template>
<script setup lang="ts">

import { ref } from 'vue'
import tableData from '@/mock/menu'
import { storeToRefs } from 'pinia'
import { useAsideStore } from '@/stores/aside'

// 是否显示向左箭头图标
const asideStore = useAsideStore()
const { isLeftIcon } = storeToRefs(asideStore)

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped lang="scss">
// 侧边栏
aside {
  width: 200px;
  height: 100%;
  background-color: $qf-bg-color;
  transition: width 0.5s;

  // LOGO
  .logo {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 20px;
      color: #fff;
      margin-left: 5px;
      margin-top: 7px;
    }
  }

  // 菜单
  .el-menu {
    border-right: none;

    :deep(.el-sub-menu__title:hover),
    :deep(.el-menu-item:hover) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    :deep(.el-sub-menu__title) {
      font-size: 16px;
    }

    .iconfont {
      font-size: 16px;
      margin-top: -2px;
      margin-right: 12px;
    }
  }
}

// 移动端菜单样式
@media screen and (max-width: 990px) {
  .menuMobileBg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    z-index: 11;
    display: block;
  }
  .menuMobileBgClose {
    display: none !important;
  }

  .menuMobile {
    position: fixed;
    z-index: 11;
    left: 0;
    transition: all 0.5s;
  }
  .menuMobileClose {
    position: fixed;
    z-index: 10;
    left: -200px !important;
  }
}
</style>