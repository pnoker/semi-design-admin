import echarts from '@src/common/echarts'
import type { EChartsOption } from 'echarts'

export const workbeachOption: EChartsOption = {
	color: ['#67e0e3', '#ffc0cb', '#b6a2de'],
	legend: {
		bottom: 0,
		data: ['个人', '团队', '部门']
	},
	tooltip: {},
	radar: {
		shape: 'circle',
		splitNumber: 5,
		scale: true,
		axisName: {
			formatter: '{value}',
			color: 'rgb(100, 100, 100)'
		},
		splitArea: {
			areaStyle: {
				color: ['rgba(248, 248, 248, 0.2)', 'rgba(255, 255, 255, 0.3)']
			}
		},
		indicator: [
			{ name: '热度', max: 6500 },
			{ name: '口碑', max: 16000 },
			{ name: '产量', max: 30000 },
			{ name: '贡献', max: 38000 }
		]
	},
	series: [
		{
			type: 'radar',
			symbolSize: 0,
			areaStyle: {
				shadowBlur: 0,
				shadowColor: 'rgba(0,0,0,.2)',
				shadowOffsetX: 0,
				shadowOffsetY: 10,
				opacity: 1
			},
			data: [
				{
					value: [4200, 3000, 20000, 35000],
					name: '个人'
				},
				{
					value: [5000, 14000, 28000, 26000],
					name: '团队'
				},
				{
					value: [4000, 15000, 22000, 17000],
					name: '部门'
				}
			]
		}
	]
}

export const anlyanisAccessOption: EChartsOption = {
	color: ['#1890ff'],
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		show: false
	},
	yAxis: {
		type: 'value',
		show: false,
		scale: true
	},
	series: [
		{
			type: 'line',
			smooth: true,
			showSymbol: false,
			areaStyle: {
				opacity: 0.1
			},
			emphasis: {
				focus: 'series'
			},
			data: [820, 932, 901, 934, 1290, 1330, 1320]
		}
	]
}

export const anlyanisPayOption: EChartsOption = {
	color: ['#1890ff'],
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'time',
		show: false
	},
	yAxis: {
		type: 'value',
		show: false
	},
	series: [
		{
			type: 'line',
			data: [820, 932, 901, 934, 1290, 1330, 1320]
		}
	]
}

export const anlyanisSalesOption: EChartsOption = {
	color: ['#1890ff'],
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		top: 10,
		left: 30,
		right: 10,
		bottom: 20
	},
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [
		{
			type: 'line',
			data: [820, 932, 901, 934, 1290, 1330, 1320]
		}
	]
}
