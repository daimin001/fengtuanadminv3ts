<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
	w: {
		type: Number,
		default: 1920
	},
	h: {
		type: Number,
		default: 1080
	},
	background: {
		type: String,
		default: ''
	}
})

const background = ref<string>(props.background)

onMounted(() => {
	const getScale = () => {
		//根据屏幕的变化适配的比例
		// const w = document.documentElement.clientWidth / 1920
		// const h = document.documentElement.clientHeight / 1080
		const w = document.documentElement.clientWidth / props.w
		const h = document.documentElement.clientHeight / props.h
		const scale = w < h ? w : h
		//缩放比例
		const screen = document.querySelector('.screen') as HTMLElement
		screen.style.transform = `scale(${scale})  translate(-50%, -50%)`
	}
	getScale()
	// window.onresize = getScale
	window.addEventListener('resize', getScale)
})
</script>

<template>
	<div class="container">
		<div class="screen" :style="{ width: props.w + 'px', height: props.h + 'px' }">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 100vw;
	height: 100vh;
	// background-color: red;
	// background-color: v-bind(模型数据);
	background: v-bind(background);
	.screen {
		// width: 1920px;
		// height: 1080px;
		// background-color: yellowgreen;
		transform: scale(0.5) translate(-50%, -50%);
		transform-origin: 0 0;
		position: absolute;
		left: 50%;
		top: 50%;
	}
}
</style>
