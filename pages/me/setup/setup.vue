<template>
	<view class="content">
		<!-- 设置列表 start -->
		<view class="setup-block">
			<view class="setup-area" v-for="item in setupList">
				<view class="setup-info">
					{{item}}
				</view>
				<view class="arrow-block">
					<image src="../../../static/me-icon/left-gray-arrow.png" class="arrow-ico"></image>
				</view>
			</view>
		</view>
		
		<view class="setup-block">
			<view class="setup-area" v-for="item in theaterinfoList">
				<view class="setup-info">
					{{item}}
				</view>
				<view class="arrow-block">
					<image src="../../../static/me-icon/left-gray-arrow.png" class="arrow-ico"></image>
				</view>
			</view>
		</view>
		<!-- 设置列表 end -->
		
		<!-- 退出登录 start -->
			<navigator url="../../login/login">
				<button type="warn" class="exit">退出登录</button>
			</navigator>
		<!-- 退出登录 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				setupList: [],
				theaterinfoList: []
			}
		},
		onLoad() {
			this.getSetup()
		},
		methods: {
			//获取设置列表
			getSetup() {
				this.setupList = [
					"消息通知",
					"自动签到",
					"账户及设备信息",
					"修改密码",
					"清除缓存",];
				
				this.theaterinfoList = [
					"意见反馈",
					"版本更新",
					"关于SPDB影院"];
				 // console.log(this.setupList)
			}
		}
	}
</script>

<style>
	/* 设置整体背景色 start*/
	.content {
		height: 100%;
		width: 100vw;
		background-color: #F8F8F8;
		padding-top: 10upx;
		position: absolute;
	}
	/* 设置整体背景色 end*/
	
	/* 设置列表样式 start*/
	.setup-block {
		background-color: #FFFFFF;
		margin-top: 10upx;
		/* padding: 20upx; */
	}
	
	.setup-area {
		padding: 25upx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		border-bottom: solid 0.5px #F1F1F1;
	}
	
	.setup-info {
		width: 30%;
		font-size: 16px;
	}
	
	.arrow-block {
		width: 70%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		/* margin-left: 50upx; */
		/* line-height: 86upx; */
	}
	
	.arrow-ico {
		width: 25upx;
		height: 25upx;
	}
	/* 设置列表样式 end*/
	
	/* 退出登录 start */
	.exit {
		margin-top: 40upx;
		border-radius: 20px;
		width: 90%;
		/* margin-bottom: -60upx; */
	}
	/* 退出登录 end */
</style>
