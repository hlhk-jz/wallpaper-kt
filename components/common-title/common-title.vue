<template>
	<view class="common-title">
		<view class="leftmsg">
			<slot name="leftmsg">
				
			</slot>
		</view>
		<view class="righdata">
			<slot name="righdata">
				
			</slot>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
    .common-title{
		display: flex;
		justify-content: space-between;
		padding: 30rpx
	}
</style>