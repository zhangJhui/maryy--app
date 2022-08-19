<template>
	<view class="input-modal">
		<view class="input-modal-header">
			<text>营业额录入</text>
			<view @click="$emit('cancel')">X</view>
		</view>
		<view class="input-modal-input">
			<view class="u-demo-block__content">
				<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
				<!-- #ifndef APP-NVUE -->
				<u-input placeholder="请输入总消费金额" shape="circle">
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<u--input placeholder="请输入总消费金额" shape="circle">
						<!-- #endif -->
						<u--text text="桌" slot="suffix" margin="0 3px 0 0" type="tips"></u--text>
						<!-- #ifndef APP-NVUE -->
				</u-input>
				<!-- #endif -->
				<!-- #ifdef APP-NVUE -->
				</u--input>
				<!-- #endif -->
			</view>
			<view class="u-demo-block__content">
				<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
				<!-- #ifndef APP-NVUE -->
				<u-input placeholder="请输入总消费金额" shape="circle">
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<u--input placeholder="请输入总消费金额" shape="circle">
						<!-- #endif -->
						<u--text text="元" slot="suffix" margin="0 3px 0 0" type="tips"></u--text>
						<!-- #ifndef APP-NVUE -->
				</u-input>
				<!-- #endif -->
				<!-- #ifdef APP-NVUE -->
				</u--input>
				<!-- #endif -->
			</view>
		</view>
		<view class="input-modal-btn">
			<u-button type="error" shape="circle" size="mini" text="提交" @click="$emit('inputSubmit')">
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"inputModal",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.input-modal {
		width: 69%;
		height: 32.5%;
		background-color: #FFF;
		border-radius: 24rpx;
		
		.u-input {
			height: 40rpx;
			margin-bottom: 32rpx;
		}

		.input-modal-header {
			width: 100%;
			height: 120rpx;
			background: url("@/static/turnover/modalBg2.png") no-repeat center center;
			background-size: 100%;
			position: relative;
			color: #fff;
			font-weight: 500;

			text {
				font-family: SourceHanSansCN-Medium;
				font-size: 28rpx;
				position: absolute;
				top: 40rpx;
				left: 32rpx;
				letter-spacing: 4rpx;
			}

			view {
				width: 41rpx;
				height: 41rpx;
				line-height: 41rpx;
				border: 1px #fff solid;
				border-radius: 100%;
				text-align: center;
				font-size: 24rpx;
				position: absolute;
				top: 20rpx;
				right: 20rpx;
			}
		}

		.input-modal-input {
			padding: 20rpx;
			.u-demo-block__content{
				margin-top: 20rpx;
			}
		}

		.input-modal-btn {

			&/deep/ .u-button {
				width: 456rpx;
				height: 72rpx;
				background: #FF5A5F;
				border-radius: 54rpx;
			}

			&/deep/ .u-button__text {
				font-family: SourceHanSansCN-Regular;
				font-size: 28rpx !important;
				color: #FFFFFF;
				font-weight: 400;
			}
		}
	}
</style>
