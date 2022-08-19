<template>
	<view class="content">
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
			:current="current"
			@change="handleSwitch"
		>
		</u-tabs>
		<view class="list">
			<view v-for="(item,index) in data" :key="index" class="listItem">
				<view class="orderInfo">
					<view style="display: flex;">
						<image :src="item.head" mode="widthFix"></image>
						<span>
							<span class="name">{{ item.name }}</span>
							<br>
							{{ item.call }}
						</span>
					</view>
					<span>
						<u-icon name="phone-fill" color="#52c41a" size="23"></u-icon>
					</span>
				</view>
				<view class="feastInfo">
					<span>
						<image src="@/static/order/fangjian2.png" mode="widthFix"></image>
						{{ item.seat }}
					</span>
					<span>
						<image src="@/static/order/shijian2.png" mode="widthFix"></image>
						{{ item.moment }}
					</span>
					<span>
						<image src="@/static/order/hunyan2.png" mode="widthFix" v-if="(typeof item.num) === 'string'"></image>
						<image src="@/static/order/renshu2.png" mode="widthFix" v-else></image>
						{{ item.num }}
						<span v-if="(typeof item.num) !== 'string'">人</span>
					</span>
				</view>
				<u-divider></u-divider>
				<view class="dateInfo">
					{{ item.date }}
					<span v-if="!item.type"><u-button size="mini" shape="circle" type="error" text="指派" @click="goAssign"></u-button></span>
					<span v-else>
						<span class="point"></span>
						以指派给{{ item.manage }}
					</span>
				</view>
			</view>
			<view class="nullView" v-if="data.length === 0">
				<image src="@/static/order/null2.png" mode="widthFix"></image>
				<view>您还没有相关订单～</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '待付款',
						list: [
							{
								name: '张三',
								head: 'https://dummyimage.com/50x50/200/fff',
								call: '188****2757',
								seat: '宴会厅8楼',
								moment: '上午',
								num: '婚宴',
								date: '2021-12-05  11:51',
								type: false
							},
							{
								name: '张三',
								head: 'https://dummyimage.com/50x50/200/fff',
								call: '188****2757',
								seat: '宴会厅8楼',
								moment: '上午',
								num: 10,
								date: '2021-12-05  11:51',
								type: true,
								manage: '王东升'
							},
						]
					},
					{
						name: '待服务',
						list: []
					},
					{
						name: '已完成',
						list: []
					},
					{
						name: '已取消',
						list: []
					},
					{
						name: '已失效',
						list: []
					}
				],
				current: '',
				data: []
			};
		},
		onLoad(e) {
			this.current = e.type
			this.data = this.list[e.type].list
		},
		methods: {
			handleSwitch(item) {
				console.log(item)
				this.data = item.list
			},
			goAssign() {
				uni.navigateTo({
					url: '/pages/assign/assign'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		/deep/ .u-tabs__wrapper__nav__item {
			width: 14%;
		}

		.list {
			height: 92vh;
			background: #f6f6f6;
			padding: 0 16px;
			padding-top: 40rpx;
			
			.listItem {
				background: #FFFFFF;
				border-radius: 20rpx;
				padding: 32rpx;
				margin-bottom: 20rpx;
				
				.orderInfo {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 24rpx;
					color: #999999;
					font-weight: 400;
					
					
					
					image {
						width: 100rpx;
						height: 100rpx;
						border-radius: 50%;
						margin-right: 20rpx;
					}
					
					.u-icon {
						border: 4rpx solid #52c41a;
						border-radius: 50%;
						text-align: center;
						padding: 8rpx;
					}
				
					.name {
						display: inline-block;
						font-size: 28rpx;
						color: #666666;
						font-weight: 500;
						margin-top: 10rpx;
						margin-bottom: 15rpx;
					}
				}
			
				.feastInfo {
					font-size: 28rpx;
					color: #666666;
					font-weight: 400;
					display: flex;
					align-items: center;
					margin: 16px 0;
					
					span:nth-of-type(2) {
						margin-left: 80rpx;
						margin-right: 120rpx;
					}
					
					span {
						display: flex;
						align-items: center;
					}
					
					image {
						width: 32rpx;
						height: 32rpx;
						margin-right: 8rpx;
					}
				}
			
				.dateInfo {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 20rpx;
					font-size: 24rpx;
					color: #666666;
					font-weight: 400;
					
					.u-button {
						width: 136rpx;
						height: 54rpx;
					}
					
					.point {
						display: inline-block;
						width: 12rpx;
						height: 12rpx;
						background: #FAAD14;
						border-radius: 50%;
						margin-bottom: 5rpx;
						margin-right: 5rpx;
					}
				}
			}
		}
	
		.nullView {
			font-size: 28rpx;
			color: #999999;
			font-weight: 400;
			text-align: center;
			margin-top: 50%;
			transform: translateY(-50%);
			
			image {
				width: 304rpx;
				height: 334rpx;
			}
		}
	}

</style>
