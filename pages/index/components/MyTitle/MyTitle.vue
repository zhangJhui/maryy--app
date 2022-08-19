<template>
	<view class="content-MyTitle">
		<view class="msg-unread">
		{{ titleMsg }}
		<view class="point" v-if="msgNum !== 0"></view>
		</view>
		<view v-if="more" class="more" @click="handleAll">
			查看全部
			<u-icon name="arrow-right" color="#ACB0B7"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			titleMsg: String,
			more: Boolean,
			msgNum: Number
		},
		data() {
			return {
				
			}
		},
		methods: {
			handleAll() {
				this.$emit('lookAll')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.point {
		width: 12rpx;
		height: 12rpx;
		background: #FF0000;
		border-radius: 50%;
	}
	.content-MyTitle {
		width: 100%;
		display: flex;
		justify-content: space-between;
		
		.msg-unread {
			font-size: 34rpx;
			color: #333333;
			font-weight: 800;
			display: flex;
			align-items: center;
			
			.point {
				margin-left: 12rpx;
			}
		}
		
		.more {
			display: flex;
			align-items: center;
			font-size: 28rpx;
			color: #ACB0B7;
			
			.u-icon {
				margin-left: 12rpx;
			}
		}
	}
</style>
