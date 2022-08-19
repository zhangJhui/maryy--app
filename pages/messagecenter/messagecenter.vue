<template>
	<view :style="{marginTop: top}">
		<view class="search">
			<u-icon name="arrow-left" @click="goBlack"></u-icon>
			<text style="margin-left: 15%;">消息中心</text>
			<view>
				<image src="@/static/messagecenter/yidu2.png" mode="widthFix"></image>
				全部已读
			</view>
		</view>
		<u-tabs
			:list="list"
			lineWidth="30"
			lineColor="#f56c6c"
			:activeStyle="{
				color: '#f56c6c',
				transform: 'scale(1.05)'
			}"
			:inactiveStyle="{
				color: '#606266',
				transform: 'scale(1)'
			}"
			class="tabs"
			@change="handleSwitch"
		>
		</u-tabs>
		<view class="content">
			<view v-for="(item,index) in data" :key="index" class="contentItem">
				<view class="headerText">
					<view class="portrait">
						<span class="Img">
							<image src="@/static/messagecenter/tuisonhg2.png" mode="widthFix"></image>
							<span class="point"></span>
						</span>
						<span class="title">{{ item.title }}</span>
					</view>
					<text>{{ item.date }}</text>
				</view>
				<u-divider></u-divider>
				<view class="msgMain">
					<span class="msg">{{ item.msg }}</span>
					<span class="an">展开<u-icon name="arrow-down" color="#666666" style="margin-left: 12rpx;" size="10"></u-icon></span>
				</view>
			</view>
			<u-empty
			        mode="search"
			        icon="http://cdn.uviewui.com/uview/empty/search.png"
					v-show="data.length === 0"
			>
			</u-empty>
		</view>
	</view>
</template>

<script>
	import { statusHeight } from '@/utils/pages.js'
	export default {
		data() {
			return {
				top: `${ statusHeight()*2 + 10 }rpx`,
				list: [
					{
						name: '全部',
						list: [
							{
								title: '系统推送消息',
								date: '2021-12-08 13:21:32',
								msg: '您收到了一个新的指派订单，请查收～'
							},
							{
								title: '系统推送消息',
								date: '2021-12-08 13:21:32',
								msg: '您收到了一个新的指派订单，请查收～'
							}
						]
					},
					{
						name: '已读',
						list: []
					},
					{
						name: '未读',
						list: []
					}
				],
				data: [
					{
						title: '系统推送消息',
						date: '2021-12-08 13:21:32',
						msg: '您收到了一个新的指派订单，请查收～'
					},
					{
						title: '系统推送消息',
						date: '2021-12-08 13:21:32',
						msg: '您收到了一个新的指派订单，请查收～'
					}
				]
			};
		},
		methods: {
			goBlack() {
				uni.navigateBack(-1)
			},
			handleSwitch(item) {
				this.data = item.list
			}
		}
	}
</script>

<style lang="scss">
	.search {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 50rpx;
		font-size: 36rpx;
		color: #333333;
		font-weight: 800;
		text-align: center;
		margin-bottom: 16rpx;
		
		image {
			width: 24rpx;
			height: 24rpx;
			margin-right: 4rpx;
		}
	
		view {
			font-size: 24rpx;
			color: #FF5A5F;
			font-weight: 400;
		}
	}

	/deep/ .u-tabs__wrapper__nav__item {
			width: 28%;
		}
	

	.content {
		background-color: #f6f6f6;
		height: 86vh;
		padding: 0 22rpx;
		padding-top: 2.5%;
		
		.contentItem {
			width: 91.5%;
			background: #FFFFFF;
			border-radius: 10rpx;
			margin: auto;
			margin-bottom: 1.5%;
			padding: 4%;
			font-size: 22rpx;
			color: #BBBBBB;
			
			.headerText {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			
			.portrait {
				display: flex;
				align-items: center;
				
				.title {
					font-size: 28rpx;
					color: #333333;
					font-family: SourceHanSansCN-Medium;
					font-weight: 550;
				}
			
				.Img {
					position: relative;
				}
				
				.point {
					width: 12rpx;
					height: 12rpx;
					background: #FF0000;
					border-radius: 50%;
					position: absolute;
					top: 5rpx;
					right: 20rpx;
				}
			}
			
			.msgMain {
				display: flex;
				justify-content: space-between;
				
				.msg {
					font-size: 22rpx;
					color: #666666;
					font-weight: 500;
				}
				
				.an {
					display: flex;
				}
			}
			
			image {
				width: 60rpx;
				height: 60rpx;
				margin-right: 16rpx;
			}
		}
	}
</style>
