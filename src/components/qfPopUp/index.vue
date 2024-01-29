<script setup lang="ts">
import { CloseBold } from '@element-plus/icons-vue'

type Props = {
	title: string
	modelValue: boolean
}
defineProps<Props>()
</script>

<template>
	<Teleport to="body">
		<!-- 千锋弹出层 -->
		<div
			class="qfPopUp"
			:style="{ opacity: Number(modelValue), zIndex: modelValue ? 9 : -1 }"
			@click="$emit('update:modelValue', false)"
		>
			<main @click.stop :style="{ right: modelValue ? '0px' : '-375px' }">
				<header>
					<el-icon @click="$emit('update:modelValue', false)"><CloseBold /></el-icon>
					{{ title }}
				</header>
				<div class="content">
					<slot></slot>
				</div>
			</main>
		</div>
		<!-- 千锋弹出层 -->
	</Teleport>
</template>

<style lang="scss" scoped>
.qfPopUp {
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999999999;
	transition: all 0.5s;

	main {
		position: absolute;
		top: 0;
		right: -375px;
		width: 375px;
		height: 100vh;
		background-color: #fff;
		overflow-y: scroll;
		transition: right 0.3s;
		.content {
			padding: 0 20px;
			padding-top: 20px;
			box-sizing: border-box;
		}

		header {
			width: 100%;
			height: 40px;
			line-height: 40px;
			font-size: 18px;
			color: #303133;
			border-bottom: solid 1px #ccc;
			.el-icon {
				vertical-align: middle;
				margin-left: 8px;
				margin-top: -3px;
				&:hover {
					cursor: pointer;
					color: $qf-color-primary;
				}
			}
		}
	}
}
</style>
