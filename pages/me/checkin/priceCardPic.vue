<template>
	<view class="sign-piccard">
		<!-- card title -->
		<view class="piccard-title">
			<view class="pictitle-right">
				观影卷
			</view>
		</view>
		<!-- card content -->
		<view class="piccard-content">
			<view class="piccard-content-num">
				5
			</view>
			<view class="piccard-content-unit">
				元
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			pic: {
				type: String,
				default: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
			},
			name: String,
			price: {
				type: String,
				default: '88'
			}
		},
	}
</script>

<style>
	.sign-piccard{
		display:flex;
		flex-direction: column;
		border-radius: .4em;
		background: linear-gradient(to right,#fdca53 0%,#fd5140 70%);
		width: 6em;
		height: 4em;
	}
	
	.piccard-title{
		display:flex;
		flex-direction: row;
		justify-content:space-between
	}
	
	.pictitle-right{
		padding: .3em .8em;
		background: #ff614e;
		border-top-left-radius: 1em;
		border-bottom-right-radius: 1.3em;
		font-size: .6em;
		color: #fffffa;
	}
	
	
	.piccard-content{
		-webkit-flex: 1;
		flex: 1;
		display:flex;
		justify-content: center;
		align-content:center;
	}
	
	.piccard-content-num{
		display:flex;
		font-size: 1.2em;
		color: #fffffa;
		align-items: center;
		margin-bottom: .3em;
	}
	
	.piccard-content-unit{
		display:flex;
		font-size: .7em;
		font-weight:bold;
		color: #fffffa;
		align-items: center;
	}
	
	.piccard-foot{
		display:flex;
		justify-content: center;
		background: linear-gradient(60deg, #fdb54e 20%, #fd5140 80%);
		padding: .3em;
		font-size: .8em;
		color: #fffffa;
		border-bottom-right-radius: .8em;
		border-bottom-left-radius: .8em;
	}
	
	
</style>
