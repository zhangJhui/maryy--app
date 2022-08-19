<template>
	<view>
		<div class="content">
			<view class="img">
				<view class="imgMain">
					<view class="feast">
						<image src="@/static/detail/ziyuan2.png" mode="widthFix"></image>
						<view>宴会厅8楼</view>
					</view>
					<view class="info">
						<span>预订时间：2021-12-06</span>
						<span>时段：下午</span>
					</view>
				</view>
			</view>
			<view class="assignInfo">
				<view style="font-size: 34rpx; font-weight: 600;">指派信息</view>
				<view class="assignInfoMain">
					<view class="info">
						<image src="https://dummyimage.com/50x50/200/fff" mode="widthFix"></image>
						<view class="sir">
							<view class="sir-img">
								<image src="@/static/detail/zhongjianren2.png" mode="widthFix"></image>
								王晓波
							</view>
							酒店管理员
						</view>
					</view>
					<view><u-icon name="arrow-rightward" size="20"></u-icon></view>
					<view class="info">
						<image src="@/static/detail/touxiang.png" mode="widthFix"></image>
						<view class="sir">
							<view class="sir-img">
								<image src="@/static/detail/zhongjianren2.png" mode="widthFix"></image>
								周倩影
							</view>
							销售人员
						</view>
					</view>
				</view>
			</view>
			<view class="orderType">
				<view v-for="(item,index) in typeList" :key="index" class="orderType-item">
					<span class="title">{{ item.title }}</span>
					<span style="display: flex; align-items: center;">
						<span class="point" :style="{ background: color(item.type) }" v-if="item.type"></span>
						<span :style="{ color: color(item.type) }">{{ item.text }}</span>
					</span>
				</view>
			</view>
			<view class="orderInfo">
				<view v-for="(item,index) in data" :key="index" class="orderInfoItem">
					<view><span class="title">类型</span><span>{{ item.type }}</span></view>
					<view><span class="title">定金</span><span>{{ item.sum }}</span></view>
					<view><span class="title">客户姓名</span><span>{{ item.name }}</span></view>
					<view><span class="title">客户性别</span><span>{{ item.sex }}</span></view>
					<view><span class="title">联系电话</span><span>{{ item.call }}</span></view>
					<view><span class="title">桌数</span><span>{{ item.tables }}</span></view>
					<view><span class="title">餐标</span><span>{{ item.mealSum }}</span></view>
					<view><span class="title">备注</span><view class="note">{{ item.note? item.note : '暂无备注' }}</view></view>
				</view>
			</view>
		</div>
		<view class="option">
			<u-button type="error" shape="circle" text="线下收款" @click="show = !show"></u-button>
		</view>
		<u-modal
			:show="show"
			title="提示"
			content='您确定线下已收到订金？'
			showConfirmButton
			showCancelButton
			confirmColor="#FF5A5F"
			cancelColor="#FF5A5F"
			width="260"
			@confirm="show = false"
			@cancel="show = false"
		>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList: [
					{
						title: '订单状态',
						type: 1,
						text: '未付款'
					},
					{
						title: '订单编号',
						text: 'B2508016698'
					},
					{
						title: '创建时间',
						text: '2021-12-07  12:45'
					},
					{
						title: '获客渠道',
						text: '婚匠网'
					}
				],
				data: [{
					type: '婚宴',
					sum: '¥1000.00',
					name: '王伟华',
					sex: '男',
					call: '188****2757',
					tables: '30桌',
					mealSum: '¥2290.00',
					note: '',
				}],
				show: false
			};
		},
		methods: {
			color(type) {
				switch(type) {
					case 1:
						return "#FF4D4F"
					break;
					case 1:
						return "#FAAD14"
					break;
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background: #f6f6f6;
		padding-bottom: 200rpx;
		
		> view {
			background: white;
			margin-bottom: 20rpx;
		}
		
		.imgMain {
			width: 93%;
			height: 366rpx;
			background: url('@/static/detail/kapian.png') no-repeat center center;
			background-size: 100%;
			margin: auto;
			margin-top: 46rpx;
			border-radius: 16rpx;
			// padding: 0 16rpx;
			
			.feast {
				text-align: center;
				color:white;
				font-size: 40rpx;
				font-family: SourceHanSansCN-Medium;
				font-weight: 600;
				margin-bottom: 60rpx;
			}
			
			image {
				margin-top: 54rpx;
				width: 100rpx;
				height: 104rpx;
			}
		
			.info {
				font-size: 24rpx;
				color: #FFFFFF;
				display: flex;
				justify-content: space-between;
				padding: 0 60rpx;
			}
		}
	
		.assignInfo {
			padding: 32rpx;
			
			.assignInfoMain {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 32rpx;
				
				.info {
					width: 282rpx;
					height: 128rpx;
					background: #F9FAFB;
					border: 2rpx solid rgba(226,230,238,1);
					border-radius: 8rpx;
					display: flex;
					align-items: center;
					padding-left: 16rpx;
					
					> image {
						width: 100rpx;
						height: 100rpx;
						border-radius: 50%;
						margin-right: 20rpx;
					}
					
					.sir {
						font-size: 24rpx;
						color: #999999;
						
						.sir-img {
							font-size: 28rpx;
							color: #333333;
							font-weight: 600;
							display: flex;
							align-items: center;
							margin-bottom: 6rpx;
						}
						
						image {
							width: 32rpx;
							height: 32rpx;
						}
					}
				}
			}
		}
	
		.orderType {
			width: 100%;
			.orderType-item {
				width: 95%;
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				color: #666666;
				font-weight: 400;
				padding: 36rpx 0;
				margin: 0 auto;
				
				&:not(:last-child) {
					border-bottom: 2rpx solid #E6E6E6;
				}
				
				.title {
					font-size: 30rpx;
					color: #333333;
					font-weight: 600;
				}
				
				.point {
					display: inline-block;
					width: 12rpx;
					height: 12rpx;
					border-radius: 50%;
					margin-right: 8rpx;
				}
			}
		}
	
		.orderInfoItem {
			width: 95%;
			font-size: 30rpx;
			color: #666666;
			font-weight: 400;
			margin: 0 auto;
			
			> view {
				padding: 36rpx 0;
				
				&:not(:last-child) {
					border-bottom: 2rpx solid #E6E6E6;
					display: flex;
					justify-content: space-between;
				}
				
				.title {
					font-size: 30rpx;
					color: #333333;
					font-weight: 600;
				}
				
				.note {
					height: 120rpx;
					margin-top: 38rpx;
				}
			}
		}
	}
	
	.option {
		width: 100vw;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #FFFFFF;
		padding: 30rpx 0;
		border-bottom: 0;
		
		.u-button {
			width: 686rpx;
			height: 88rpx;
		}
	}
</style>
