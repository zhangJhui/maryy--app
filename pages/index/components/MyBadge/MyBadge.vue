<template>
	<view class="badgeContent" :style="{ top: `${offset[0] * 2}rpx`,right: `${offset[1] * 2}rpx` }">
		 {{ msgNum }}
	</view>
</template>

<script>
	export default {
		props: {
			msgNum: Number,
			offset: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.badgeContent {
		width: 32rpx;
		height: 32rpx;
		background: #FF5A5F;
		border-radius: 50%;
		font-size: 20rpx;
		text-align: center;
		line-height: 32rpx;
		position: absolute;
		font-size: 20rpx;
		color: #FFFFFF;
		letter-spacing: 0;
		font-weight: 400;

	}
</style>
