<template>
  <el-dialog
    v-model="dialogVisible"
    title="权限编辑"
    width="50%"
    :before-close="() => dialogVisible = false"
  >
    <el-form v-if="dialogVisible" ref="formRef" :model="formData" label-width="80px" size="large" :rules="formRules">
      <el-form-item label="权限名称" prop="auth_name">
        <el-input placeholder="请填入权限名称" v-model="formData.auth_name"></el-input>
      </el-form-item>
      <el-form-item label="种类" prop="type">
        <el-radio-group v-model="formData.type">
          <el-radio :label="1" size="large" border>菜单</el-radio>
          <el-radio :label="2" size="large" border>按钮</el-radio>
        </el-radio-group>
      </el-form-item>
      <template v-if="formData.type === 1">
        <el-form-item label="路由路径" prop="path">
          <el-input placeholder="请填入路由" v-model="formData.path"></el-input>
        </el-form-item>
        <el-form-item label="组件缓存">
          <el-switch
            v-model="formData.keep_alive"
            inline-prompt
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-text="已缓存"
            inactive-text="未缓存"
            :active-value="1"
            :inactive-value="0"
          />
        </el-form-item>
        <el-form-item label="组件路径" prop="component">
          <el-input placeholder="请填入组件路径" v-model="formData.component"></el-input>
        </el-form-item>
      </template>
      <el-form-item label="所属权限" prop="pid">
        <el-select
          placeholder="请选择权限"
          v-model="formData.pid"
          size="large"
          style="width: 180px"
        >
          <el-option :value="0" label="顶级权限"></el-option>
          <el-option :value="1" label="用户模块"></el-option>
          <el-option :value="2" label="角色模块"></el-option>
          <el-option :value="3" label="权限模块"></el-option>
        </el-select>
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
import type { PutAuthPayloadType } from '@/api/auth/types'
import type { FormInstance, FormRules } from 'element-plus'

// 表单数据
const formData = reactive<PutAuthPayloadType>({
  auth_id: 0,
  auth_name: '',
  type: 1,
  path: '',
  component: '',
  keep_alive: 1,
  pid: 0
})

// 表单校验规则
const formRules = reactive<FormRules>({
  auth_name: [
    { required: true, message: '请输入权限名称', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  type: [
    { required: true, message: '请选择权限种类', trigger: 'change' }
  ],
  path: [
    { required: true, message: '请输入路由路径', trigger: 'blur' }
  ],
  component: [
    { required: true, message: '请输入组件路径', trigger: 'blur' }
  ],
  pid: [
    { required: true, message: '请选择所属权限', trigger: 'change' }
  ]
})

// 提交表单
const formRef = ref<FormInstance>()
const onSubmit = () => {
  formRef.value!.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const onReset = () => {
  formRef.value!.resetFields()
}

// 定义对话框显示状态
const dialogVisible = ref(false)

// 暴露数据
defineExpose({
  dialogVisible,
  formData
})

</script>

<style scoped lang="scss">

</style>