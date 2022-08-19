<template>
	<view class="content">
		<view class="banner">
			<span>
				<view style="font-size: 48rpx; font-weight: 600; margin-bottom: 15rpx">4.8</view>
				<view>综合评分</view>
			</span>
			<span>
				<view style="font-size: 48rpx; font-weight: 600;  margin-bottom: 15rpx">876</view>
				<view>评价数量</view>
			</span>
			<span>
				<view style="font-size: 48rpx; font-weight: 600; margin-bottom: 15rpx">100%</view>
				<view>好评率</view>
			</span>
		</view>
		<view class="main">
			<view class="swtich">
				<view v-for="(item,index) in type" :key="index" :class="{ typeItem: true, current: current === item.id ? true : false }" @click="changeCurrent(item.id)">
					{{ item.name }}
				</view>
			</view>
			<view class="mainItem">
				<view v-for="(item,index) in data" :key="index" class="item">
					<view style="display: flex; align-items: center; justify-content: space-between;">
						<view>
							<view>{{ item.name }}</view>
							<view style="font-size: 24rpx; color: #999999; margin-top: 2rpx">{{ item.date }}</view>
						</view>
						<image src="@/static/review/huifu2.png" mode="widthFix" style="width: 40rpx; height: 40rpx;" @click="show = true"></image>
					</view>
					<view><image :src="item.url" mode="widthFix" style="width: 80rpx; height: 80rpx; border-radius: 50%;"></image></view>
					<view style="display: flex; flex-wrap: wrap; justify-content: space-between;">
						<view class="rate">大厅 <u-rate size="16" inactiveColor="#D8D8D8" inactiveIcon="star-fill" activeColor='#FF7329' v-model="item.score1" style="margin-left: 8rpx;"></u-rate></view>
						<view class="rate">菜品 <u-rate size="16" inactiveColor="#D8D8D8" inactiveIcon="star-fill" activeColor='#FF7329' v-model="item.score2" style="margin-left: 8rpx;"></u-rate></view>
						<view class="rate">服务 <u-rate size="16" inactiveColor="#D8D8D8" inactiveIcon="star-fill" activeColor='#FF7329' v-model="item.score3" style="margin-left: 8rpx;"></u-rate></view>
					</view>
					<view class="msg">{{ item.msg }}</view>
					<view class="imgs">
						<image v-for="(i, z) in item.imgs" :src="i" :key="z" mode="widthFix"></image>
					</view>
					<view class="reply">
						<span>回复：</span> <span>{{ item.reply }}</span>
					</view>
				</view>
			</view>
		</view>
		<u-popup :show="show" @close="show = false">
			<view class="popup">
				<u--input
					    placeholder="写评论"
					    prefixIcon="edit-pen"
						border="surround"
						shape="circle"
					    prefixIconStyle="font-size: 22px;color: #909399"
					></u--input>
					<u-icon name="arrow-upward" size="24rpx" color="#fff"></u-icon>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				current: 1,
				type: [
					{
						id: 1,
						name: '全部(48)'
					},
					{
						id: 2,
						name: '好评(48)'
					},
					{
						id: 3,
						name: '中评(0)'
					},
					{
						id: 4,
						name: '差评(0)'
					}
				],
				data: [
					{
						url: 'https://dummyimage.com/40x40/200/fff',
						name: '张三',
						date: '2021-12-05  11:51',
						score1: 3,
						score2: 5,
						score3: 4,
						msg: '婚宴火热进行中是怎么回事呢？婚宴相信大家都很熟悉，但是婚宴火热进行中是怎么回事呢，下面就让小编带大家一起了解吧。',
						imgs: ['https://dummyimage.com/93x93/200/fff', 'https://dummyimage.com/93x93/200/fff', 'https://dummyimage.com/93x93/200/fff'],
						reply: '感谢您一直以来对本店的信任～'
					},
					{
						url: 'https://dummyimage.com/40x40/200/fff',
						name: '张三',
						date: '2021-12-05  11:51',
						score1: 3,
						score2: 5,
						score3: 4,
						msg: '婚宴火热进行中是怎么回事呢？婚宴相信大家都很熟悉，但是婚宴火热进行中是怎么回事呢，下面就让小编带大家一起了解吧。',
						imgs: ['https://dummyimage.com/93x93/200/fff', 'https://dummyimage.com/93x93/200/fff', 'https://dummyimage.com/93x93/200/fff'],
						reply: '感谢您一直以来对本店的信任～'
					}
				]
			};
		},
		methods: {
			changeCurrent(id) {
				this.current = id
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		height: 84vh;
		background-color: #f6f6f6;
		
		.swtich {
			display: flex;
			justify-content: space-around;
			padding:  32rpx 0;
			background-color: #fff;
			.typeItem {
				width: 156rpx;
				height: 50rpx;
				background: #E9E9E9;
				border-radius: 27rpx;
				font-size: 26rpx;
				color: #333333;
				text-align: center;
				line-height: 50rpx;
			}
		
			.current {
				background-color: rgba(255,90,95,0.12);
				color: #FF5A5F;
			}
		}
	
		.mainItem {
			margin-top: 20rpx;
			background-color: #fff;
			padding: 32rpx;
			
			.item {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row-reverse;
				justify-content: space-between;
				padding-bottom: 32rpx;
				margin-bottom: 40rpx;
				
				
				&:not(:last-child) {
					border-bottom: 1px solid #EFEFEF;
				}
				
				> view:not(:nth-of-type(2)) {
					width: 85%;
				}
				
				.rate {
					display: flex;
					margin-top: 8rpx;
					color: #999999;
					font-size: 24rpx;
				}
				
				.msg {
					font-size: 24rpx;
					color: #333333;
					line-height: 40rpx;
					font-weight: 600;
					margin: 14rpx 0;
				}
			
				.imgs {
					display: flex;
					justify-content: space-between;
					
					
					image {
						width: 186rpx;
						height: 186rpx;
						border-radius: 8rpx;
					}
				}
			
				.reply {
					background: #F7F7F7;
					border-radius: 4px;
					padding: 12rpx;
					margin-top: 32rpx;
					box-sizing: border-box;
					font-size: 24rpx;
				}
			}
		}
	}
	.banner {
		height: 244rpx;
		background: url('@/static/review/banner.png') no-repeat center;
		background-size: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 26rpx;
		color: #FFFFFF;
		text-align: center;
		font-weight: 400;
	}
	.popup {
		padding: 20rpx 32rpx;
		display: flex;
		
		.u-icon {
			width: 62rpx;
			height: 62rpx;
			background-color: #FF5A5F;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 37rpx;
		}
	}

</style>
