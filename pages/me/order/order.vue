<template>
	<!-- <view class="content"> -->
		<!-- <view class="page"> -->
			<view class="content" v-if="orderList==''">
				<view class="noorder-info">
					<image src="../../../static/me-icon/noorder.png" class="noorder"></image>
					<text class="nooder-desc">还没有订单哦~</text>
					<button type="warn" class="buyticket">去购票</button>
				</view>
			</view>
			<view class="content2" v-else>
				<view class="page order-info" v-for="item in orderList" >
					<view class="movie-info">
						<image :src="item.movieCover" mode="" class="cover"></image>
						<view class="movie-desc">
							<text class="movieName">{{item.movieName}}</text>
							<text class="ticket-info">{{item.cineName}}</text>
							<text class="ticket-info">{{item.showTime}}</text>
							<text class="ticket-info">{{item.pieces}}张</text>
						</view>
					</view>
					<view class="price-info">
						<text>总价：</text>
						<text class="price">￥{{item.totalPrice}}</text>
					</view>
				</view>
			</view>

		<!-- </view> -->
	<!-- </view> -->
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data() {
			return {
				orderList: []
			}
		},
		onLoad() {
			this.getOrderList()
		},
		methods: {
			getOrderList() {
				console.log("全局变量userId = " + Vue.prototype.$userId);
				uni.request({
					url:'http://45.76.105.46:8080/user/order/list',
					methods:'GET',
					data:{
						userId: Vue.prototype.$userId
					},
					success: (res) => {
						this.orderList = res.data.result
						console.log(res.data)
					}
				}),
				uni.request({
					url:'http://45.76.105.46:8080/dynamic/list',
					methods:'GET',
					success: (res) => {
						// this.orderList = res.data.result
						console.log(res)
					}
				})
				// this.orderList.push(
				// {	"orderId": 1,
				// 	"cinemaId": 1,
				// 	"cineName": "中影泰德影城",
				// 	"location": "高新区锦业路丈八二路绿地缤纷",
				// 	"movieId": 1,
				// 	"movieCover": "/static/icon/大圣归来.jpg",
				// 	"movieName": "大圣归来", 
				// 	"showTime": "2019-09-30 星期天 11:20",
				// 	"pieces": 2,
				// 	"totalPrice": 72.3},
				// {
				// 	"orderId": 2,
				// 	"cinemaId": 2,
				// 	"cineName": "万达国际影城",
				// 	"location": "高新区唐延路高新万达广场",
				// 	"movieId": 2,
				// 	"movieCover": "/static/icon/哪吒.jpg",
				// 	"movieName": "哪吒之魔童降世",
				// 	"showTime": "2019-10-01 星期一 10:30",
				// 	"pieces": 4,
				// 	"totalPrice": 108.9
				// }	
				// )
			}
		}
	}
</script>

<style>
	@import url("order.css");
</style>
