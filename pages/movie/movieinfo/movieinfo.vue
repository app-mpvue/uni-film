<!-- 看片页二级界面-影片详情 -->
<template>
	<view>
		<view class="movie-datail-top-video">
		    <video id="myVideo" src="http://gslb.miguyyvod.lovev.com/depository_yqv/asset/zhengshi/1003/967/649/1003967649/media/1003967649_1018319712_455.mp4?msisdn=20190927015623&amp;mdspid=&amp;spid=800033&amp;netType=0&amp;sid=1503303281&amp;pid=2028594089&amp;timestamp=20190927015623&amp;Channel_ID=0116_25000000-99000-100300010010001&amp;ProgramID=662080194&amp;ParentNodeID=-99&amp;assertID=1503303281&amp;client_ip=1.86.54.128&amp;SecurityKey=20190927015623&amp;promotionId=&amp;mvid=1003967649&amp;mcid=1000&amp;mpid=130000099021&amp;playurlVersion=MV-SJ-H1-0.0.3&amp;userid=&amp;jmhm=&amp;videocodec=h264&amp;encrypt=f5c9cc2716e0b66606c8c13d0b380da3"
		        @error="videoErrorCallback()"></video>
		</view>
		
		<view class="movie-datail-middle-introduction">
			<view class="movie-name">罗小黑战记</view>
			<view class="movie-st">
				<span class="movie-score">9.1分</span>
				<span class="movie-time">2019-06-27（内地）</span>
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
	            
			}
	    },
	    onReady: function(res) {
	        // #ifndef MP-ALIPAY
	        this.videoContext = uni.createVideoContext('myVideo')
	        // #endif
	    },
	    methods: {
	        videoErrorCallback: function(e) {
	            uni.showModal({
	                content: e.target.errMsg,
	                showCancel: false
	            })
	        },
	    }
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

