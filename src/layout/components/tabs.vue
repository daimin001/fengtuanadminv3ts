<template>
  <section class="tabs">
    <div class="left">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        class="demo-tabs"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="right">
      <el-dropdown>
				<span class="el-dropdown-link">
					<el-button type="primary" size="small">
						更多
						<el-icon class="el-icon--right"> <ArrowDown /> </el-icon>
					</el-button>
				</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon class="el-icon--right"> <Refresh /> </el-icon>
              刷新当前页
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon class="el-icon--right"> <FullScreen /> </el-icon>
              当前页全屏
            </el-dropdown-item>

            <el-dropdown-item divided>
              <el-icon class="el-icon--right"> <Remove /> </el-icon>
              关闭当前
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon class="el-icon--right"> <CircleClose /> </el-icon>
              关闭其他
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon class="el-icon--right"> <FolderDelete /> </el-icon>
              关闭所有
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDown, Refresh, FullScreen, Remove, CircleClose, FolderDelete } from '@element-plus/icons-vue'
import { ref } from 'vue'

const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const removeTab = (targetName: string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<style scoped lang="scss">
.tabs {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px #00152914;
  background-color: #fff;

  z-index: 2;
  position: relative;

  display: flex;
  align-items: center;

  .left {
    flex: 1;
    overflow: hidden;
    background-color: #fff;

    .el-tabs {
      :deep(.el-tabs__item) {
        border: none;
        color: #ccc;
      }
      :deep(.el-tabs__header) {
        margin: 0;
        border-bottom: none;
      }
      :deep(.el-tabs__nav) {
        border: none;
      }
      :deep(.is-active) {
        color: #409eff;
        border-bottom: 2px solid #409eff;
      }
    }
  }

  .right {
    display: flex;
    overflow: hidden;
    align-items: center;
  }
}

</style>