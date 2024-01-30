<script setup lang="ts">
// 原来
// defineProps({
//   a: number,
//   b: string,
//   c: {
//     type: number,
//     default: 默认值.
//   }
// })

// 现在
// type Props = {
//   a?: number
//   b?: number
// }
// defineProps<Props>()

// 现在 => 默认值
// type Props = {
//   a: number
//   b: number
//   c?: string
// }
// withDefaults(defineProps<Props>(), {
//   c: '默认值'
// })

type Props = {
  data: Object[]
  columns: Table.Columns[]
}
defineProps<Props>()
</script>
<template>
  <el-table :border="true" :data="data" class="qfTable">
    <!-- 动态生成列 start -->
    <template v-for="(col, colI) in columns" :key="colI">
      <!-- 自定义列 start -->
      <el-table-column v-if="col.type">
        <template #default="scope">
          <!-- 可能是img start -->
          <template v-if="col.type === 'img'">
            <img
              :src="scope.row[col!.prop]"
              :style="{
                width: col.payload!.width + 'px',
                height: col.payload!.height + 'px'
              }"
            />
          </template>
          <!-- 可能是img end -->

          <!-- 可能是tag start -->

          <!-- 可能是tag end -->
        </template>
      </el-table-column>
      <!-- 自定义列 end -->
      <!-- 固定列 start -->
      <el-table-column
        v-else
        :label="col.title"
        :prop="col.prop"
        :align="col.align"
        :width="col.width"
        :fixed="col.fixed"
        :show-overflow-tooltip="col.tooltip"
      />
      <!-- 固定列 end -->
    </template>
    <!-- 动态生成列 start -->
  </el-table>
</template>
<style lang="scss" scoped></style>
