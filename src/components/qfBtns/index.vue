<script setup lang="ts">
import { useTabsStore } from '@/stores/tabs'
const { jump } = useTabsStore()

type Props = {
	path: string
	label: string
	show?: string
}
withDefaults(defineProps<Props>(), {
	show: 'deletes,create'
})
</script>

<template>
	<el-row>
		<el-button v-if="show?.includes('deletes')" type="danger" @click="$emit('deletes')">
			<span class="iconfont icon-shanchu"></span>批量删除
		</el-button>
		<el-button v-if="show?.includes('create')" type="primary" @click="jump({ path: path, label: label })">
			<span class="iconfont icon-jiahao"></span>添加
		</el-button>
		<slot></slot>
	</el-row>
</template>

<style lang="scss" scoped></style>
