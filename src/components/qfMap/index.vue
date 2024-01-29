<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted } from 'vue'

/* eslint @typescript-eslint/no-unused-vars:0 */
let map = null

const initMap = () => {
	AMapLoader.load({
		key: 'c82d9badcf4dbbf269e65877c2af3972', // 申请好的Web端开发者Key，首次调用 load 时必填
		version: '2.0' // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
	})
		.then((AMap) => {
			map = new AMap.Map('container', {
				//设置地图容器id
				Plugin: ['PlaceSearch'],
				viewMode: '3D', //是否为3D地图模式
				zoom: 5, //初始化地图级别
				center: [105.602725, 37.076636] //初始化地图中心点位置
			})

			// -----------------------------------------
			// -----------------------------------------
			// -----------------------------------------

			// console.log(AMap)
			// var placeSearch = new AMap.PlaceSearch({
			// 	// city 指定搜索所在城市，支持传入格式有：城市名、citycode和adcode
			// 	city: '021'
			// })

			// placeSearch.search('南京千锋教育', function (status, result) {
			// 	// 查询成功时，result即对应匹配的POI信息
			// 	console.log(result)
			// 	var pois = result.poiList.pois
			// 	for (var i = 0; i < pois.length; i++) {
			// 		var poi = pois[i]
			// 		var marker = []
			// 		marker[i] = new AMap.Marker({
			// 			position: poi.location, // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
			// 			title: poi.name
			// 		})
			// 		// 将创建的点标记添加到已有的地图实例：
			// 		map.add(marker[i])
			// 	}
			// 	map.setFitView()
			// })
			// -----------------------------------------
			// -----------------------------------------
			// -----------------------------------------
			// -----------------------------------------
		})
		.catch((e) => {
			console.log(e)
		})
}

onMounted(() => {
	initMap()
})
</script>

<template>
	<div id="container"></div>
</template>

<style lang="scss" scoped>
#container {
	width: 100%;
	height: 100%;
	padding: 0px;
	margin: 0px;
}
</style>
