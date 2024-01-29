<template>
  <el-drawer v-model="status" direction="rtl" title="角色分配权限" width="30%" :before-close="() => (status = false)">
    <!-- 内容 -->
    <el-form v-if="status" :model="formData" label-width="80px">
      <el-form-item label="角色名称">
        <el-input v-model="formData.role_name" disabled :value="formData.role_name"></el-input>
      </el-form-item>
      <el-form-item label="菜单权限">
        <el-tree
          :data="tableData"
          show-checkbox
          default-expand-all
          node-key="id"
          highlight-current
          :props="defaultProps"
        />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">立即分配</el-button>
        <el-button type="default" @click="status = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import mock from '@/mock/auth/index'

// mock数据
const tableData = reactive(mock)

const defaultProps = {
  children: 'children2',
  label: 'label2'
}

// 表单数据
const formData = reactive({
  role_name: '超级管理员',
  role_id: 1,
  auth_ids: '',
  auth_ids_son: ''
})

// 对话框逻辑
const status = ref(false)
defineExpose({
  status
})


</script>

<style lang="scss" scoped></style>
