<template>
  <div class="qfBox">
    <div class="qfFilterBox" v-if="slots.filter">
      <slot name="filter"></slot>
    </div>
    <div class="qfTableBox">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
const slots = useSlots()
</script>

<style scoped lang="scss">
.qfBox {
  height: 100%;
  display: flex;
  flex-direction: column;

  .qfFilterBox,
  .qfTableBox {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 12px rgb(0 0 0 / 5%);
  }
  .qfFilterBox {
    padding: 16px 16px;
    padding-bottom: 0;
    margin-bottom: 16px;
  }
  .qfTableBox {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 16px;
    // 按钮控件 批量删除、添加
    // 表格 flex 1
    // 分页
    display: flex;
    flex-direction: column;

    :global(.qfTable) {
      flex: 1;
      overflow: hidden;
    }
    // .el-table {
    // 	flex: 1; // 表格y轴滚动的秘密 =》 冻结表头 (el-table固定高度就可以固定表头)
    // }
  }
}
</style>