<template>
  <QfBox>
    <!--逻辑组件-->
    <AuthEdit ref="authEditRef" />

    <el-table class="qfTable" :data="tableData" :border="true" row-key="auth_id">
      <el-table-column label="权限名称" prop="auth_name" align="left" width="200"></el-table-column>
      <el-table-column label="种类" prop="type" align="center">
        <template #default="scoped">
          <!--          {{ scoped.row.type}}-->
          <el-tag v-if="scoped.row.type === 1">菜单</el-tag>
          <el-tag v-else type="success">按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="路由" prop="path" align="center">
        <template #default="scoped">
          <el-tag type="info" v-if="scoped.row.path">{{ scoped.row.path }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="组件缓存" prop="keep_alive" align="center">
        <template #default="scoped">
          <el-switch
            v-model="scoped.row.keep_alive"
            :active-value="0"
            :inactive-value="1"
            inline-prompt
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-text="未缓存"
            inactive-text="已缓存"
            disabled
          />
        </template>
      </el-table-column>
      <el-table-column label="组件路径" prop="component" align="center">
        <template #default="scoped">
          <el-tag type="info" v-if="scoped.row.component">{{ scoped.row.component }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right" width="240">
        <template #default="scoped">
          <el-button type="primary" size="small" @click="handleEdit(scoped.row)">
            <span class="iconfont icon-bianji"></span>
          </el-button>
          <el-button type="danger" size="small">
            <span class="iconfont icon-shanchu"></span>删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </QfBox>
</template>

<script lang="ts" setup>
import QfBox from '@/components/QfBox/index.vue'
import mock from '@/mock/menu/index'
import { ref } from 'vue'
import AuthEdit from '@/views/auth/components/authEdit.vue'

// 表格数据
const tableData = ref(mock)

const authEditRef = ref<InstanceType<typeof AuthEdit>>()
// 定义点击回显的方法
const handleEdit = (row: any) => {
  authEditRef.value!.dialogVisible = true
  authEditRef.value!.formData.auth_name = row.auth_name
  authEditRef.value!.formData.type = row.type
  authEditRef.value!.formData.path = row.path
  authEditRef.value!.formData.component = row.component
  authEditRef.value!.formData.keep_alive = row.keep_alive
  authEditRef.value!.formData.pid = row.pid
}

</script>

<style lang="scss" scoped>

</style>