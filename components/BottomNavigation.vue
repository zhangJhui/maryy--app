<template>
	<view class="NavigatorContent">
		<view v-for="(item,index) in navList" :key="index" class="NavigatorContent-item" @click="changeItem(item)">
			<view :class="{'centre':item.title === '预定'}">
				<image :src="currId === item.id ? item.url2 : item.url" mode="widthFix"></image>
			</view>
			<span :style="{ color: currId === item.id ? '#FF5A5F' : '#333333' }" class="text">{{ item.title }}</span>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			id: Number
		},
		data() {
			return {
				navList: [
					{
						id: 1,
						title: '首页',
						url: require('@/static/nav/souye.png'),
						url2: require('@/static/nav/homeAction.png'),
						path: ''
					},
					{
						id: 2,
						title: '档期',
						url: require('@/static/nav/dangqi.png'),
						path: ''
					},
					{
						id: 3,
						title: '预定',
						url: require('@/static/nav/yuding2.png'),
						path: ''
					},
					{
						id: 4,
						title: '统计',
						url: require('@/static/nav/statistics.png'),
						url2: require('@/static/nav/statisticsAction.png'),
						path: ''
					},
					{
						id: 5,
						title: '我的',
						url: require('@/static/nav/wode.png'),
						path: ''
					}
				],
				currId: 1
			};
		},
		mounted() {
			this.currId = this.id
		},
		methods: {
			changeItem(item) {
				this.currId = item.id
			}
		}
	}
</script>

<style lang="scss">
	.NavigatorContent {
		width: 100%;
		height: 108rpx;
		background: url('@/static/index/lujin.png') no-repeat center center;
		background-size: 100% 108rpx;
		position: fixed;
		left: 0;
		bottom: -1rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		font-size: 20rpx;
		color: #333333;
		letter-spacing: 0;
		font-weight: 400;
		align-items: flex-end;
		
		.centre {
			position: absolute;
			bottom: 20rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 130rpx;
			height: 130rpx;
			background: url('@/static/index/anniu.png') no-repeat center center;
			display: flex;
			align-items: center;
			justify-content: center;
			
			image {
				width: 55rpx;
				height: 55rpx;
				margin-top: 7rpx;
			}
		}
		
		
		image {
			width: 44rpx;
			height: 44rpx;
		}
	}
	.NavigatorContent-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 8rpx;
	}

</style>