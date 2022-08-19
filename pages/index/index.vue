<template>
	<view class="content">
		<u-sticky style="border-top: 1rpx solid hsla(0,0%,100%,.5); background: #fff; top: 0">
			<view class="homeTitle" :style="{marginTop: merchantsInfo.top}">
				{{ merchantsInfo.title }}
				<image src="@/static/index/fenxiang2.png"  mode="aspectFill"></image>
			</view>
		</u-sticky>
		<view class="search">
			<view @click="goPage('/pages/search/search')">
				<u--input
					placeholder="请输入档期"
					suffixIcon="search"
					suffixIconStyle="font-size: 22px;color: rgba(0,0,0,0.25)"
					disabledColor="rgba(204,204,204,0.3)"
					placeholderStyle="color: #999"
					shape="circle"
					disabled
				></u--input>
			</view>	
			<view class="imageContent" @click="goPage('/pages/messagecenter/messagecenter')">
				<image src="@/static/index/message2.png" mode="widthFix"></image>
				<view class="point" v-if="merchantsInfo.message !== 0"></view>
			</view>
		</view>
		<view class="contentDiv wordbanch">
			<MyTitle titleMsg="工作台" :more="false" :msgNum="3"></MyTitle>
			<view v-for="(item,index) in wordbanch" :key="index" class="wordbanchItem" :style="{ background: `url(${item.bgUrl}) no-repeat center center` }"
				@click="goPage(item.path)">
				<MyBadge :msgNum="10" :offset="[-5, -5]" v-if="item.unread !== 0"></MyBadge>
				<image :src="item.url" mode="widthfix"></image>
				{{ item.title }}
			</view>
		</view>
		<view class="contentDiv order">
			<MyTitle titleMsg="线上订单" :more="true" :msgNum="3" @lookAll="goPage(`/pages/order/order?type=0`)"></MyTitle>
			<view v-for="(item,index) in orders" :key="index" class="orderItem" @click="goPage(`/pages/order/order?type=${index}`)">
				<MyBadge :msgNum="10" :offset="[-5, -5]" v-if="item.unread !== 0"></MyBadge>
				<image :src="item.url"></image>
				{{ item.title }}
				<view class="orderItem-num">{{ item.num }}</view>
			</view>
		</view>
		<view class="contentDiv reportData">
			<MyTitle titleMsg="零点数据" :more="false" :msgNum="0"></MyTitle>
			<view class="dataZero">
				<view v-for="(item,index) in zeroData" :key="index" class="dataZeroItem">
					<view>{{ item.title }}</view>
					<view class="Focuson">{{ item.num }}</view>
				</view>
			</view>
			<MyTitle titleMsg="宴会数据" :more="false" :msgNum="0"></MyTitle>
			<view class="dataZero feast">
				<view v-for="(item,index) in feastData" :key="index" class="dataZeroItem">
					<view>{{ item.title }}</view>
					<view class="Focuson">{{ item.num }}</view>
				</view>
			</view>
		</view>
		<view class="contentDiv notice">
			<MyTitle titleMsg="平台公告" :more="true" :msgNum="1" style="margin-bottom: 15px;"  @lookAll="goPage(`/pages/notice/notice`)"></MyTitle>
			<view v-for="(item,index) in noticeData" :key="index" class="noticeItem" @click="goPage('/pages/noticeDetail/noticeDetail')">
				<image :src="item.url" mode="widthfix"></image>
				<view>
					<span class="notice-title">{{ item.title }}</span>
					<br>
					{{ item.sketch }}
				</view>
			</view>
		</view>
		<BottomNavigation :id="1"/>
	</view>
</template>

<script>
	import { statusHeight } from '@/utils/pages.js'
	import MyTitle from './components/MyTitle/MyTitle.vue'
	import MyBadge from './components/MyBadge/MyBadge.vue'
	import BottomNavigation from '@/components/BottomNavigation.vue'
	export default {
		components: { MyTitle, MyBadge, BottomNavigation },
		data() {
			return {
				merchantsInfo: {
					title: '三拾大酒店',
					top: statusHeight() + 'px',
					message: 3,
				},
				wordbanch: [
					{
						title: "店铺首页",
						url: require('@/static/index/shouye2.png'),
						bgUrl: require('@/static/index/work_bench_bg_12.png'),
						unread: 0,
						path: ''
					},
					{
						title: "预约看店",
						url: require('@/static/index/yuyue2.png'),
						bgUrl: require('@/static/index/work_bench_bg_22.png'),
						unread: 0,
						path: '/pages/subscribe/subscribe'
					},
					{
						title: "酒店评论",
						url: require('@/static/index/pinglun2.png'),
						bgUrl: require('@/static/index/work_bench_bg_32.png'),
						unread: 10,
						path: '/pages/review/review'
					},
					{
						title: "营业额录入",
						url: require('@/static/index/luru2.png'),
						bgUrl: require('@/static/index/work_bench_bg_42.png'),
						unread: 0,
						path: '/pages/turnover/turnover'
					}
				],
				orders: [
					{
						title: '待付款',
						num: 1,
						url: require('@/static/index/fukuan2.png'),
						unread: 0
					},
					{
						title: '待服务',
						num: 10,
						url: require('@/static/index/fuwu2.png'),
						unread: 10
					},
					{
						title: '已完成',
						num: 3,
						url: require('@/static/index/wancheng2.png'),
						unread: 0
					}
				],
				zeroData: [
					{
						title: '今日预定',
						num: 8
					},
					{
						title: '今日入座',
						num: 14
					},
					{
						title: '昨日收入',
						num: 4
					}
				],
				feastData: [
					{
						title: '全部宴会',
						num: 1
					},
					{
						title: '未完成',
						num: 10
					},
					{
						title: '累计收入',
						num: 3
					}
				],
				noticeData: [
					{
						title: '金秋八月，婚匠宴管家热进行中....',
						sketch: '婚匠宴管家2.0版本上线-让宴会管理随',
						url: 'https://dummyimage.com/90x50/200/fff'
					},
					{
						title: '婚匠宴管家热进行中....',
						sketch: '婚匠宴管家2.0版本上线-让宴会管理随',
						url: 'https://dummyimage.com/90x50/200/fff'
					}
				]
			}
		},
		methods: {
			goPage(path) {
				uni.navigateTo({
					url: path
				})
			} 
		}
	}
</script>

<style lang="scss" scoped>
	page { background-color: #f6f6f6; }
	.content { background-color: #f6f6f6; padding-bottom: 100rpx; }
	.contentDiv {
		background-color: #fff;
		margin-top: 20rpx;
		padding: 32rpx;
	}
	.point {
		width: 12rpx;
		height: 12rpx;
		background: #FF0000;
		border-radius: 50%;
	}
	.homeTitle {
		font-size: 36rpx;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.1% 0;
		padding: 26rpx 0;
		background-color: #fff;
		margin-bottom: 2rpx;
		
		image {
			position: absolute;
			right: 32rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
	.search {
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 28rpx 32rpx;
		
		.u-input {
			width: 568rpx;
			height: 34rpx;
		}
		
		image {
			width: 60rpx;
			height: 60rpx;
		}
		
		.imageContent {
			position: relative;
			padding-top: 6rpx;
			
			.point {
				position: absolute;
				top: 0;
				right: 0;
			}
		}
	}
	.wordbanch {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.wordbanchItem {
			margin-top: 24rpx;
			width: 156rpx;
			height: 180rpx;
			border-radius: 30rpx;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26rpx;
			color: #FFFFFF;
			font-weight: 400;
			position: relative;
			background-size: 156rpx 180rpx;
			
			image {
				width: 68rpx;
				height: 68rpx;
				margin-bottom: 20rpx;
			}
			
			.u-badge {
				position: absolute;
				right: -10rpx;
				top: -10rpx;
			}
		}
	}
	.order {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.orderItem {
			width: 214rpx;
			height: 220rpx;
			background: #FFFFFF;
			box-shadow: 0 4rpx 48rpx 0 rgba(165,139,139,0.10);
			border-radius: 10rpx;
			margin-top: 30rpx;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			align-items: center;
			text-align: center;
			font-size: 24rpx;
			color: #666666;
			letter-spacing: 1.1rpx;
			font-weight: 400;
			position: relative;
			
			image {
				width: 60rpx;
				height: 60rpx;
				margin-top: 32rpx;
				margin-bottom: 20rpx;
			}
			
			.orderItem-num {
				width: 100%;
				height: auto;
				margin-top: 12rpx;
				font-size: 36rpx;
				color: #333333;
				letter-spacing: 0;
				font-weight: 600;
			}
		}
	}
	.reportData {
		.dataZero {
			height: 260rpx;
			background: url('@/static/index/bg22.png') no-repeat center center;
			border-radius: 20rpx;
			display: flex;
			justify-content: space-around;
			background-size: 762rpx 260rpx;
			
			.dataZeroItem {
				width: 118rpx;
				height: 88rpx;
				color: #fff;
				font-size: 28rpx;
				letter-spacing: 1.1rpx;
				font-weight: 400;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 40rpx;
				padding-top: 36rpx;
				
				.Focuson {
					font-size: 40rpx;
					font-weight: 500;
					margin-top: 20rpx;
				}
			}
		}
		.feast {
			background: url('@/static/index/bg23.png') no-repeat center center;
			background-size: 762rpx 260rpx;
			margin-bottom: 0;
		}
	}
	.notice {
		.noticeItem {
			display: flex;
			font-size: 24rpx;
			color: #666666;
			font-weight: 400;
			padding: 30rpx 0;
			border-top: 2rpx solid rgba(230,230,230,1);
			
			.notice-title {
				font-size: 28rpx;
				color: #333333;
				font-weight: 600;
				margin-bottom: 24rpx;
				line-height: 52rpx;
			}
			
			image {
				width: 180rpx;
				height: 100rpx;
				margin-right: 16rpx;
			}
		}
	}
</style>
