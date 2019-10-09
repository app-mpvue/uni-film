<!-- create by lijk -->
<template>
	<view>
		<!-- 搜索框与图标部分 -->
		<view class="container1">
			<!-- 搜索框组件 -->
			<view class="content">
				<uni-search :iconSrc="iconSrc" :inputAttr="inputAttr">
					<!-- <template v-slot:icon>
						<view class="icon-wrap">
							<image class="icon"  mode="aspectFit"  src="../../static/uni-search/icon_clear.png"></image>
						</view>
					</template> -->
				</uni-search>
			</view>

			<!-- 下载和历史记录图标 -->
			<view class="icons">
				<image src="../../static/lee-search/download24x24.png"></image>
			</view>
			<view class="icons">
				<image src="../../static/lee-search/history24x24.png"></image>
			</view>
		</view>
		
		<!-- 片库按钮 -->
		<view class="orderStatue">
			<button class="orderStatueItem" style="color: red;">片库</button>
			<button class="orderStatueItem" >看片推荐</button>
			<button class="orderStatueItem">小视频</button>
		</view>
		
		<!-- 电影海报列表-->
		<view class="movie-list page-block">
			<!-- 电影海报 -->
			<view class="poster-wapper" v-for="trailer in trailerList">
				<!-- <navigator open-type="navigate" :url="'../movie/movie?trailerId=' + superhero.id"> -->
				<navigator open-type="navigate" :url="'../movie/movieinfo/movieinfo?movieId=' + trailer.movieId">
					<image
					:src="trailer.movieImg" 
					class="poster">
					</image>
				</navigator>
				
				<!-- </navigator> -->
				
				<!-- 电影名称 -->
				<view class="movie-name" style="text-align: center;">
						{{trailer.movieName}}
				</view>
					<!-- <trailerStars :innerScore="superhero.score" showNum="1"></trailerStars> -->
				<!-- 电影评分 -->
				<trailerStars :innerScore="trailer.movieScore" showNum="1"></trailerStars>
				<!-- <view class="movie-score-wapper">
					<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
					<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
					<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
					<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
					<image src="../../static/icos/star-gray.png" class="star-ico"></image>
					<view class="movie-score">
					{{trailer.movieScore}}
					</view>
				</view> -->
			</view>
			
		</view>
	</view>
		
		
	</view>
</template>

<script>
import uniSearch from '../../components/lee-search/lee-search.vue'
import trailerStars from "../../components/trailerStars.vue"

export default {
	components: {
		uniSearch,
		trailerStars
	},
	data() {
		return {
			iconSrc: {
				logo: '../../static/lee-search/icon_search.png',
				voice: '../../static/lee-search/icon_voice.png',
				scan: '../../static/lee-search/icon_scan.png',
				clear: '../../static/lee-search/icon_clear.png'
			},
			inputAttr: {
				backgroundColor: '#f2f2f2',
				placeholderText: '搜索影片和影人'
			},
			trailerList: []
		};
	},
	onLoad() {
		var me = this;
		uni.showLoading({
			mask: true,
			title:"请稍后..."
		});
		uni.showNavigationBarLoading();
	
		var serverUrl = me.serverUrl;
		// 查询数据列表
		uni.request({
			url: serverUrl + '/movie/movieList',
			method: "GET",
			success: (res) => {
				// 获取真实数据之前，务必判断状态是否为200
				if (res.data.status == 200) {
					// debugger;
					var trailerList = res.data.result;
					me.trailerList = trailerList;
				}
			},
			complete: () => {
				uni.hideNavigationBarLoading();
				uni.hideLoading();
				uni.stopPullDownRefresh();
			}
		});
	},
	methods: {
		scan(data) {
			console.log(data);
		}
	}
};
</script>

<style lang="scss">
	@import url("movie.css");
// .container1 {
// 	display: flex;
// 	flex-direction: row;
// 	flex-wrap: nowrap;
// 	justify-content: space-around;
// 	margin-top: 10upx;
// }
// .icons {
// 	display: flex;
// 	flex-direction: row;
// 	width: 9%;
// 	height: 63upx;
// }
// .icons image {
// 	top: 5upx;
// 	height: 100%;
// }
// .content {
// 	text-align: center;
// 	height: 80upx;
// 	.icon-wrap {
// 		position: relative;
// 		height: 60upx;
// 		top: 0;
// 		box-sizing: border-box;
// 		.icon {
// 			width: 60upx;
// 			height: 60upx;
// 			padding: 10upx;
// 			box-sizing: border-box;
// 		}
// 	}
// }
// .orderStatue {
// 	display: flex;
// 	flex-direction: row;
// }
// 
// .orderStatueItem {
// 	width: 33%;
// 	height:20%;
// 	font-size: 30upx;
// 	
// }
// .movie-list {
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: flex-start;
// 	flex-wrap: wrap;
// 	
// 	padding: 10upx 10upx 0upx 10upx;
// }
// .poster-wapper {
// 		display: flex;
// 		flex-direction: column;
// 		padding: 10upx 20upx;
// 	}
// 	.poster {
// 		width: 200upx;
// 		height: 270upx;
// 	}
// 	.movie-name {
// 		width: 200upx;
// 		margin-top: 10upx;
// 		font-size: 14px;
// 		font-weight: bold;
// 		/* name超出则省略 */
// 		white-space: nowrap;
// 		overflow: hidden;
// 		text-overflow: ellipsis;
// 	}
// 	.movie-score-wapper {
// 		display: flex;
// 		flex-direction: row;
// 	}
// 	.star-ico {
// 		width: 20upx;
// 		height: 20upx;
// 		margin-top: 6upx;
// 	}
// 	.movie-score {
// 		font-size: 12upx;
// 		color: red;
// 		margin-left: 69.97upx;
// 	}
</style>