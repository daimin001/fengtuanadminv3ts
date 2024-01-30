<template>
  <QfBox>
    <template #filter>
      <QfForm
        :inline="true"
        :labelWidth="80"
        :formItem="formItem"
        :formBtn="formBtn"
      ></QfForm>
    </template>
    <QfTable
      :data="tableData.list"
      :columns="columns"
    >
    </QfTable>
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
import QfBox from '@/components/qfBox/index.vue'
import QfForm from '@/components/qfForm/index.vue'
import mock from '@/mock/dcm/user'
import { reactive, ref } from 'vue'

// mock表单数据
const tableData = reactive({
  list: mock.list,
  total: mock.total
})

const formItem: Form.Item[] = [
  // ...
  {
    field: 'nickname',
    label: '用户名',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入用户名'
  }
]

const formBtn: Form.Btn[] = [
  {
    icon: 'icon-sousuo',
    content: '搜索',
    type: 'primary',
    click: formData => console.log('表单数据', formData),
    custom: false
  },
]


const columns: Table.Columns[] = [
  { title: '编号', prop: 'user_id', align: 'center', fixed: 'left', width: 200 },
  { title: '微信唯一标识', prop: 'openid', align: 'center', width: 360, tooltip: true },
  { title: '昵称', prop: 'nickname', align: 'center' },
  {
    title: '头像',
    align: 'center',
    type: 'img',
    payload: {
      width: 40,
      height: 40,
      src: 'avatar',
      alt: 'avatar'
    }
  },
  { title: '创建于', prop: 'created_at', align: 'center' , width: 180},
  { title: '更新于', prop: 'updated_at', align: 'center', width: 180},
  {
    title: '操作',
    width: 240,
    fixed: 'right',
    type: 'operations',
    payload: [
      {
        icon: 'icon-bianji',
        type: 'primary',
        click: (row: any) => console.log('修改', row)
      },
    ]
  }
]

// 表单数据
const formData = reactive({
  pagenum: 1,
  pagesize: 40
})

// 分页的事件
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

</script>

<style lang="scss" scoped>

</style>