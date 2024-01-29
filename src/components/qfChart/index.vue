<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

type Props = {
	class: string
	option: API.Chart.Option
}
const props = defineProps<Props>()

onMounted(async () => {
	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.querySelector(`.${props.class}`) as HTMLElement)
	// 指定图表的配置项和数据
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(props.option)
})
</script>

<template>
	<div :class="['container', props.class]"></div>
</template>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
}
</style>
