<template>
  <section class="tools">
    <!--左侧：按钮、面包屑-->
    <section class="left">
      <div class="btn" @click="isLeftIcon = !isLeftIcon">
        <el-icon>
          <Fold v-show="isLeftIcon"/>
          <Expand v-show="!isLeftIcon" />
        </el-icon>
      </div>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据分析</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <!--右侧：设置、全屏、头像-->
    <section class="right">
      <div class="btn">
        <el-icon>
          <Setting />
        </el-icon>
      </div>
      <div class="btn">
        <el-icon>
          <FullScreen />
        </el-icon>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="30" />
          <span class="nickname">戴敏</span>
          <el-icon class="el-icon--right">
           <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>


  </section>

</template>

<script setup lang="ts">
import { ArrowRight, Fold, Expand, ArrowDown, FullScreen, Setting } from '@element-plus/icons-vue'
import { useAsideStore } from '@/stores/aside'
import { storeToRefs } from 'pinia'

// 是否显示向左箭头图标
const asideStore = useAsideStore()
const { isLeftIcon } = storeToRefs(asideStore)

</script>

<style scoped lang="scss">
.tools {
  width: 100%;
  height: 50px;
  display: flex;

  .btn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;

    &:hover {
      background-color: #00000006;
      cursor: pointer;
    }
  }

  .left, .right {
    display: flex;
    align-items: center;
  }

  .left {
    width: 70%;
    height: 100%;
    justify-content: flex-start;


  }

  .right {
    width: 30%;
    height: 100%;
    justify-content: flex-end;

    .el-dropdown {
      margin-right: 2%;

      :deep(.el-dropdown-link) {
        display: flex;
        align-items: center;
      }
    }

    .nickname {
      margin-left: 5px;
    }

  }
}
</style>