<template>
  <QfBox>
    <template #filter>
      <QfForm
        :inline="true"
        :labelWidth="30"
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
import mock from '@/mock/dcm/road'
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
    label: '昵称',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入昵称'
  },
  {
    field: 'type',
    label: '类型',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入类型'
  },
  {
    field: 'info',
    label: '信息',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入信息'
  },
  {
    field: 'location',
    label: '位置',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入位置'
  },
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
  { title: '编号', prop: 'road_id', align: 'center', fixed: 'left', width: 80 },
  { title: '状态', prop: 'state', align: 'center', width: 200 },
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
  { title: '类型', prop: 'type', align: 'center' , width: 180},
  { title: '信息', prop: 'info', align: 'center', width: 180},
  {
    title: '路况图片',
    align: 'center',
    type: 'imgs',
    width: 280,
    payload: {
      width: 40,
      height: 40,
      src: 'imgsArr',
      alt: 'imgsArr'
    }
  },
  { title: '位置', prop: 'location', align: 'center', width: 180},

  { title: '经度', prop: 'latitude', align: 'center' , width: 180},
  { title: '纬度', prop: 'longitude', align: 'center', width: 180},
  { title: '创建于', prop: 'created_at', align: 'center' , width: 180},
  { title: '更新于', prop: 'updated_at', align: 'center', width: 180},
  {
    title: '操作',
    width: 120,
    fixed: 'right',
    type: 'operations',
    payload: [
      {
        icon: 'icon-shanchu',
        type: 'danger',
        click: (row: any) => console.log('修改', row)
      },
    ]
  },
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