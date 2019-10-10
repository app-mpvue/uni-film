
<template>
	<view>
         <view>
         	<uni-card is-full="true"
         	:title="movie.location" thumbnail='/static/timg1.jpg'  :note="movie.cineName">
			
			
			<uni-card is-full="true" :title="'最低消费：'+movie.miniprice+'元'" thumbnail='/static/renminbi.jpg' :extra="movie.label" >
			</uni-card>
			
			<view>
				<view class="page-body">
					<view class="page-section page-section-gap">
						<map style="width: 100%; height: 300rpx;" :latitude="latitude1" :longitude="longitude1" :markers="covers">
						</map>
					</view>
				</view>
			</view>
			
         	</uni-card>
         </view>
		 
		<button @click="usemap()">查看地图</button>
		<view class="fengexian">
			
		</view>
		<view class="sec-header">
			<text class="moviename">正在热播:</text>
		</view>

		<view >
			<uni-card class="unicard" v-for="movie in movieList" :key="movie.movieId"
			:title="movie.movieName" :thumbnail="movie.movieImg"  :note="movie.movieTime">
			<uni-card
			    mode="style"
			    :is-shadow="true"
			    :thumbnail="movie.movieImg"
			     
			>
			    <view>评分：{{movie.movieScore}}  </view> 
				<view>{{movie.movieActor}} </view> 
			</uni-card> 
			</uni-card>
		</view>

	</view>
</template>

<script>
	
import uniCard from "@/components/uni-card/uni-card"
	export default {
		components: {uniCard},
		data() {
			return {
				
				scrollTop: 0,
				      old: {
				                scrollTop: 0
				            },
							

				title: 'map',
				latitude: 0,
				longitude: 0,
				addressname:'',
				name:'',
				latitude1: 34.192714,
				longitude1: 108.887429,
				covers: [{
					latitude: 34.192714,
					longitude: 108.887429,
					iconPath: '/static/timg1.jpg'
				}, {
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/timg1.jpg'
				}],
                
				movieList: [],
			    movie:{},

				addressData: {
					name: '',
					mobile: '',
					addressName: '在地图选择',
					address: '',
					area: '',
					default: false
				},

				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				cineId11:'',
			}
		},
		onLoad(e) {
			this.cineId11 = e.cinemaId;
			 console.log(this.cineId11);
			uni.request({
				method: 'GET',
				url: 'http://45.76.105.46:8080/cinema/detail?cinemaId='+this.cineId11,
				success: (res) => {
					console.log(res.data.result.latitude);
					this.text = 'request success';
					// this.latitude1=parseFloat(res.data.result.latitude);
					// this.longitude1=parseFloat(res.data.result.longitude);
					this.latitude=parseFloat(res.data.result.latitude);
					this.longitude=parseFloat(res.data.result.longitude);
					
					//地图需要正确坐标
					// this.covers[0].latitude=parseFloat(res.data.result.latitude);
					// this.covers[0].longitude=parseFloat(res.data.result.longitude);
					
					this.addressname=res.data.result.location;
					this.name=res.data.result.cineName;
					this.movie=res.data.result;
                    this.movieList=res.data.result.movieList;
					
                    console.log('movieList:' + this.movieList);
					console.log('latitude:' + this.latitude);
					console.log('longitude:' + this.longitude);
					console.log(' this.covers[0].latitude:' +  this.covers[0].latitude);
				},
			});

		},

		methods: {
			
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			ntervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},

			currentlocation() {
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						console.log('当前位置的address：' + res.address);

					}
				});
			},

			usemap() {
				uni.showToast({
					title: "请打开GPS定位"
				})


				var that = this;

				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function(res) {
						// const latitude = res.latitude;
						// const longitude = res.longitude;

						const latitude = parseFloat(that.latitude);
						const longitude = parseFloat(that.longitude);

						const geocode = true;
						const address = that.addressname;
						const name = that.name;

						console.log(that.latitude);
						console.log(that.longitude);
						console.log(that.addressname);
						console.log(res);
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							address:address,
							name:name,
							// latitude: 34.192714,
							// longitude: 108.887429,
							success: function() {
								console.log('success');
								console.log(res);
							}
						});
					},
					fail: (res) => {

						this.util.message('地址信息获取失败请打开GPRS权限')

					}
				});
			}

		}
	}
</script>

<style>
	.unicard{
		margin-bottom: 20rpx;
	}
	.fengexian{
		width: 95%;
		height: 1px;
		background-color: #E6E6E6;
		margin: 15px auto;
	}
	.swiper{
		width: 100%;
		
	}
	swiper-item  image{
		display: block;
		width: 100%;
	}
	.map {
		height: 400upx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.moviename{
		    width: 300px;
		    height: 200px;
		    position: absolute;
		    left: 50%;
		    margin-left: -150px;
		    background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
		    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
		    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
		    -webkit-background-size: 200% 100%; 
		    -webkit-animation: masked-animation 4s linear infinite;
		    font-size: 20px;
	},
	.sec-header{
		width: 300rpx;
		height: 50rpx;
		margin-bottom: 20rpx;
		
	}
</style>
