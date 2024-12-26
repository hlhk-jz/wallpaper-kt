<template>
	<view class="header head1 ">
		<view class="kbhz" :style="{height: getSatusBarHeight()+'px'}"></view>
		<view class="tatle"  :style="{height: getJnAnHeght()+'px'}">
			<view class="tatleMsg">{{ title }}</view>
			<view class="szk">
				<uni-icons type="search" size="22"></uni-icons>
				<text class="text">搜索</text>
			</view>
		</view>
	</view>
	<view :style="{ height: getZt()+'px'}">
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import { getSatusBarHeight,getJnAnHeght,getZt } from '@/common/util/divec.js'
	defineProps({
		title: {
			type: String,
			default: "壁纸"
		}
	})
	
	// let inf = uni.getSystemInfoSync();
	// const nPx = ref(inf.statusBarHeight)
	// let {height,top} = uni.getMenuButtonBoundingClientRect();
	// let jnAnHeght = (top-inf.statusBarHeight)*2 + height;
	// console.log("=======",jnAnHeght)
</script>

<style lang="scss">
	.head1{
		// background:
		// radial-gradient(90% 500rpx at   left top,#CEF0DF,transparent),
		// radial-gradient(40% 500rpx at   right top,#F3E6DD,transparent);
		background: linear-gradient(45deg,#CEF0DF,#F3E6DD 60%); 
	}
     .header{
		 position: fixed;
		 z-index: 111;
		 width: 100%;
		 padding: 0 30rpx;
		 .tatle{
			 display: flex;
			 align-items: center;
			 margin-bottom: 30rpx;
			 .tatleMsg{
				 display: flex;
				 align-items: center;
				 font-weight: 600;
				 font-size: 50rpx;
				 margin-right: 40rpx;
				 
			 }
			 .szk{
				 padding-left: 20rpx;
				 display: flex;
				 align-items: center;
				 border: 1px solid white;
				 justify-content: left;
				 width: 230rpx;
				 border-radius: 30rpx;
				 background-color: #EAF6EC;
				 .text{
					 padding-left: 10rpx;
				 }
			 }
		 }
	 }
</style>