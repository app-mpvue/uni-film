<template>
	<view class="content">
	<!-- <view class="commit-items" v-for="(userObj,index) in userList" :key="index"> -->
	<view class="commit-items">
		<!-- 用户头像、用户名和关注按钮 -->
		<view class="commit-user">
			<image src="../../../static/dongtai/head1.jpg" class="commit-user-headphoto" style="border-radius: 50%;height: 40px;width: 40px;"></image>
			<view class="commit-user-name" style="font-size: 15px;margin-left: 10px;">{{userList.username}}</view>
			<button plain="true" size="default" hover-class="none" :class="[ userList.userId > 0 ? 'user-unattention':'user-isattention']"
			 @click="clickattention(userList.userId)">+关注</button>
		</view>
		<!-- 用户影评以及影评图片 -->
		<view class="commit-detail">
			<view class="commit-detail-text">{{userList.text}}</view>
			<!-- <view class="commit-detail-text-quanwen" style="font-size: 15px; color: #DD524D;">全文</view> -->
			<view class="commit-detail-img">
				<view v-for="(deTail,index) in userList.imgs" :key="index">
					<image :src="deTail" class="commit-detail-imgs" style="height: 300upx; width: 300upx;padding: 10px; "></image>
				</view>
			</view>	
		</view>
		<!-- 评论时间以及点赞评论 -->
		<view class="commit-bottom">
			<view class="" style="color: #BFBFBF;font-size: 13px;">1小时前</view>
			<view class="like-commit" style="display: flex;flex-direction: row;">
				<view :class="[userObj.islike ? 'commit-bottom-like':'commit-bottom-unlike']" @click="selectLike(userObj.userId)"></view>
				<view class="commit-bottom-like-num" style="color: #BFBFBF;font-size: 16px;margin-left: 5px;margin-right: 10px;">{{userList.likeNum}}</view>
				<image src="../../../static/dongtai/commit.png" class="commit-bottom-commit" style="height: 20px;width:20px"></image>
				<view class="commit-bottom-commit-num" style="color: #BFBFBF;font-size: 16px;margin-left: 5px;">{{userList.commentNum}}</view>
			</view>
		</view>
	</view>
	<!-- 评论区 -->
	<view class="current-user" v-for="(inputValue1,index) in inputValue" :key=index>
		<image src="../../static/head3.jpg" class="commit-user-headphoto" style="border-radius: 50%;height: 40px;width: 40px;"></image>
		<view>{{inputValue1}}</view>
		<view class="like-commit" style="display: flex;flex-direction: row;">
			<view :class="[inputValue1.islike ? 'commit-bottom-like':'commit-bottom-unlike']" @click="selectLike(inputValue1.userId)"></view>
			<view class="commit-bottom-like-num" style="color: #BFBFBF;font-size: 16px;margin-left: 5px;margin-right: 10px;">{{inputValue1.likeNum}}</view>
		</view>
	</view>
	<!-- 当前用户头像、评论框和发送按钮 -->
	<view class="current-user">
		<image :src="currentUser.headsrc" class="commit-user-headphoto" style="border-radius: 50%;height: 40px;width: 40px;"></image>
		
		<view class="uni-form-item uni-column">
		    <input class="uni-input" v-model="temple" placeholder="请输入评论" />            
		</view>
		<!-- <input name="inputContext" placeholder="请输入内容" value="请输入内容"/> -->
		<button class="mini-btn" type="primary" size="mini" @click="sendText()">发送</button>
		
				<!-- <input class="uni-input" name="input" placeholder="请输入内容">
				<button form-type="submit">发送</button> -->
				<!-- <form @submit="formSubmit">
					<view class="uni-form-item  uni-column">
					<!-- <textarea name="input" v-model="text" placeholder="请输入内容" /> -->
					<!-- <textarea name="input" v-model="text" placeholder="请输入内容" /> -->
					<!-- <input name="inputContext" placeholder="请输入内容" @input="inputText(e)"/>
					<button form-type="submit" size="mini">发送</button>
					</view>
				</form> --> 
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 详情页面
				inputValue: [],
				inputValue1:'',
				temple:[],
				userList: [],
				currentUser: {
						currentUserId: 1,
						headsrc: "../../static/head3.jpg",
						name: "当前用户",
						likeNum: 2,
						commitNum: 0,
						islike: false, 
					},
				
				userReview:[],
			}
		},
		//应用周期函数，必须在APP.vue中监听
		onShow() {
			this.checkstat();
			this.fetchPageNum = 1;
			this.getData(this.id);
		},
		//用于页面传参
		onLoad(event) {
		    // 目前在某些平台参数会被主动 decode，暂时这样处理。
		    
		    this.getDetail();
		},
		methods: {
			// 加关注
			addAttention:function(e)
			{
				uni.showModal({
					content:'已关注',
					showCancel:false
				});
			},
			// 点击关注
			clickattention(userId) {
				if (this.userList) {
					uni.showModal({
						content:'已关注',
						showCancel:false
					});
					for (var i = 0; i < this.userList.length; i++) {
						if (this.userList[i].userId == userId) {
							// 加-是什么意思
							this.userList[i].userId = -this.userList[i].userId
						}
					}
				}
			},
			// 点击点赞
			selectLike(userId) {
				if (this.userList) {
					for (var i = 0; i < this.userList.length; i++) {
						if (this.userList[i].userId == userId) {
							this.userList[i].islike = !this.userList[i].islike
							if(this.userList[i].islike) {
								this.userList[i].likeNum = this.userList[i].likeNum + 1
							}else {
								this.userList[i].likeNum = this.userList[i].likeNum - 1
							}
						}
					}
				}
			},
			// 输入框输入内容
			// onKeyInput: function(event) {
			//     this.inputValue = event.target.value
			// },
			sendText()
			{
				this.inputValue.push(this.temple);
				this.temple=""
			},
			// 接口连接,请求数据
			// uni.request({
			//     url: 'http://45.76.105.46:8080/dynamic/detail', //仅为示例，并非真实接口地址。
			//     data: {
			//         text: 'uni.request',
			// 		// dynamicId=this.userId
			//     },
			//     header: {
			//         'custom-header': 'hello' //自定义请求头信息
			//     },
			//     success: (res) => {
			//         console.log(res.data);
			//         this.text = 'request success';
			//     }
			// });
			
			
			// async request(){
			//               var that=this
			// 			  uni
			//               wx.request({
			// 				url:'http://45.76.105.46:8080/dynamic/detail',
			// 				method:'GET',
			// 				data:{
			// 					// dynamicId=this.userId
			// 					dynamicId="1",
			// 				},
			//                 header: {
			//                   'content-type': 'application/json' // 默认值
			//                 },
			//                 success (res) {
			//                   console.log("成功")
			// 
			//                 //  let tmpGood = {}
			//                  // tmpGood.title = res.data.proName
			//                  // tmpGood.price = res.data.proPrice
			// 				 that.userList=res.data;
			//                  
			//                  console.log("##3333333"+JSON.stringify(that.userList))
			//                 }
			//               })
			//             },
			// 表单提交
			formSubmit:function(e){
				console.log('form发出submit事件，携带数据为：'+JSON.stringify(e.detail.value))
				var formdata=e.detail.value
				uni.showModal({
					content:'表单数据内容'+JSON.stringify(formdata),
					showCancel:false
				});
				this.userReview=JSON.stringify(e.detail.value);
			},
			// 得到电影细节
			getDetail() {
				var that=this
			    uni.request({
					
			        // url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
					url: 'http://45.76.105.46:8080/dynamic/detail',
					method:'GET',
					data:{
						// dynamicId:this.userId,
						dynamicId:'1',
						
					},
			        success: (result) => {
			            // let content = FAIL_CONTENT
			            // if (result.statusCode == 200) {
			            //     content = result.data.content
			            // }
			            // const nodes = htmlParser(content);
			            // // #ifdef APP-PLUS-NVUE
			            // parseImgs(nodes)
			            // // #endif
			            // this.content = nodes
						debugger;
						console.log(result.data);
						console.log("**************")
						console.log(result.data.result);
						this.userList=result.data.result;
						// this.userList.add(result.data.result)
						// that.userList.push(result.data.result);
						console.log("##111111111#######"+this.userList);
						// that.userList.detail.detailImg=result.data.result.imgs;
						// for(var i=1;i<3;i++)
						// {
						// 	that.userList[0].detailImg[i]=result.data.result.imgs[i];
						// }
						// that.userList[0].detailText=result.data.result.text;
						// that.userList[0].detail.detailText=result.data.result.text;
						// that.userList[0].likeNum=result.data.result.likeNum;
						// that.userList[0].name=result.data.result.username;
						// that.userList=result.data.result;
						
						console.log("##3333333"+JSON.stringify(this.userList))
						
			        }
			    });
			}

		}
	}
</script>

<style>
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
 */
/* 头部的样式 */
	.commit-user {
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.current-user{
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.commit-detail-text {
			font-size: 13px;
			line-height: 150%;
			/* 只显示四行 */
			display: -webkit-box;
			-webkit-box-orient: vertical;
			/* 限制写四行取消 */
			/* -webkit-line-clamp: 4; */
			overflow: hidden;
		}
	
		.commit-detail-img {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: flex-start;
		}
		.commit-bottom {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: space-between;
		}
		.commit-bottom-like {
			width: 20px;height: 20px;
			background-size:20px 20px;
			background-repeat:no-repeat;
			background-image: url(../../../static/dongtai/haslike.png)
		}
		.commit-bottom-unlike {
			width: 20px;height: 20px;
			background-size:20px 20px;
			background-repeat:no-repeat;
			background-image: url(../../../static/dongtai/like.png)
		}
		.user-unattention {
			border-style: solid;
			border-color: #FF3333;
			border-radius: 20%;
			border-width: 1px;
			text-align: center;
			font-size: 10px;
			color: #FF3333;
			margin-right: 10px;
		}
		.user-isattention {
			visibility: hidden;
		}
	.section {
		display: block;
	}
	.section form {
		display: block;
		padding: 20upx;
	}
	.section textarea {
		background: #ffffff;
		display: block;
		margin: auto;
		font-size: 25upx;
		width: 98%;
		height: 100upx;
		padding: 10upx;
	}
	.section button {
		display: block;
		width: 200upx;
		margin: 10upx 0 10upx auto;
	}
	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
