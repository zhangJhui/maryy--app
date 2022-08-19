<template>
	<view class="content">
		<u-tabs
			 :list="list"
			 lineColor="#f56c6c"
			 :activeStyle="{ color: '#f56c6c' }"
		></u-tabs>
		<view class="main">
			<view v-for="(item,index) in data" :key="index" class="item">
				<view class="seatInfo">
					<view style="display: flex;">
						<image :src="item.url" mode="widthFix" style="width: 100rpx; height: 100rpx; border-radius: 50%; margin-right: 20rpx"></image>
						<view>
							<view style="font-size: 28rpx; color: #666; margin: 12rpx 0 6rpx 0">{{ item.name }}</view>
							<view>{{ item.date }}</view>
						</view>
					</view>
					<u-button type="error" shape="circle" text="录入" @click="show = true"></u-button>
				</view>
				<u-divider style="margin: 18rpx 0;"></u-divider>
				<view class="info">
					<span>
						<image src="@/static/turnover/fangjian2.png" mode="widthFix"></image>
						{{ item.seat }}
					</span>
					<span>
						<image src="@/static/turnover/shijian2.png" mode="widthFix"></image>
						{{ item.moment }}
					</span>
					<span>
						<image src="@/static/turnover/hunyan2.png" mode="widthFix"></image>
						{{ item.type }}
					</span>
				</view>
			</view>
		</view>
		<view class="modelM" v-show="show">
			<myModel class="model"  @cancel="show = false"></myModel>
		</view>
	</view>
</template>

<script>
	import myModel from '@/components/inputModal.vue'
	export default {
		data() {
			return {
				show: false,
				list: [
					{
						name: '宴会'
					},
					{
						name: '零点'
					}
				],
				data: [
					{
						url: 'https://dummyimage.com/50x50/200/fff',
						name: '张三',
						date: '2021-11-29',
						seat: '宴会厅8楼',
						moment: '上午',
						type: '婚宴'
					},
					{
						url: 'https://dummyimage.com/50x50/200/fff',
						name: '张三',
						date: '2021-11-29',
						seat: '宴会厅8楼',
						moment: '上午',
						type: '婚宴'
					}
				]
			};
		},
		components: { myModel }
	}
</script>

<style lang="scss" scoped>
	.content { background-color: #f6f6f6; height: 100vh; }
	.u-tabs {
		background-color: #fff;
		margin-bottom: 40rpx;
		
		/deep/ .u-tabs__wrapper__nav__item {
			width: 44%;
		}
	}
	.item {
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 32rpx;
		margin-bottom: 20rpx;
		
		.seatInfo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;
			color: #999999;
			
			.u-button {
				width: 136rpx;
				height: 54rpx;
				margin: 0;
			}
		}
	
		.info {
			image {
				width: 26rpx;
				height: 26rpx;
			}
			
			> span {
				display: flex;
				display: inline-block;
				align-items: center;
				margin-right: 95rpx;
				font-size: 28rpx;
				color: #666666;
				
				image {
					margin-right: 10rpx;
				}
			}
		}
	}
	.main {
		padding: 0 32rpx;
	}
	.model {
		position: absolute;
	}
	
	.modelM {
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		background: rgba(0,0,0,0.4);
		display: flex;	
		justify-content: center;
		padding-top: 40%;
		box-sizing: border-box;
	}

</style>
