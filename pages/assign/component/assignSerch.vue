<template>
	<view>
		<view class="box">
			<view class="assgin-search">
				<view class="search-input">
					<view class="search-icon">
						<u-icon name="search" size="24px" color="rgba(0,0,0,0.25)"></u-icon>
					</view>
					<input type="text" placeholder-style="font-family: SourceHanSansCN-Regular;
font-size: 13px;
color: #999999;
font-weight: 400;" placeholder="请输入指派人员姓名">
				</view>
				<view class="btn">

				</view>
				<view class="search-btn">
					搜索
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: ''
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		background-color: #fff;
		padding: 20rpx 0;
		// height: 68rpx;
		width: 100vw;
		// position: fixed;
		// z-index: 2;
	}

	.assgin-search {
		// width: calc(100vw - 80rpx);
		height: 68rpx;
		margin: 0 40rpx;
		background-color: #fff;
		border: 1px solid rgba(255, 90, 95, 1);
		border-radius: 44rpx;
		// box-sizing: border-box;
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;

		.search-input {
			display: flex;
			align-items: center;
			&/deep/.search-icon {
				margin-left: 20rpx;
			}

			input {
				font-family: SourceHanSansCN-Regular;
				font-size: 13px;
				color: #333333;
				font-weight: 400;
				line-height: 68rpx;
				min-height: 68rpx;
				height: 68rpx;
			}
		}

		.search-btn {
			background-color: rgba(255, 90, 95, 1);
			border-radius: 44rpx;
			width: 108rpx;
			height: 72rpx;
			text-align: center;
			line-height: 72rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 28rpx;
			color: #FFFFFF;
			font-weight: 400;
			position: absolute;
			top: -2rpx;
			right: -2rpx;
			margin: 0;
			padding: 0;
		}
	}
</style>
