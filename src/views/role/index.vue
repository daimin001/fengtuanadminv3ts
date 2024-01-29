<template>
  <QfBox>
    <!--逻辑组件-->
    <RoleEdit ref="roleEditRef" />
    <AssignAuth ref="assignAuthRef" />

    <!-- 筛选 -->
    <template #filter>
      <el-form ref="formRules" :model="formData" label-width="80px" size="large" :inline="true">
        <el-form-item label="角色名" prop="role_name">
          <el-input v-model="formData.role_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit"><span class="iconfont icon-sousuo"></span>搜索</el-button>
          <el-button type="default" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
    <!-- 内容 -->
    <!-- 按钮控件 -->
    <el-row>
      <el-button type="danger"><span class="iconfont icon-shanchu"></span>批量删除</el-button>
      <el-button type="primary" @click="$router.push('/role/create')"><span class="iconfont icon-jiahao"></span>添加
      </el-button>
    </el-row>
    <!-- 表格 -->
    <el-table class="qfTable" :data="tableData.data" border>
      <el-table-column label="复选" align="center" type="selection" width="55" fixed="left" />
      <el-table-column label="编号" prop="id" align="center" sortable></el-table-column>
      <el-table-column label="角色名称" prop="role_name" align="center"></el-table-column>
      <el-table-column label="角色描述" prop="role_desc" align="center"></el-table-column>
      <el-table-column label="创建于" prop="created_at" align="center" width="180"></el-table-column>
      <el-table-column label="更新于" prop="updated_at" align="center" width="180"></el-table-column>
      <el-table-column label="操作" align="center" fixed="right" width="240">
        <template #default="scoped">
          <el-button type="primary" size="small" @click="handleEdit(scoped.row)">
            <span class="iconfont icon-bianji"></span>
          </el-button>
          <el-button type="success" size="small" @click="handleAssignAuth(scoped.row)">分配权限</el-button>
          <el-button type="danger" size="small" @click="handleDel">
            <span class="iconfont icon-shanchu"></span>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-model:current-page="formData.pagenum"
      v-model:page-size="formData.pagesize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </QfBox>
</template>

<script setup lang="ts">
import QfBox from '@/components/qfBox/index.vue'
import { reactive, ref } from 'vue'
import type { GetRolePayloadType, GetRoleResType } from '@/api/role/types'
import mock from '@/mock/role'
import type { FormInstance, FormRules } from 'element-plus'
import RoleEdit from './components/roleEdit.vue'
import AssignAuth from './components/assignAuth.vue'
import { useConfirm} from '@/hooks/useConfirm'

// 表单数据
const formData = reactive<GetRolePayloadType>({
  pagenum: 1,
  pagesize: 40,
  role_name: ''
})

// 表单校验规则
const formRules = reactive<FormRules>({
  role_name: [
    { required: true, message: '请输入角色名', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ]
})

// 表单提交
const formRef = ref<FormInstance>()
const handleSubmit = () => {
  formRef.value?.validate((isSuccess) => {
    if (isSuccess) {
      console.log('搜索：', formData)
    }
  })
}
const handleReset = () => {
  formRef.value!.resetFields()
}

// 表格数据
const tableData = reactive<GetRoleResType>({
  data: mock.data,
  total: mock.total
})


// 分页的事件
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

// 接受子组件暴露的方法
const roleEditRef = ref<InstanceType<typeof RoleEdit>>()
const handleEdit = (row: any) => {
  // console.log(roleEditRef.value)
  roleEditRef.value!.dialogVisible = true
  roleEditRef.value!.formData.role_id = row.id
  roleEditRef.value!.formData.role_name = row.role_name
  roleEditRef.value!.formData.role_desc = row.role_desc
}

// 定义角色分配权限的逻辑
const assignAuthRef = ref()

// 点击分配权限按钮
const handleAssignAuth = (row: any) => {
  assignAuthRef.value.status = true
}

// 删除
const handleDel = () => {
  useConfirm()
}


// console.log('mock', mock.data)

</script>

<style scoped lang="scss">

</style>