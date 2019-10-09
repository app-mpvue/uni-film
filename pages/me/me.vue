<template>
	<view class="content">
		<view class="fun-center">
			<image src="../../static/me-icon/message.png" class="fun-icon"></image>
			<image src="../../static/me-icon/setup.png" class="fun-icon"></image>
		</view>
		<view class="page-block">
			<view class="user-info">
				<!-- 用户头像 start -->
					<view v-if="userIsLogin">
						<image class="header" src="../../static/me-icon/header.png"></image>
					</view> 
					<view v-else>
						<image class="header" src="../../static/me-icon/header.png"></image>
					</view>
				<!-- 用户头像 end -->
					
				<!-- 用户信息 start -->
				<view v-if="userIsLogin">
					<view class="username">
						<!-- {{userInfo.username}} -->
						001
					</view>
				</view>
				<view v-else>
					<navigator url="../login/login">
						<view class="regist-login">
							注册/登录
						</view>
					</navigator>
				</view>
				<!-- 用户信息 end -->
					
				<!-- 签到 start -->
					<button type="warn" @click="userSign" class="userSign">每日签到</button>
				<!-- 签到 end -->
				
			</view>
			
			<!-- 用户卡券 start -->
			<view class="userCard">
				<navigator url="order/order">
					<view class="card-wapper">
						<image class="poster" src="../../static/me-icon/order.png" ></image>
						<text class="card-desc">订单</text>
					</view>
				</navigator>
				
				<view class="card-wapper">
					<image class="poster" src="../../static/me-icon/moviecard.png"></image>
					<text class="card-desc">电影卡</text>
				</view>
				<view class="card-wapper">
					<image class="poster" src="../../static/me-icon/membercard.png"></image>
					<text class="card-desc">会员卡</text>
				</view>
				<view class="card-wapper">
					<image class="poster" src="../../static/me-icon/coupon.png"></image>
					<text class="card-desc">优惠券</text>
				</view>
			</view>
			<!-- 用户卡券 end -->
		</view>
		
		<!-- 我的记录 start -->
		<view class="myrecords">
			<view class="record">
				<image class="record-icon" src="../../static/me-icon/record.png" ></image>
				<text class="card-desc">观看记录</text>
		</view>
			<view class="record">
				<image class="record-icon" src="../../static/me-icon/cache.png"></image>
				<text class="card-desc">离线缓存</text>
			</view>
			<view class="record">
				<image class="record-icon" src="../../static/me-icon/movielist.png"></image>
				<text class="card-desc">我的影单</text>
			</view>
			<view class="record">
				<image class="record-icon" src="../../static/me-icon/review.png"></image>
				<text class="card-desc">我的影评</text>
			</view>
		</view>
		<!-- 我的记录 end -->
		
		<!-- 我的服务 start -->
			<view class="myservice">
				<view class="service">
						<image class="service-icon" src="../../static/me-icon/welfarecard.png" ></image>
						<text class="service-desc">福利卡</text>
					</view>
					<view class="service">
						<image class="service-icon" src="../../static/me-icon/ticket.png"></image>
						<text class="service-desc">演出票</text>
					</view>
					<view class="service">
						<image class="service-icon" src="../../static/me-icon/mall.png"></image>
						<text class="service-desc">商城</text>
					</view>
					<view class="service">
						<image class="service-icon" src="../../static/me-icon/money.png"></image>
						<text class="service-desc">娱乐宝</text>
					</view>
					<view class="service">
						<image class="service-icon" src="../../static/me-icon/AIassistant.png"></image>
						<text class="service-desc">AI小助手</text>
					</view>
					<view class="service">
						<image class="service-icon" src="../../static/me-icon/help.png"></image>
						<text class="service-desc">帮助中心</text>
					</view>
				</view>
			</view>
		<!-- 我的服务 end -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: true,
				userInfo: []
			}
		},
		onLoad() {

		},
		methods: {
			//点击我的签到跳转到签到页面
			userSign() {
				if (this.userIsLogin) {
					uni.navigateTo({
						url: "checkin/checkin"
					})
				} else{
					uni.navigateTo({
						url:"../login/login"
					})
				}
			}
		}
	}
</script>

<style>
	@import url("me.css");
</style>
