declare namespace API {
	declare namespace Chart {
		interface Option {
			title?: object
			tooltip?: object
			legend?: object
			xAxis?: object
			yAxis?: object
			series: object
			[k: string]: any
		}
	}
}
