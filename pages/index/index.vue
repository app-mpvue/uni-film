<template>
	<view>
		<!-- 顶部轮播图 -->
		<view>
			<swiper indicator-dots="true" autoplay="true">
				<swiper-item>
					<image style="width: 100%; height: 100%;" src="../../static/indexPic/微信图片_20190929142443.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image style="width: 100%; height: 100%;" src="../../static/indexPic/微信图片_20190929142509.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image style="width: 100%; height: 100%;" src="../../static/indexPic/微信图片_20190929142514.jpg"></image>
				</swiper-item>
			</swiper>

		</view>
		
		<!-- 电影院列表 -->
		<scroll-view class="cinemaList" scroll-y="true" show-scrollbar="true">
			<navigator class="list-item" v-for="item in cinemaList" :url="'cinemainfo/cinemainfo?cinemaId='+item.cinemaId">
				<view class="item-flex"><span style=" font-size: 15px; font-weight: bold;">{{item.cineName}}</span><span style=" font-size: 8px;"><span
						 style="color: #F0AD4E;">¥{{item.miniprice}}</span><span>元</span></span></view>
				<view class="item-flex"><span style="font-size: 10px;" class="fonthiden">{{item.location}}</span><span style="font-size: 5px;color: #808080;">{{Distance}}</span></view>

				<view class="tag-flex">
					<view v-for="tag in item.label">
						<button :class="tagways" style="color: #C8C7CC; border-color: #C8C7CC;" size="mini" plain="true" type="default">{{tag}}</button>
					</view>
				</view>
			</navigator>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cinemaList: [],
				tagways:'tag-btn',
				Distance: '1.25km'
				}
		},

		onLoad() {
			this.getCinemaIfo();
		},

		onPullDownRefresh() {

		},

		onshow() {
			this.getCinemaIfo();
		},

		methods: {	
			
			//获取电影院信息
			getCinemaIfo() {
				uni.request({
					url: 'http://45.76.105.46:8080/cinema/list',
					method: 'GET',
					success: (res) => {
						console.log(res.data.result);
						this.cinemaList = res.data.result;
						console.log(this.cinemaList);
						console.log(this.cinemaList.length);
					}
				});
			},
			
			//跳转至电影院详情页面
			// linkToDetail(){
			// 	uni.navigateTo({
			// 		url: 'cinemainfo/cinemainfo?cinemaId=' + this.item.cinemaId,
					
			// 	})
			// }

		}
	}
</script>

<style>
	.tag-btn {
		padding-top: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		padding-right: 0px;
		width: 50px;
		height: 18px;
		font-size: 0.5px;
		text-align: center;
		line-height: 15px;
		color: #C8C7CC;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}

	.tag-flex {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-content: center;
		margin-top: 15upx;
	}

	.fonthiden {
		width: 245px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 15upx;
	}

	.item-flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}

	.cinemaList {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	.list-item {
		width: 90%;
		margin-top: 35rpx;
		padding-bottom: 10rpx;
		margin-left: 20px;
		border-bottom: #C0C0C0;
		border-bottom-width: 1px;
		border-bottom-style: solid;

	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
