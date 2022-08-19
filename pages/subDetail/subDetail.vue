<template>
	<view class="content">
		<view v-for="(item,index) in data" :key="index" class="main">
			<view>
				<span>联系人</span><span>{{ item.name }}</span>
			</view>
			<view>
				<span>电话</span><span>{{ item.call }}</span>
			</view>
			<view>
				<span>预约时间</span><span>{{ item.date }}</span>
			</view>
			<view>
				<span>创建时间</span><span>{{ item.cdate }}</span>
			</view>
			<view>
				<span>是否联系</span><span><u-switch v-model="data.yn" activeColor="#5ac725"></u-switch></span>
			</view>
			<view>
				备注
				<view style="margin-top: 8rpx; height: 150rpx;">{{ item.note ? item.note : '暂无备注' }}</view>
			</view>
		</view>
		<u-button type="error" text="确定"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
					name: '张三',
					call: '13308016698',
					date: '2021-11-29',
					cdate: '2021-11-29',
					yn: true,
					note: ''
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content { background-color: #f6f6f6; height: 100vh; padding-top: 40rpx; }
	.main {
		background-color: #fff;
		> view {
			padding: 32rpx;
			
			&:not(:last-child) {
				border-bottom: 2rpx solid #E6E6E6;
				display: flex;
				justify-content: space-between;
			}
		}
	}
	.u-button {
		width: 90%;
		margin-top: 32rpx;
	}
</style>
