<template>
	<view class="classLayout userLayout">
		<header-compont title="分类"></header-compont>
	    <view class="content">
			<common-image v-for="item in 15" :isShow="false"></common-image>
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
    .classLayout{
		.content{
			padding: 30rpx;
			display: grid;
			gap: 15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	
	}
</style>
