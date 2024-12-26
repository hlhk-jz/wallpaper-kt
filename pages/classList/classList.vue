<template>
	<view class="classListLayout">
		<navigator url="/pages/preview/preview" class="content" v-for="item in 15">
			<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
		</navigator>
	</view>
</template>

<script setup>
      
</script>

<style lang="scss">
      .classListLayout{
		  margin: 0 30rpx;
		  display: grid;
		  grid-template-columns: repeat(3,1fr);
		  gap: 5rpx;
		  .content{
			  height: 340rpx;
			  image{
				  width: 100%;
				  height: 100%;
				  display: block;
			  }
		  }
	  }
</style>
