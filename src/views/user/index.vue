<template>
  <QfBox>
    <!--逻辑组件-->
    <UserEdit ref="UserEditRef"/>
    <AssignRole ref="assignRoleRef"/>

    <!-- 筛选 -->
    <template #filter>
      <el-form ref="formRef" :rules="formRules" :model="formData" label-width="80px" size="large" :inline="true">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input placeholder="请输入手机号" v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="角色名" prop="role_name">
          <el-input placeholder="请输入角色名" v-model="formData.role_name"></el-input>
        </el-form-item>
        <el-form-item label="创建于" v-show="isCollapse">
          <el-date-picker
            v-model="formData.create_at_temp"
            type="datetimerange"
            :shortcuts="shortcuts"
            range-separator="到"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item>
        <el-form-item label="更新于" v-show="isCollapse">
          <el-date-picker
            v-model="formData.updated_at_temp"
            type="datetimerange"
            :shortcuts="shortcuts"
            range-separator="到"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="onSubmit"><span class="iconfont icon-sousuo"></span>搜索</el-button>
          <el-button type="default" @click="onReset">重置</el-button>
          <el-button type="primary" link @click="isCollapse = !isCollapse">
            {{ isCollapse ? '收起' : '展开' }}
            <el-icon>
              <ArrowDown v-if="!isCollapse" />
              <ArrowUp v-else />
            </el-icon>
          </el-button>
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
    <el-table class="qfTable" :data="tableData.data" :border="true">
      <el-table-column align="center" label="复选" fixed="left" type="selection" width="55"></el-table-column>
      <el-table-column align="center" label="编号" prop="id" width="180" sortable></el-table-column>
      <el-table-column align="center" label="所属角色" prop="role_name" width="140"></el-table-column>
      <el-table-column align="center" label="头像" prop="avatar" width="160">
        <template #default="scoped">
          <el-avatar
            :size="30"
            :src="scoped.row.avatar"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户名" prop="uname" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="手机号" prop="mobile"></el-table-column>
      <el-table-column align="center" label="登录" width="140">
        <template #default="scoped">
          <el-switch
            v-model="scoped.row.state"
            :active-value="0"
            :inactive-value="1"
            inline-prompt
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-text="未冻结"
            inactive-text="已冻结"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建于" prop="created_at"></el-table-column>
      <el-table-column align="center" label="更新于" prop="updated_at"></el-table-column>
      <el-table-column align="center" label="操作" fixed="right" width="240">
        <template #default="scoped">
          <el-button type="primary" size="small" @click="handleEdit(scoped.row)">
            <span class="iconfont icon-bianji"></span>
          </el-button>
          <el-button type="success" size="small" @click="handleAssign(scoped.row)">分配角色</el-button>
          <el-button type="danger" size="small" @click="handleDel">
            <span class="iconfont icon-shanchu"></span>删除
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

<script lang="ts" setup>
import QfBox from '@/components/QfBox/index.vue'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import type { GetUserPayloadType, GetUserResType } from '@/api/user/types'
import { reactive, ref } from 'vue'
import {checkPassword } from '@/utils/validate'
import type { FormInstance, FormRules } from 'element-plus'
import mock from '@/mock/user'
import UserEdit from './components/userEdit.vue'
import AssignRole from './components/assignRole.vue'
import { useConfirm} from '@/hooks/useConfirm'

// 收起&展开
const isCollapse = ref<boolean>(true)

// 表单数据
const formData = reactive<GetUserPayloadType>({
  pagenum: 1,
  pagesize: 40,
  username: '',
  mobile: '',
  role_name: '',
  created_at: '',
  updated_at: '',
  create_at_temp: [],
  updated_at_temp: []
})

// 表单校验规则
const formRules = reactive<FormRules>({
  username: [
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  mobile: [
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
  ],
  role_name: [
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  password: [
    { validator: checkPassword, trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
})

// 表单提交
const formRef = ref<FormInstance>()
const onSubmit = () => {
  formRef.value!.validate((isSuccess) => {
    if (isSuccess) {
      console.log('搜索：', formData)
    }
  })
}
const onReset = () => {
  formRef.value!.resetFields()
}

// 表格数据
const tableData = reactive<GetUserResType>({
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

// 接受编辑用户信息子组件传递的数据
const UserEditRef = ref()

// 定义点击弹框回显数据的方法
const handleEdit = (row: any) => {
  console.log(row)
  // 1.显示弹框
  UserEditRef.value!.dialogVisible = true
  // 2.将数据传递给子组件
  UserEditRef.value!.formData.username = row.uname
  UserEditRef.value!.formData.mobile = row.mobile
  UserEditRef.value!.formData.avatar = row.avatar
}

// 接受分配权限子组件传递的数据
const assignRoleRef = ref()

const handleAssign = (row: any) => {
  assignRoleRef.value!.dialogVisible = true
  assignRoleRef.value!.formData.uname = row.uname
  assignRoleRef.value!.formData.role_name = row.role_name
  assignRoleRef.value!.formData.user_id = row.id
  assignRoleRef.value!.formData.role_id = row.role_id
}

// 删除按钮
const handleDel = () => {
  useConfirm()
}

</script>

<style lang="scss" scoped>

</style>