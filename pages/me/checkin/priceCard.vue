<template>
	<view class="price-card">
		<view class="price-card-img">
			<priceCardPic/>
		</view>
		<view class="price-card-dic">
			<view class="price-card-dic-title">{{deteil.title}}</view>
			<view class="price-card-dic-price">{{deteil.price}}</view>
			<view class="price-card-dic-dic">{{deteil.dic}}</view>
		</view>
		<view class="price-card-tag">
			<view class="price-card-tag-inner">{{deteil.tag}}</view>
		</view>
	</view>
</template>

<script>
	import priceCardPic from "./priceCardPic"
	export default {
		data() {
			return {}
		},
		components:{
			priceCardPic
		},
		props: {
			deteil: Object
		},
	}
</script>

<style>
	.price-card{
		display: flex;
		flex-direction: row;
		padding: .8em 0em;
	}
	
	.price-card-img{
		display: flex;
	}
	
	.price-card-img image{
		height: em;
	}
	
	.price-card-dic{
		display: flex;
		flex:1;
		flex-direction: column;
		justify-content: space-around;
		margin-left: .8em;
	}
	
	.price-card-dic-title{
		font-size:.9em;
	}
	
	.price-card-dic-price{
		font-size: .7em;
	}
	
	.price-card-dic-dic{
		font-size: .7em;
		color:#8F8F94;
	}
	
	.price-card-tag{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.price-card-tag-inner{
		padding: .4em .6em;
		border-radius: 5em;
		background: #dbdbdb;
		font-size: .6em;
		color: #fffffa;
	}
	
</style>
