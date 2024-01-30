<template>
  <QfBox>
    <template #filter>
      <QfForm
        :inline="true"
        :expand="true"
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
import mock from '@/mock/order/index'
import { reactive, ref } from 'vue'


const formItem: Form.Item[] = [
  // ...
  {
    field: 'order_sn',
    label: '订单编号',
    labelWidth: 80,
    rules: [],

    type: 'text',
    placeholder: '请输入订单编号'
  },
  {
    field: 'uname',
    label: '下单人',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入下单人',
    isExpand: true
  },
  {
    field: 'consignee',
    label: '收货人',
    labelWidth: 80,
    rules: [],
    type: 'text',
    placeholder: '请输入收货人',
    isExpand: true
  },
  {
    field: 'start_time',
    label: '创建于',
    labelWidth: 80,
    type: 'date',
    isExpand: true
  }
  // ...
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
    content: '重置',
    type: 'default',
    custom: false
  },
  {
    icon: 'icon-xiazai',
    content: '下载',
    type: 'primary',
    custom: false
  }
]

const tableData = reactive({
  list: mock.data,
  total: mock.total
})

const columns: Table.Columns[] = [
  { title: '编号', prop: 'id', align: 'center', fixed: 'left', width: 200 },
  { title: '订单编号', prop: 'id', align: 'center', width: 200 },
  { title: '下单人', prop: 'uname1', align: 'center' },
  { title: '收货人', prop: 'uname2', align: 'center' },
  { title: '总额', prop: 'price', align: 'center' },
  {
    title: '订单状态',
    type: 'tag',
    payload: {
      content: 'pay_state',
      type: 'success',
      render(index: number) {
        return [
          { msg: '未确认', type: 'info' },
          { msg: '已确认', type: 'success' },
          { msg: '已取消', type: 'danger' },
          { msg: '无效', type: 'warning' },
          { msg: '退货', type: 'warning' }
        ][index]
      }
    },
    width: 100
  },
  {
    title: '支付状态',
    type: 'tag',
    payload: {
      content: 'send_state',
      type: 'danger',
      render(index: number) {
        return [
          { msg: '未付款', type: 'info' },
          { msg: '付款中', type: '' },
          { msg: '已付款', type: 'success' }
        ][index]
      }
    },
    width: 100
  },
  {
    title: '配送状态',
    type: 'tag',
    payload: {
      content: 'send_state',
      type: 'info',
      render(index: number) {
        return [
          { msg: '未发货', type: 'danger' },
          { msg: '已发货', type: '' },
          { msg: '已收货', type: 'success' },
          { msg: '备货中', type: '' }
        ][index]
      }
    },
    width: 100
  },
  { title: '创建于', prop: 'created_at', align: 'center', width: 200 },
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
      {
        icon: 'icon-shanchu',
        type: 'danger',
        click: (row: any) => console.log('删除', row)
      }
    ]
  }
]

// 表单数据
const formData = reactive({
  pagenum: 1,
  pagesize: 40,
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