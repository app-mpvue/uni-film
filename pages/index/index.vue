<template>
	<view>
		<!-- 顶部轮播图 -->
		<view>
			<swiper indicator-dots="true" autoplay="true">
				<swiper-item>
					<image style="width: 100%; height: 100%;" src="../../static/indexPic/20190929142443.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image style="width: 100%; height: 100%;" src="../../static/indexPic/20190929142509.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image style="width: 100%; height: 100%;" src="../../static/indexPic/20190929142514.jpg"></image>
				</swiper-item>
			</swiper>

		</view>

		<!-- 电影院列表 -->
		<scroll-view class="cinemaList" scroll-y="true" show-scrollbar="true">
			<!-- <view class="list-item" v-for="item in cinemaList" :url="'cinemainfo/cinemainfo?cinemaId='+item.cinemaId"> -->
			<view class="list-item" v-for="item in cinemaList" @tap="linkToDetail(item.cinemaId)">
				<view class="item-flex"><span style=" font-size: 15px; font-weight: bold;">{{item.cineName}}</span><span style=" font-size: 8px;"><span
						 style="color: #F0AD4E;">¥{{item.miniprice}}</span><span>元</span></span></view>
				<view class="item-flex"><span style="font-size: 10px;" class="fonthiden">{{item.location}}</span><span style="font-size: 5px;color: #808080;">{{Distance}}</span></view>

				<view class="tag-flex">
					<view v-for="tag in item.label">
						<button :class="tagways" style="color: #C8C7CC; border-color: #C8C7CC;" size="mini" plain="true" type="default">{{tag}}</button>
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cinemaList: [],
				tagways: 'tag-btn',
				Distance: '1.25km',
				freshTime: '',
				total: ''
			}
		},

		onLoad() {
			this.freshTime = 1;
			this.getCinemaIfo();
		},

		onPullDownRefresh() {

		},

		onReachBottom() {
			this.freshTime = this.freshTime + 1;
			console.log('chudi ' + this.freshTime)
			if(this.freshTime <= this.total){
				this.loadCinemaIfo();
			}else {
				uni.showToast({
					title: '没有更多影院啦！',
					duration: 2000
				
				})
			}
			
		},

		onshow() {
			this.getCinemaIfo();
		},

		methods: {

			//懒加载
			loadCinemaIfo() {
				uni.request({
					url: this.$store.state.mainUrl + '/cinema/list',
					method: 'GET',
					data: {
						page: this.freshTime,
					},
					success: (res) => {
						console.log(res);
						for (let i = 0; i < res.data.data.result.length; i++) {
							this.cinemaList.push(res.data.data.result[i]);
						}
						console.log(this.cinemaList);
						console.log(this.cinemaList.length);
					},
					fail: (res) => {
						console.log('refresh error!');
					}
				});
			},

			//获取电影院信息
			getCinemaIfo() {
				uni.request({
					url: this.$store.state.mainUrl + '/cinema/list',
					method: 'GET',
					data: {
						page: this.freshTime,
					},
					success: (res) => {
						console.log(res);
						this.total = res.data.data.total
						this.cinemaList = res.data.data.result;
						console.log(this.cinemaList);
					},
					fail: (e) => {
						console.log(e);
					}
				});
			},

			//跳转至电影院详情页面
			linkToDetail(e) {
				uni.navigateTo({
					url: 'cinemainfo/cinemainfo?cinemaId=' + e,

				})
			}

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
