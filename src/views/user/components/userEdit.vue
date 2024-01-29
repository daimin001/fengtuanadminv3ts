<template>
  <el-dialog class="box-card"
             v-model="dialogVisible"
             title="用户编辑"
             width="50%"
             :before-close="() => dialogVisible = false">
    <!--内容-->
    <el-form v-if="dialogVisible" ref="formRef" :model="formData" size="large" label-width="80px" :rules="formRules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="formData.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <QfUpload v-model="formData.avatar" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onsubmit()">立即编辑</el-button>
        <el-button type="default" @click="onreset()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { checkMobile } from '@/utils/validate'
import type { PutUserPayloadType } from '@/api/user/types'
import QfUpload from '@/components/qfUpload/index.vue'

// 表单数据
const formData = reactive<PutUserPayloadType>({
  user_id: 0,
  username: '',
  password: '',
  mobile: '',
  avatar: ''
})

// 表单校验规则
const formRules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  password: [
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    // { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' },
    { validator: checkMobile, trigger: 'blur' }
  ],
  avatar: [
    { required: true, message: '请上传头像', trigger: 'blur' }
  ]
})

// 提交表单
const formRef = ref<FormInstance>(null)
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

// 表单数据回显
defineExpose({
  dialogVisible,
  formData,
})

</script>

<style scoped lang="scss">

</style>