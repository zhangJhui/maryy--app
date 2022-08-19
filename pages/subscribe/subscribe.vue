<template>
	<view class="content">
		 <u-tabs 
			 :list="list"
			 lineColor="#f56c6c"
			 :activeStyle="{ color: '#f56c6c' }"
		 ></u-tabs>
		<view style="padding: 0 32rpx;">
			<view v-for="(item,index) in data" :key="index" class="item" @click="goDetail">
				<view>
					<u-icon name="phone-fill" size="46rpx" color="#52C41A"></u-icon>
					{{ item.call }}
				</view>
				<u-divider style="margin: 20rpx 0;"></u-divider>
				<view style="display: flex; justify-content: space-between;  align-items: center;">
					<span style="font-size: 24rpx; color: #999999; display: flex; align-items: center;">
						<image src="@/static/subscribe/shijian2.png" mode="widthFix"></image>
						{{ item.date }}
					</span>
					<u-button type="error" shape="circle" text="联系"></u-button>
				</view>
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
						name: '待联系'
					},
					{
						name: '已联系'
					}
				],
				data: [
					{
						call: '188****2757',
						date: '看店时间：2021-11-29'
					},
					{
						call: '188****2757',
						date: '看店时间：2021-11-29'
					}
				]
			};
		},
		methods: {
			goDetail() {
				uni.navigateTo({ url: '/pages/subDetail/subDetail' })
			}
		}
	}
</script>

<style lang="scss">
	.content { background-color: #f6f6f6; height: 100vh; }
	.u-tabs {
		background-color: #fff;
		margin-bottom: 30rpx;
		
		/deep/ .u-tabs__wrapper__nav__item {
			width: 44%;
		}
	}
	.item {
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 26rpx;
		margin-bottom: 24rpx;
		box-sizing: border-box;
		
		> view {
			display: flex;
			align-items: center;
			
			.u-icon {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				border: 2rpx solid #52C41A;
				display: flex;
				justify-content: center;
				margin-right: 28rpx;
			}
		
			image {
				width: 26rpx;
				height: 26rpx;
				margin-right: 10rpx;
			}
			
			.u-button {
				width: 136rpx;
				height: 54rpx;
				margin-right: 0;
			}
		}
	}
</style>
