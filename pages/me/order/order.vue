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
				console.log("全局变量userId = " + this.$store.state.mainId);
				uni.request({
					url: this.$store.state.mainUrl + '/user/order/list',
					methods:'GET',
					data:{
						userId: this.$store.state.mainId
					},
					success: (res) => {
						this.orderList = res.data.result,
						console.log(res.data)
					}
				})
			}
		}
	}
</script>

<style>
	@import url("order.css");
</style>
