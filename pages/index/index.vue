<template>
	<view class="homeLayout userLayout">
		<header-compont title="首页"></header-compont>
		<!--顶部横向轮播图-->
		<view class="banner">
			<swiper indicator-dots circular indicator-color="rgba(255,255, 255, 0.5)"
			indicator-active-color="#ffffff" autoplay  interval="2000">
				<swiper-item v-for="(item,index) in imgList" :key="item.id">
					<image :src="item.url" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
	
		<!--顶部纵向轮播-->
		<view class="bannerZONG">
			<view class="gonggao">
				<uni-icons type="sound-filled" color="#22B48B" size="20"></uni-icons>
				<text>公告</text>
			</view>
			<view class="lunbo">
				<swiper autoplay vertical interval="2000">
					<swiper-item>
						vvvvvvvvvvv1111111111111111111
					</swiper-item>
					<swiper-item>
						aaaaaaa1111111111111111111111111111111111112222222222222
					</swiper-item>
					<swiper-item>
						vvvvvvvvvvv
					</swiper-item>
				</swiper>
			</view>
			<view class="jiantou">
					<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>
		
		<view class="select">
			<common-title>
				<template #leftmsg>
					<view>
						每日推荐
					</view>
				</template>
				<template #righdata>
					<view class="rightData">
						<uni-icons type="calendar" color="#22B48B" size="20"></uni-icons>
						<view class="datemsg">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="img" v-for="(item,index) in imgList" :key="item.id">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="ztjx">
			<common-title>
				<template #leftmsg>
					<view>
						专题精选
					</view>
				</template>
				<template #righdata>
					<navigator url="">
						More+
					</navigator>
				</template>
			</common-title>
			
			<view class="imagesgg">
				<common-image v-for="item in imgList" :key="item.id" :item="item"></common-image>
				<common-image :isShow="true"></common-image>
			</view>
			
			
		</view>
		
	</view>
</template>

<script setup>
	import {ref} from "vue";
	import { requestDataApi} from "@/api/apijs.js"

	
	function formatTimeDiff(timestamp) {
	    const currentTime = new Date().getTime();
	    const diff = currentTime - timestamp;
	    const oneMinute = 60 * 1000;
	    const oneHour = 60 * oneMinute;
	    const oneDay = 24 * oneHour;
	    const oneMonth = 30 * oneDay;  // 简单以30天估算一个月，实际情况可能更复杂
	
	    if (diff < oneMinute) {
	        return '1分钟';
	    } else if (diff < oneHour) {
	        const minutes = Math.floor(diff / oneMinute);
	        return `${minutes}分钟`;
	    } else if (diff < oneDay) {
	        const hours = Math.floor(diff / oneHour);
	        return `${hours}小时`;
	    } else if (diff < oneMonth) {
	        const days = Math.floor(diff / oneDay);
	        return `${days}天`;
	    }
	    return null;
	}
	
	
	const imgList = ref([])
	const requestData= async ()=>{
		let data = await requestDataApi();
		imgList.value = data.data;
	}
	requestData();
	
</script>

<style lang="scss">
	.homeLayout{
		.banner{
			width: 750rpx;
			height: 343rpx;
			padding: 0 30rpx;
			swiper{
				swiper-item{
					image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
					}
				}
			}
		}
		.bannerZONG{
			background-color: #f9f9f9;
			height: 80rpx;
			width: 690rpx;
			margin: 0 auto;
			border-radius: 30rpx;
			display: flex;
			padding: 18rpx 31rpx;
			.gonggao{
				display: flex;
				align-items: center;
				width: 150rpx;
				color: #22B48B;
				
				text{
					font-weight: 600;
					font-size: 80%;
				}
			}
			.lunbo{
				flex: 1;
				margin: 0 20rpx;
				swiper{
					height: 100%;
					&-item{
						color: #666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.jiantou{
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.select{
			.rightData{
				display: flex;
				align-items: center;
				.datemsg{
					display: inline-block;
					margin-left: 10rpx;
					color: #22B48B;
				}
			}
			.content{
				width: 720rpx;
				margin-top: 30rpx;
				margin-left: 30rpx;
				scroll-view{
					white-space: nowrap;
					.img{
						width: 200rpx;
						height: 440rpx;
						display: inline-block;
						margin-right: 20rpx;
						image{
							width: 100%;
							height: 100%;	
							border-radius: 10rpx;
							
						}
					}
					.img:last-child{
						margin-right: 30rpx;
					}
				}
			}
		}
		.ztjx{
		    padding: 30rpx 0;
			.righdata{
				color: red;
			}
			.imagesgg{
				padding: 0 30rpx;
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3,1fr);

			}
		}
		
	}
</style>
