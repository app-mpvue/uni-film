<!-- create by lijk -->
<template>
	<view>
		<!-- 搜索框与图标部分 -->
		<view class="container1">
			<!-- 搜索框组件 -->
			<view class="content">
				<uni-search :iconSrc="iconSrc" :inputAttr="inputAttr">
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
				<navigator open-type="navigate" :url="'../movie/movieinfo/movieinfo?movieId=' + trailer.movieId">
					<image
					:src="trailer.movieImg" 
					class="poster">
					</image>
				</navigator>
				
				<!-- 电影名称 -->
				<view class="movie-name" style="text-align: center;">
						{{trailer.movieName}}
				</view>
				<!-- 电影评分 -->
				<trailerStars :innerScore="trailer.movieScore" showNum="1"></trailerStars>
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
			trailerList: [],
			page: 1,				// 当前第几页
			totalPages: 1			// 总页数
		};
	},
	onLoad() {
		var me = this;
		uni.showLoading({
			mask: true,
			title:"请稍后..."
		});
		uni.showNavigationBarLoading();

		// 查询数据列表
		uni.request({
			url: this.$store.state.mainUrl + '/movie/movieList?page=1',
			method: "GET",
			success: (res) => {
				// 获取真实数据之前，务必判断状态是否为200
				if (res.data.status == 200) {
					var trailerList = res.data.data.result;
					this.totalPages = res.data.data.total;
					me.trailerList = trailerList;
					
				}
			},
			complete: () => {
				uni.hideNavigationBarLoading();
				uni.hideLoading();
			}
		});
	},
	onReachBottom(){
		var me = this;
		
		this.page = this.page + 1; //查询下一页面，当前页数累加1
		// 如果当前需要分页的分页数和总页数相等，就不分页
		if (this.page > this.totalPages) {
			uni.showToast({
				title: '没有更多的影片了',
				icon: 'none',
				duration: 1000
			});
			return;
		}
		me.pagedTrailerList(this.page);
	},
	methods: {
		scan(data) {
			console.log(data);
		},
		pagedTrailerList(page){
			var me = this;
			
			uni.showLoading({
				mask: true,
				title: "请稍后..."
			});
			uni.showNavigationBarLoading();
			
			var serverUrl = me.serverUrl;
			uni.request({
				url: this.$store.state.mainUrl + '/movie/movieList?page=' + page,
				method:"GET",
				success: (res)=> {
					// 获取真实数据之前，务必判断状态是否为200
					if(res.data.status == 200) {
						var tempList = res.data.data.result;
						me.trailerList = me.trailerList.concat(tempList);
						me.totalPages = res.data.data.total;	// 获取总页数
						console.log('总页数'+totalPages);
						me.page = page;		// 覆盖当前页面里的page
					}
				},
				complete: () => {
					uni.hideNavigationBarLoading();
					uni.hideLoading();0
				}
			});
		}
	}
};
</script>

<style lang="scss">
	@import url("movie.css");
</style>