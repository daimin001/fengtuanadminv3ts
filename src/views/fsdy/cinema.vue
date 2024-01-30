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
    <!--按钮组-->
    <el-row>
      <el-button type="primary">
        <span class="iconfont icon-jiahao"></span>添加
      </el-button>
      <el-button type="success">
        <span class="iconfont icon-diqiu"></span>&nbsp;地图找店
      </el-button>
    </el-row>
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
import mock from '@/mock/fsdy/cinema'
import { reactive, ref } from 'vue'

// mock表单数据
const tableData = reactive({
  list: mock.list,
  total: mock.total
})

const formItem: Form.Item[] = [
  // ...
  {
    field: 'title',
    label: '影院名称',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入影院名称'
  }
]

const formBtn: Form.Btn[] = [
  {
    icon: 'icon-sousuo',
    content: '搜索',
    type: 'primary',
    click: formData => console.log('表单数据', formData),
    custom: false
  }
]


const columns: Table.Columns[] = [
  { title: '编号', prop: 'store_id', align: 'center', fixed: 'left', width: 80 },
  { title: '影院名称', prop: 'title', align: 'center', width: 200 },
  { title: '均价', prop: 'avg_price', align: 'center', width: 360, tooltip: true },
  { title: '电话', prop: 'tel', align: 'center' },
  { title: '影院地址', prop: 'address', align: 'center' },
  { title: '描述', prop: 'description', align: 'center', tooltip: true },
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