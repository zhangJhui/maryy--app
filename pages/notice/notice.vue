<template>
	<view>
		<u-tabs 
			:list="list" 
			lineColor="#f56c6c"
			:activeStyle="{
				color: '#f56c6c',
			}"
			:inactiveStyle="{
				color: '#606266',
				transform: 'scale(1)'
			}"
		>
		</u-tabs>
		<view v-for="(item,index) in data" :key="index" class="noticeItem" @click="goDetail">
			<image :src="item.url" mode="widthFix"></image>
			<view>
				<view class="title">{{ item.title }}</view>
				<view>{{ item.date }}</view>
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
						name:'全部'
					},
					{
						name:'最新'
					} 
				],
				data: [
					{
						url: 'https://dummyimage.com/90x58/200/fff',
						title: '金秋八月，婚匠宴管家热进行中....',
						date: '2021-11-24  12:00'
					},
					{
						url: 'https://dummyimage.com/90x58/200/fff',
						title: '金秋八月，婚匠宴管家热进行中....',
						date: '2021-11-24  12:00'
					}
				]
			}
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/noticeDetail/noticeDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .u-tabs__wrapper__nav {
		margin: 0 auto;
		margin-bottom: -5rpx;
		
		.u-tabs__wrapper__nav__item {
			width: 43%;
		}
	}
	.noticeItem {
		display: flex;
		font-size: 24rpx;
		color: #999999;
		font-weight: 400;
		border-top: 2rpx solid #e6e6e6;
		padding: 32rpx;
		
		.title {
			font-size: 28rpx;
			color: #333333;
			font-weight: 600;
		}
		
		> view {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		image {
			width: 180rpx;
			height: 106rpx;
			margin-right: 16rpx;
		}
	}
	
</style>
