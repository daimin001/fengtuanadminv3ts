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
import mock from '@/mock/fsdy/film'
import { reactive, ref } from 'vue'

// mock表单数据
const tableData = reactive({
  list: mock.list,
  total: mock.total
})

const formItem: Form.Item[] = [
  // ...
  {
    field: 'actors',
    label: '',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入标题/专辑/作者'
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
  {
    icon: 'icon-jiahao',
    content: '添加',
    type: 'primary',
    click: formData => console.log('表单数据', formData),
    custom: false
  },
]


const columns: Table.Columns[] = [
  { title: '编号', prop: 'cinema_id', align: 'center', fixed: 'left', width: 80 },
  { title: '2D/3D', prop: 'filmType', align: 'center', width: 200 },
  {
    title: '封面',
    align: 'center',
    type: 'img',
    width: 150,
    payload: {
      width: 40,
      height: 40,
      src: 'poster',
      alt: 'photos'
    }
  },
  { title: '标题', prop: 'name', align: 'center', width: 360, tooltip: true },
  { title: '观众评分', prop: 'grade', align: 'center' },
  // { title: '主演', prop: 'actors', align: 'center' },
  { title: '地区', prop: 'nation', align: 'center', tooltip: true },
  { title: '时间/分钟', prop: 'runtime', align: 'center', tooltip: true },
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
      }
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