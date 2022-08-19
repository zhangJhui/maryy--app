<template>
	<view class="content">
		<view style="background-color: #fff; padding: 90rpx 0">
			<image src="@/static/order/chenggong.png" mode="widthFix"></image>
			<view style="font-size: 32rpx; color: #333333; font-weight: 700; margin-bottom: 20rpx">指派成功</view>
			<view style="font-size: 24rpx; color: #999999; margin-bottom: 60rpx">相关指派人员已收到指派订单</view>
			<view style="display: flex; width: 80%; margin: auto">
				<u-button type="error"  text="查看详情" shape="circle" :plain="true" @click="handlePath('/pages/orderDetail/orderDetail')"></u-button>
				<u-button type="error"  text="返回首页" shape="circle" @click="handlePath('/pages/index/index')"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			handlePath(path) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100vh;
		background: #f6f6f6;
		text-align: center;
		
		image {
			width: 160rpx;
			height: 160rpx;
			margin-bottom: 52rpx;
			margin-left: 36rpx;
		}
		
		.u-button {
			width: 180rpx;
			height: 64rpx;
		}
	}

</style>
