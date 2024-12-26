<template>
	<view class="box">
		<navigator url="/pages/classList/classList" class="nav" v-if="!isShow">
			<image class="img" :src="item.url" mode="aspectFill"></image>
			<view class="shang">2月更新</view>
			<view class="xia">可爱萌宠</view>
		</navigator>
		
		<navigator url="/pages/classification/classification" open-type="reLaunch" class="nav gengduo" v-if="isShow">
			<image class="img" src="../../common/images/more.jpg" mode="aspectFill"></image>
			<view class="xia">
				<view class="gn"><uni-icons type="more-filled" size="30" color="width"></uni-icons></view>
                <view class="gn">更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isShow: false,
		item: {
			default(){
				return{
					url:"https://cdn2.thecatapi.com/images/a2g.png"
				}
			}
		}
	})
</script>

<style lang="scss">
    .box{
		border-radius: 20rpx;
		overflow: hidden;
		.nav{
			height: 340rpx;
			position: relative;
			.img{
				width: 100%;
				height: 100%;
			}
			.shang{
				position: absolute;
				top: 0rpx;
				height: 40rpx ;
				background-color: #F0A084;
				border-radius: 0 0 12rpx;
				padding: 0rpx 15rpx;
			}
			.xia{
				position: absolute;
				bottom: 0rpx;
				width: 100%;
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: rgba(0, 0, 0, 0.2);
				color: white;
				font-weight: 600 ;
				backdrop-filter: blur(20rpx);
			}
		}
		.nav.gengduo{
			.xia{
				width: 100%;
				height: 100%;
				flex-direction: column;
			}
		}
	}
</style>