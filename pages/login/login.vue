<!-- 登录页面 By zhangshuo -->
<template>
	<view class="content">
		<view class="titles">
			<image class="logo" src="../../static/alpra.png"></image>
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view>
		</view>
		
		<view class="inputText">
			<input class="account" type="text" placeholder="输入账号" v-model="account" @input="onInput"/>
			<image class="line" src="../../static/Unknown.jpeg"></image>
			<view class="pwdInput">
				<input class="pwd" type="password" placeholder="输入密码" v-model="password" @input="onInput"/>
				<image class="verticalLine" src="../../static/Unknown.jpeg"></image>
				<view class="forget">
					<text class="forgetIt">forget password?</text>
				</view>
			</view>
			<image class="line" src="../../static/Unknown.jpeg"></image>
		</view>
		
		<view class="btnArea">
			<button class="signInBtn" @tap="onClickListener">
				<text class="signinTxt">LOGIN</text>
			</button>
			<text class="signUpTxt" @tap="onRegisterListener">SIGN UP</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'SPDB影城',
				username:"",
				password:"",
			}
		},
		onLoad() {

		},
		methods: {
			onInput : function(){
				const arr = [this.account, this.password];
				console.log("this.account: " + this.account);
				console.log("this.password: " + this.password);
				return arr;
			},
			
			onClickListener(){
				var me = this;
				uni.request({
					url:'http://45.76.105.46:8080/user/login',
					method:'GET',
					data:{
						username:this.account,
						password:this.password,
					},
					success: (res) => {
						// console.log("response is " + res.data.result.userId);
						
						
						// Vue.prototype.userId = res.data.result.userId;
						
						this.$userId = res.data.result.userId;
						console.log("this.userId = " + this.$userId);
						
						uni.reLaunch({
							url:'../index/index',
							fail: () => {
								console.log("界面跳转失败")
							},
							success: () => {
								console.log("界面跳转成功");
								uni.showToast({
									icon:'success',
									title:"登录成功",
									duration:2000
								});
							},
						})
					}
				})
			},
			
			onRegisterListener(){
				console.log("Vue.prototype.userId: " + this.$userId);
			}
		}
	}
</script>

<style>
	.content {
		width: 100vw;
		height: 100vh;
		padding-bottom: 0;  
		padding-bottom: constant(safe-area-inset-bottom); 
		padding-bottom: env(safe-area-inset-bottom);
		
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		background: linear-gradient(#FD691F, #FFFFFF);
	}

	.titles{
		display: flex;
		flex-direction: row;
	}

	.logo {
		height: 80upx;
		width: 100upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 25upx;
	}

	.text-area {
		margin-top: 210upx;
		margin-left: 15upx;
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 40upx;
		color: #80827A;
	}
	
	.inputText{
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}
	
	.account{
		height: 80upx;
		width: 700upx;
		margin-top: 200upx;
		border-radius: 20upx;
		text-align: center;
	}
	
	.btnArea{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
	}
	
	.signInBtn{
		height: 90upx;
		width: 350upx;
		margin-top: 25upx;
		border-radius: 60upx;
		/* background-color: #555555; */
		background-color: alpra;
	}
	
	.signinTxt{
		height: vh;
		width: vw;
		text-align: center;
		font-size: 20px;
	}
	
	.signUpTxt{
		height: 70upx;
		width: 200upx;
		margin-top: 50upx;
		text-align: center;
		font-size: 25upx;
		color: white;
	}
	
	/* .forget{
		height: 10upx;
		width: vw;
	} */
	
	.forgetIt{
		font-size: 10upx;
		color: white;
		margin-left: 50upx;
		text-align: center;
	}
	
	.line{
		height: 3upx;
		width: 100%;
	}
	
	.pwd{
		height: 60upx;
		width: 450upx;
		margin-bottom: 5upx;
	}
	
	.pwdInput{
		height: 80upx;
		width: 700upx;
		margin-top: 20upx;
		/* border-radius: 20upx; */
		text-align: center;
		display: flex;
		flex-direction: row;
	}
	
	.verticalLine{
		height: 60upx;
		width: 3upx;
		margin-bottom: 5upx;
	}
</style>
