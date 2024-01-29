<template>
  <el-dialog
    v-model="dialogVisible"
    title="角色编辑"
    width="50%"
    :before-close="() => dialogVisible = false"
  >
    <!--内容-->
    <el-form v-if="dialogVisible" ref="formRef" :model="formData" size="large" label-width="80px" :rules="rules">
      <el-form-item label="角色名" prop="role_name">
        <el-input placeholder="请输入角色名称" v-model="formData.role_name"></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="role_desc">
        <el-input placeholder="请输入角色描述" v-model="formData.role_desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即编辑</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import type { PutRolePayloadType } from '@/api/role/types'


// 表单数据
const formData = reactive<PutRolePayloadType>({
  role_id: 0,
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

// 弹窗显示
const dialogVisible = ref<boolean>(false)

// 暴露给父组件
defineExpose({
  dialogVisible,
  formData,
})

</script>

<style scoped lang="scss">

</style>