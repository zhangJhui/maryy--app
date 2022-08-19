<template>
	<view class="contentAssign">
		<view class="search">
			<search></search>
		</view>
		<view class="list">
			<view v-for="(item,index) in data" :key="index" class="listItem">
				<view style="display: flex; align-items: center;">
					<image :src="item.url" mode="widthFix"></image>
					{{ item.name }}
				</view>
				<view style="display: flex; color: #666666; align-items: center;">
					<u-icon name="phone-fill" color="color: #666666"></u-icon>
					{{ item.call }}
				</view>
				<view class="assignBtn" @click="handleAssign">指派</view>
			</view>
		</view>
	</view>
</template>

<script>
	import search from './component/assignSerch.vue'
	
	export default {
		data() {
			return {
				data: [
					{
						url: 'https://dummyimage.com/50x50/200/fff',
						name: '肖战',
						call: '188****2757',
					},
					{
						url: 'https://dummyimage.com/50x50/200/fff',
						name: '王美丽',
						call: '188****2757',
					}
				]
			};
		},
		components: { search },
		methods: {
			handleAssign() {
				uni.navigateTo({
					url: '/pages/assignWin/assignWin'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contentAssign { background-color: #f6f6f6; height: 100vh; }
	.list {
		padding: 0 32rpx;
		padding-top: 32rpx;
		
		.listItem {
			background: #FFFFFF;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 24rpx;
			margin-bottom: 20rpx;
			
			image {
				width: 92rpx;
				height: 92rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
			
			.assignBtn {
				width: 130rpx;
				height: 60rpx;
				border: 2rpx solid rgba(255,90,95,1);
				font-size: 28rpx;
				color: #FF5A5F;
				font-weight: 400;
				border-radius: 68rpx;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}
</style>
