<template>
	<view class="content"  :style="{marginTop: top}">
		<view class="search">
			<u-icon name="arrow-left" @click="goBlack"></u-icon>
			<u--input
				placeholder="请输入客户姓名或联系方式"
				prefixIcon="search"
				prefixIconStyle="font-size: 22px;color: #000000 25%"
				shape="circle"
			></u--input>
			<text @click="switchType">切换</text>
		</view>
		<view class="main">
			<view class="histroy">
				历史搜索
				<image src="@/static/search/shanchu2.png" mode="widthFix"></image>
				<view class="total">
					<view v-for="(item,index) in data" :key="index">
						{{ item }}
					</view>
				</view>
			</view>
		</view>
		<u-datetime-picker
			ref="datetimePicker"
			:show="show"
			mode="datetime"
			:formatter="formatter"
			@cancel='show = false'
		></u-datetime-picker>
	</view>
</template>

<script>
	import { statusHeight } from '@/utils/pages.js'
	export default {
		data() {
			return {
				top: `${ statusHeight() }px`,
				data: ['王海', '郭芙蓉'],
				type: false,
				show: false,
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		methods: {
			switchType() {
				this.type = !this.type;
				this.data = this.type ? ['2022年8月16', '20220815', '20220817'] : ['王海', '郭芙蓉']
				if(this.type) this.show = true
				
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
			goBlack() {
				uni.navigateBack(-1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		display: flex;
		align-items: center;
		font-size: 30rpx;
		color: #333333;
		font-weight: 500;
		padding-left: 40rpx;
		padding-right: 30rpx;
		padding: 28rpx 30rpx;
		background-color: #fff;
		border-bottom: 3rpx solid #f6f6f6;
		
		.u-input {
			width: 50%;
			height: 34rpx;
			margin-left: 38rpx;
			margin-right: 24rpx;
			background: #F5F5F5;
		}
	}
	.main {
		.histroy {
			font-size: 28rpx;
			color: #333333;
			font-weight: 600;
			margin-top: 32rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			padding: 0 24rpx;
			
			image {
				width: 28rpx;
				height: 28rpx;
			}
			view {
				width: 100%;
			}
			.total {
				display: flex;
				view {
					width: auto;
					border: 2rpx solid rgba(204,204,204,1);
					border-radius: 29rpx;
					text-align: center;
					line-height: 58rpx;
					font-size: 26rpx;
					color: #777777;
					font-weight: 400;
					margin-right: 32rpx;
					margin-top: 32rpx;
					padding: 0 28rpx;
					
				}
			}
		}
	}
</style>
