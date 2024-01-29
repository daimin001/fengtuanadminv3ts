<template>
  <el-dialog
    v-model="dialogVisible"
    title="分配角色"
    width="50%"
    :before-close="() => dialogVisible = false">
    <!--内容-->
    <el-form v-if="dialogVisible" ref="formRef" :model="formData" size="large" label-width="80px" :rules="formRules">
      <el-form-item label="当前用户" prop="uname">
        <el-input v-model="formData.uname" placeholder="请输入用户名" disabled></el-input>
      </el-form-item>
      <el-form-item label="当前角色" prop="role_name">
        <el-input v-model="formData.role_name" placeholder="请输入角色名" disabled></el-input>
      </el-form-item>
      <el-form-item label="选择角色" prop="role_id">
        <el-select v-model="formData.role_id">
          <el-option label="普通管理员" :value="1"></el-option>
          <el-option label="超级管理员" :value="2"></el-option>
          <el-option label="财务" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onsubmit()">立即更新</el-button>
        <el-button type="default" @click="onreset()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { PutAssignRolePayloadType } from '@/api/user/types'

// 表单数据
const formData = reactive<PutAssignRolePayloadType>({
  uname: '',
  role_name: '',
  user_id: 0,
  role_id: 1,
})

// 表单校验规则
const formRules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  role_id: [
    { required: true, message: '请选择角色', trigger: 'change' }
  ]
})

// 提交表单
const formRef = ref<FormInstance>()
const onsubmit = () => {
  formRef.value!.validate((valid) => {
    if (valid) {
      console.log('submit!')
    }
  })
}

const onreset = () => {
  formRef.value!.resetFields()
}

// 弹出框显示隐藏
const dialogVisible = ref<boolean>(false)


defineExpose({
  dialogVisible,
  formData,
})

</script>

<style scoped lang="scss">

</style>