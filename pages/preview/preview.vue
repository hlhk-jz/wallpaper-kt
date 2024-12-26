<template>
	<view class="preview">
		<view class="image" @click="isShow">
			<swiper>
				<swiper-item v-for="item in 6">
					<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="mask" v-if="isTrue">
			<view class="gobak" @click="gobak">
				<uni-icons type="left" size="30"></uni-icons>
			</view>
			<view class="xiegan">7 / 12</view>
			<view class="szrq">22:24</view>
			<view class="hzrq">12月23日</view>
			<view class="dbkj">
				<view class="dbkj1"  @click="open">
						<uni-icons type="info"  size="20"></uni-icons>
						<view>信息</view>
				</view>
				<view  class="dbkj1" @click="pfTk">
						<uni-icons type="star-filled"  size="20"></uni-icons>
						<view>{{ pfNum }}分</view>
				</view>
				<view  class="dbkj1">
						<uni-icons type="download"  size="20"></uni-icons>
						<view>下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">
			<view class="infoData">
				<view class="info">
					<view></view>
					<view class="title">壁纸信息</view>
					<view @click="clos">
						<uni-icons type="closeempty" size="22" color="#9C9898"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="row">
						<view class="til">壁纸ID：</view>
						<view class="contdata">ASDDS11223434343</view>
					</view>
					<view class="row">
						<view class="til">发布者：</view>
						<view class="contdata">小咪爱吃鱼</view>
					</view>
					<view class="row">
						<view class="til">评分：</view>
						<view class="contdata sco">
							<uni-rate v-model="rateValue" @change="onChange" />
							<text class="scoMsg">5分</text>
						</view>
					</view>
					<view class="row">
						<view class="til">摘要：</view>
						<view class="contdata">小咪爱吃鱼的点点滴滴多多多多多多</view>
					</view>
					<view class="row">
						<view class="til">标签：</view>
						<view class="contdata"><uni-tag text="标签"></uni-tag></view>
					</view>
					
					<view class="msg">
						声明：各个参与者均视为具有完全民事行为能力的人,如在活动中发生人身损害后果,其他参与者不承担赔偿责任,由受损害人依据法律规定和本声明依法解决
					</view>
					
				</scroll-view>
			</view>
		</uni-popup>
		
		<!--评分弹框-->
		<view class="pingfen" v-if="isPf">
			<view class="pfTatle">
				<view></view>
				<view>壁纸信息</view>
				<view @click="pfTk">
					<uni-icons type="closeempty" size="22" color="#9C9898"></uni-icons>
				</view>
			</view>
			<view class="xing" >
				<uni-rate v-model="pfNum" size="35" @change="pfonChange" />
				<text class="xfen" >5分</text>
			</view>
			<button class="anniu">确认评分</button>
		</view>
	</view>
	
	
</template>

<script setup>
	import {ref} from "vue";
	
	const isTrue = ref(true);
    const isShow = ()=>{
	   isTrue.value = !isTrue.value;
   }
   //弹出详细信息
   const popup = ref(null);
   const open = ()=>{
	   popup.value.open('bottom')
   }
   
   //返回
   const gobak = ()=>{
	   uni.navigateBack();
   }
   
   //评分
   const rateValue = ref(0);
   const onChange = ()=>{
	   
   }
   //关闭
   const clos = () =>{
	    popup.value.close();
   }
   //点击评分
   const isPf = ref(false)
   const pfNum = ref(0)
   function pfTk(){
	  isPf.value = !isPf.value;
   }
   const pfonChange = (e)=>{
	   pfNum.value =  e.value
   }
   
   
</script>

<style lang="scss">
     .preview{
		 .pingfen{
			 position: absolute;
			 left: 50%;
			 top: 50%;
			 transform: translate(-50%,-50%,);
			 width: 530rpx;
			 height: 340rpx;
			 border-radius: 30rpx;
			 background-color: white;
			 .pfTatle{
				 display: flex;
				 justify-content: space-between;
				 padding: 30rpx;
				 color: #9C9898;
			 }
			 .xing{
				display: flex;
				justify-content: center;
				align-items: center;
				.xfen{
					margin-left: 20rpx;
					color: #FFCB41;
					font-weight: 500;
					font-size: 35rpx;
				}
			 }
			.anniu{
				 width: 190rpx;
				 height: 70rpx;
				 font-size: 30rpx;
				 margin-top: 40rpx;
			}
			
		 }
		 .infoData{
			 border-radius: 20rpx 20rpx 0 0;
			 overflow: hidden;
			 width: 100%;
			 background-color: white;
			 padding: 30rpx;
			.info{
			 display: flex;
			 justify-content: space-between;
			 .title{
				 color: #9C9898;
			 }
			} 
			scroll-view{
					 max-height: 50vh;
					 .row{
						 display: flex;
						 padding: 20rpx;
						 .til{
							 color: #9C9898;
							 width: 170rpx;
							 text-align: right;
						 }
						 .sco{
							 display: flex;
							 align-items: center;
							 .scoMsg{
								 margin-left: 20rpx;
							 }
						 }
					 }
					 .msg{
						 margin: 20rpx 0;
						 background-color: #F6F6F6;
						 color: #9C9898;
					 }
			}
		 }
		 
		 width: 100%;
		 height: 100vh;
		 position: relative;
		 .mask{
			 &>view{
				 margin: auto;
				 width: fit-content;
				 position: absolute;
				 left: 0;
				 right: 0;
			 }
			.gobak{
				top: 20rpx;
				margin-left: 10rpx;
				width: fit-content;
				position: absolute;
				left: 0;
				right: 0;
				font-size: 100rpx;
			}
			.xiegan{	
			  padding: 8rpx 20rpx;
			  top: 10vh;
			  color: white;
			  background-color: rgba(0, 0, 0,0.3);
			  border-radius: 48%;
			  backdrop-filter: blur(10rpx);
			}
			
			.szrq{
				top: calc(10vh + 80rpx);
				font-size: 140rpx;
				color: white;
			}
			
			.hzrq{
				top: calc(10vh + 250rpx);
				color: white;
			}
			
			.dbkj{
				bottom: 10vh;
				background-color: rgba(255,255,255,0.8);
				display: flex;
				width: 65vw;
				height: 120rpx;
				border-radius: 120rpx;
				.dbkj1{
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
			
		 }
		 .image{
				width: 100%;
				height: 100%;
			 swiper{
				width: 100%;
				height: 100%;
					image{
					width: 100%;
					height: 100%;
					}
			 }
		 } 
		
	 }
</style>
