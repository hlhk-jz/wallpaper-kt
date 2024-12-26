<template>
	<view class="userLayout">
		<view class="userInfo">
			<view class="img">
				<image  src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">
				110.12.22.33
			</view>
			<view class="from">
				来自：山东
			</view>
		</view>
	
		<view class="zhong">
			<view class="row">
				<view class="left">
					<uni-icons type="download-filled"  size="20"></uni-icons>
			        <view class="text">我的下载</view>
				</view>
				<view class="right">
					<view class="count" >33</view>
					<uni-icons type="right" size="30" color="#A0A0A0"></uni-icons>
				</view>
			</view>
			<view class="row">
				<view class="left">
					<uni-icons type="star-filled" color="#27B189" size="20"></uni-icons>
			        <view class="text">我的评分</view>
				</view>
				<view class="right">
					<view class="count" >33</view>
					<uni-icons type="right" size="30" color="#A0A0A0"></uni-icons>
				</view>
			</view>
			<view class="row">
				<view class="left ">
					<uni-icons type="chatboxes-filled" color="#27B189" size="20"></uni-icons>
			        <view class="text">联系客服</view>
				</view>
				<!-- #ifdef APP -->
					<button open-type="contact">联系客服</button>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				     <button @click="phoneShow">拨打电话</button>
				<!-- #endif -->
				<view class="right">
					<uni-icons type="right" size="30" color="#A0A0A0"></uni-icons>
				</view>
				
			</view>
		</view>
		
		<view class="xia">
			<view class="row">
				<view class="left">
					<uni-icons type="notification-filled" color="#27B189" size="20"></uni-icons>
			        <view class="text">订阅更新</view>
				</view>
				<view class="right">
					<uni-icons type="right" size="30" color="#A0A0A0"></uni-icons>
				</view>
			</view>
	
			<view class="row">
				<view class="left">
					<uni-icons type="flag-filled" color="#27B189" size="20"></uni-icons>
			        <view class="text">常见问题</view>
				</view>
				<view class="right">
					<uni-icons type="right" size="30" color="#A0A0A0"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const phoneShow = ()=>{
		uni.makePhoneCall({
			phoneNumber:"15998670743"
		})
	}

</script>

<style lang="scss">

    .row{
		  display: flex;
		  justify-content: space-between;
		  height: 130rpx;
		  border-bottom: 1px solid #ECECEC;
		  align-items: center;
		  padding: 0 20rpx;
		  position: relative;
		  &:last-child{border-bottom: 0;}
		  .left{
			  display: flex;
			  align-items: center;
			 
			  .text{
				  padding-left: 10rpx;
			  }
			  .uni-icons{
				  color: $brand-color !important;
			  }
		  }
		  .right{
			  display: flex;
			  align-items: center;
			  color: #A0A0A0;
		    }
			button{
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				opacity: 0;
			}
		  }
    .userLayout{
		padding-bottom: 10rpx;
	   .zhong{
		  margin: 0 30rpx;
		  border: 1px solid #ECECEC;
		  border-radius: 20rpx;
	   }
	   .xia{
		  margin: 60rpx 30rpx;
		  border: 1px solid #ECECEC;
		  border-radius: 20rpx;
	   }
	   .userInfo{
		   display: flex;
		   align-items: center;
		   justify-content: center;
		   flex-direction: column;
		   padding: 50rpx;
		   .img{
			   border-radius: 50%;
		       overflow: hidden;
		       height: 160rpx;
		       width: 160rpx;
			   image{
				   height: 100%;
				   width: 100%;
			   }
		   }
		   .ip{
			   padding: 15rpx 0;
		   }
		   .from{
			   color: #9FACAC;
		   }
	   }
   }
</style>
