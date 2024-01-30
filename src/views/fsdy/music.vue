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
    <el-table :border="true" :data="tableData.list" class="qfTable">
      <el-table-column label="编号" prop="id" fixed="left" align="center" width="120"></el-table-column>
      <el-table-column label="封面" prop="img" align="center">
        <template #default="scoped">
          <img :src="scoped.row.img" alt="" width="40" height="40">
        </template>
      </el-table-column>
      <el-table-column label="标题" prop="title" align="center" width="200"></el-table-column>
      <el-table-column label="作者" prop="author" align="center" width="200"></el-table-column>
      <el-table-column label="专辑" prop="album" align="center" width="260"></el-table-column>
      <el-table-column label="时长/s" prop="time" align="center"></el-table-column>
      <el-table-column label="歌词" prop="lrc" align="center">
        <template #default="scoped">
          <el-tag type="success" v-if="scoped.row.lrc">是</el-tag>
          <el-tag type="success" v-else>否</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="播放" prop="src" align="center" width="400px">
        <template #default="scoped">
          <audio :src="scoped.row.src" controls style="height: 20px"></audio>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120" fixed="right" align="center">
        <el-button type="danger" size="small">
          <span class="iconfont icon-shanchu"></span>删除
        </el-button>
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
import QfBox from '@/components/qfBox/index.vue'
import QfForm from '@/components/qfForm/index.vue'
import mock from '@/mock/fsdy/music'
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