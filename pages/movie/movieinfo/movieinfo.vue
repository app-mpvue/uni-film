<!-- 看片页二级界面-影片详情 -->
<template>
	<view>
		<view class="movie-datail-top-video">
		    <video id="myVideo" :src="moviePath" 
		        @error="videoErrorCallback()"></video>
		</view>
		
		<view class="movie-datail-middle-introduction">
			<view class="movie-name">{{movieName}}</view>
			<view class="movie-st">
				<span class="movie-score">{{movieScore}}</span>
				<span class="movie-time">{{movieTime}}</span>
			</view>
			
			<view class="horizon-line"></view>
			
			<view class="picture-list-name">视频剧照</view>
			<view class="picture-list">
				<image src="../../../static/picture-list/s1.jpg"></image>
				<image src="../../../static/picture-list/s2.jpg"></image>
				<image src="../../../static/picture-list/s3.jpg"></image>
			</view>
		</view>
		
		<view class="movie-datail-bottom-buytickets">
			<button class="buy-tickets-button">特惠购票</button>
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
	            movieActor: '',
			    moviePath: '',
				movieTime: '',
				movieScore: '',
				movieName: '',
				movieImg: '',
				movieId: ''
			}
	    },
	    onReady: function(res) {
	        // #ifndef MP-ALIPAY
	        this.videoContext = uni.createVideoContext('myVideo')
	        // #endif
	    },
		onLoad: function(option) {
			console.log("movieId:"+option.movieId);
			this.movieId = option.movieId;
			this.getHomepage()
		},
	    methods: {
	        videoErrorCallback: function(e) {
	            uni.showModal({
	                content: e.target.errMsg,
	                showCancel: false
	            })
	        },
			getHomepage() {
			  var that = this
			  uni.request({
			    url: 'http://45.76.105.46:8080/movie/movieDetail?movieId='+that.movieId,
			    method: 'GET',
			    success(res) {
			      console.log(res.data.result)
				  that.movieName = res.data.result.movieName
				  that.moviePath = res.data.result.moviePath
				  that.movieTime = res.data.result.movieTime
				  that.movieScore = res.data.result.movieScore
				  that.moviePath = res.data.result.moviePath
			    }
			  })
			}
	    },
		
	}
</script>

<style>
#myVideo {
	position: fixed;
	top: 0;
	display: block;
	width: 100%;
	height: 450rpx;
}

.movie-datail-middle-introduction {
	margin-top: 450rpx;
	display: flex;
	flex-direction: column;
}
.movie-name {
	font-size: 35rpx;
	font-weight: 600;
	margin-top: 25rpx;
	margin-left: 20rpx;
}
.movie-st {
	font-size: 25rpx;
	margin-top: 18rpx;
}
.movie-score {
	display: inline-block;
	color: red;
	width: 100rpx;
	margin-left: 20rpx;
}
.movie-time {
	margin-left: 10rpx;
}

.horizon-line {
	width: 95%;
	height: 1px;
	background-color: #E6E6E6;
	margin: 15px auto;
}
.picture-list-name {
	font-size: 35rpx;
	font-weight: 600;
	margin-left: 20rpx;
	margin-bottom: 20rpx;
}
.picture-list {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin-left: 15rpx;
	/* justify-content: space-around; */
}
image {
	display: inline-block;
	width: 235rpx;
	height: 180rpx;
	margin-right: 8rpx;
}

.movie-datail-bottom-buytickets {
	position: fixed;
	bottom: 10rpx;
	width: 100%;
	margin: 0 auto;
}
.buy-tickets-button {
	width: 700rpx;
	height: 80rpx;
	line-height: 80rpx;
	color: white;
	font-size: 35rpx;
	background-color: red;
	border-radius: 40rpx;
}
</style>

