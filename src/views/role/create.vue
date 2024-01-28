<template>
  <el-card>
    <!--头部-->
    <template #header>
      <span>用户创建</span>
      <el-button type="default" @click="$router.push('/role')">返回</el-button>
    </template>
    <!--内容-->
    <el-form ref="formRef" :model="formData" size="large" label-width="80px" :rules="rules">
      <el-form-item label="角色名" prop="role_name">
        <el-input placeholder="请输入角色名称" v-model="formData.role_name"></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="role_desc">
        <el-input placeholder="请输入角色描述" v-model="formData.role_desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import {PostRolePayloadType} from '@/api/role/types'


// 表单数据
const formData = reactive<PostRolePayloadType>({
  role_name: '',
  role_desc: ''
})

// 表单验证规则
const rules = reactive<FormRules>({
  role_name: [
    { required: true, message: '请输入角色名', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  role_desc: [
    { required: true, message: '请输入角色描述', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ]
})

// 提交验证
const formRef = ref<FormInstance>()

// 表单提交
const onSubmit = () => {
  formRef.value!.validate((isSuccess: boolean) => {
    if (isSuccess) {
      alert('验证成功')
    }
  })
}

// 表单重置
const onReset = () => {
  formRef.value!.resetFields()
}

</script>

<style scoped lang="scss">

</style>