<!-- 签到页面 -->
<template>
	<view>
		<uni-nav-bar :status-bar="true" left-icon="arrowleft" left-text="返回" title="标题" @click-left="back" />
		<view class="sign-vue-block">
			<view class="sign-card">
				<!-- card title -->
				<view class="card-title">
					<view class="title-right">
						今日奖励
					</view>
					<view class="title-left">
						<view class="title-right-inner">
							余额：0.1元
						</view>
					</view>
				</view>
				<!-- card content -->
				<view class="card-content">
					<view class="card-content-num">
						0.1
					</view>
					<view class="card-content-unit">
						元
					</view>
				</view>
				<!-- card foot -->
				<view class="card-foot">
					在签到1天可开宝箱
				</view>
			</view>
			<view class="sign-process">
				<view class="sign-process-a">
					<view class="sign-process-span">1天</view>
					<view class="sign-process-span">2天</view>
					<view class="sign-process-span">3天</view>
					<view class="sign-process-span">4天</view>
					<view class="sign-process-span">5天</view>
					<view class="sign-process-span">6天</view>
					<view class="sign-process-span">7天</view>
				</view>
				<view class="sign-process-b">
					<view class="sign-process-round"/>
					<view class="sign-process-across"/>
					<image class="sign-process-image-gift" src="../../../static/16fed.png"/>
					<view class="sign-process-across"/>
					<view class="sign-process-round"/>
					<view class="sign-process-across"/>
					<image class="sign-process-image-gift" src="../../../static/16fed.png"/>
					<view class="sign-process-across"/>
					<view class="sign-process-round"/>
					<view class="sign-process-across"/>
					<view class="sign-process-round"/>
					<view class="sign-process-across"/>
					<image class="sign-process-image-gift" src="../../../static/16fed.png"/>
				</view>
			</view>
		</view>
		<view class= "line"/>
		<view class="sign-vue-list">
			<view>
				<span style="font-weight: bold">兑换奖品</span>
			</view>
			<view class="nav-left-item" :key="index" v-for="(item,index) in prizeItem">
				<priceCard :deteil="item"/>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	import priceCard from "./priceCard"
	export default {
		data() {
			return {
				height: 0,
				title:"每日签到",
				prizeItem: [
					{
						picTitle:"观影卷",
						picType:"1",
						picPrice:"5",
						title:"5元在线观影卡",
						price:"价格：1元",
						dic:"可用于在线观影，每日限兑1次",
						tag:"售罄"
					},
					{
						picTitle:"观影卷",
						picType:"1",
						picPrice:"5",
						title:"5元在线观影卡",
						price:"价格：1元",
						dic:"可用于在线观影，每日限兑1次",
						tag:"售罄"
					},
					{
						picTitle:"观影卷",
						picType:"1",
						picPrice:"5",
						title:"5元在线观影卡",
						price:"价格：1元",
						dic:"可用于在线观影，每日限兑1次",
						tag:"售罄"
					},
					{
						picTitle:"观影卷",
						picType:"1",
						picPrice:"5",
						title:"5元在线观影卡",
						price:"价格：1元",
						dic:"可用于在线观影，每日限兑1次",
						tag:"售罄"
					},
					{
						picTitle:"观影卷",
						picType:"1",
						picPrice:"5",
						title:"5元在线观影卡",
						price:"价格：1元",
						dic:"可用于在线观影，每日限兑1次",
						tag:"售罄"
					}
				]
			}
		},
		components: {
			priceCard
		},
		onLoad: function() {
			this.height = uni.getSystemInfoSync().windowHeight;
		}
	}
</script>

<style>
	.sign-vue-block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1em;
		background: #f8f8f8;
	}
	
	.sign-card{
		display:flex;
		flex-direction: column;
		border-radius: .8em;
		background: linear-gradient(to right,#fdca53 0%,#fd5140 70%);
		box-shadow:0 .5em .4em -0.4em #aa000333;
	}

	.card-title{
		display:flex;
		flex-direction: row;
		justify-content:space-between
	}
	
	.title-right{
		display: flex;
		align-items: center;
		padding: .3em 1.45em;
		background: #ff614e;
		border-top-left-radius: .8em;
		border-bottom-right-radius: 1.5em;
		font-size: .8em;
		color: #fffffa;
	}
	
	.title-left{
		padding: .3em .4em;
		border-top-right-radius: .8em;
	}
	
	.title-right-inner{
		display: flex;
		align-items: center;
		border:solid #fffffa .1em;
		border-radius: 5em;
		font-size: .6em;
		color: #fffffa;
		padding: .3em .8em;
	}
	
	.card-content{
		display:flex;
		justify-content: center;
		padding: 1.5em;
	}
	
	.card-content-num{
		font-size: 2.2em;
		color: #fffffa;
	}
	
	.card-content-unit{
		display:flex;
		font-size: 1em;
		color: #fffffa;
		align-items: flex-end;
		margin-bottom: .4em;
	}
	
	.card-foot{
		display:flex;
		justify-content: center;
		background: linear-gradient(60deg, #fdb54e 20%, #fd5140 80%);
		padding: .3em;
		font-size: .8em;
		color: #fffffa;
		border-bottom-right-radius: .8em;
		border-bottom-left-radius: .8em;
	}
	
	
	
	
	
	.sign-process{
		display:flex;
		flex-direction: column;
		margin: 1em 0em;
		justify-content: space-between;
	}
	
	.sign-process-a{
		display:flex;
		flex-direction: row;
		justify-content: space-between
	}
	

	.sign-process-b{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: .9em;
		align-items: center;
	}
	
	.sign-process-round{
		border: solid #FF4444 .15em;
		border-radius: 4em;
		width: .5em;
		height: .5em;
	}
	
	.sign-process-image-gift{
		width: 1.5em;
		height: 1.5em;
		margin: 0 auto;
	}
	
	.sign-process-across{
		width: .8em;
		height: 0.1em;
		background: #FF0000;
		margin: 0 auto;
	}
	
	.sign-process-span{
		font-size: .8em;
		white-space:nowrap;
		margin: 0 auto;
	}
	
	
	.sign-process-block{
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
	
	
	
	.sign-process-image-heart{
		width: 0.9em;
		height: 0.9em;
		margin: 0 auto;
	}
	
	
	
	.line{
		height: 1px;
		background: #e2e2e2;
		margin-right: 1em;
		margin-left: 1em;
	}
	
	.sign-vue-list{
		display: flex;
		background: #ffffff;
		padding : 1em;
		flex-direction: column;
	}
	.sign-vue-list-span{
		font-size: 1em;
		font-style: bold;
	}
	
	
</style>

