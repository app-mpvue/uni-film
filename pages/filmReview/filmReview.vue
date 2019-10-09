<template>
	<view class="content">
	<view class="commit-items" v-for="(userObj,index) in userList" :key="index">
		<!-- 用户头像、用户名和关注按钮 -->
		<view class="commit-user">
			<image :src="userObj.headsrc" class="commit-user-headphoto" style="border-radius: 50%;height: 40px;width: 40px;"></image>
			<view class="commit-user-name" style="font-size: 15px;margin-left: 10px;">{{userObj.name}}</view>
			<button plain="true" size="default" hover-class="none" :class="[ userObj.userId > 0 ? 'user-unattention':'user-isattention']"
			 @click="clickattention(userObj.userId)">+关注</button>
		</view>
		<!-- 用户影评以及影评图片 -->
		<view class="commit-detail">
			<view class="commit-detail-text">{{userObj.detail.detailText}}</view>
			<!-- <view class="commit-detail-text-quanwen" style="font-size: 15px; color: #DD524D;">全文</view> -->
			<view class="commit-detail-img">
				<view v-for="(deTail,index) in userObj.detail.detailImg" :key="index">
					<image :src="deTail" class="commit-detail-imgs" style="height: 300upx; width: 300upx;padding: 10px; "></image>
				</view>
			</view>	
		</view>
		<!-- 评论时间以及点赞评论 -->
		<view class="commit-bottom">
			<view class="" style="color: #BFBFBF;font-size: 13px;">1小时前</view>
			<view class="like-commit" style="display: flex;flex-direction: row;">
				<view :class="[userObj.islike ? 'commit-bottom-like':'commit-bottom-unlike']" @click="selectLike(userObj.userId)"></view>
				<view class="commit-bottom-like-num" style="color: #BFBFBF;font-size: 16px;margin-left: 5px;margin-right: 10px;">{{userObj.likeNum}}</view>
				<image src="../../static/commit.png" class="commit-bottom-commit" style="height: 20px;width:20px"></image>
				<view class="commit-bottom-commit-num" style="color: #BFBFBF;font-size: 16px;margin-left: 5px;">{{userObj.commitNum}}</view>
			</view>
		</view>
	</view>
	<!-- 评论区 -->
	<view class="commit-user" v-for="(inputValue1,index) in inputValue" :key=index>
		<image src="../../static/head3.jpg" class="commit-user-headphoto" style="border-radius: 50%;height: 40px;width: 40px;"></image>
		<view>{{inputValue1}}</view>
		<view class="like-commit" style="display: flex;flex-direction: row;">
			<view :class="[inputValue1.islike ? 'commit-bottom-like':'commit-bottom-unlike']" @click="selectLike(inputValue1.userId)"></view>
			<view class="commit-bottom-like-num" style="color: #BFBFBF;font-size: 16px;margin-left: 5px;margin-right: 10px;">{{userObj.likeNum}}</view>
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
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	const FAIL_CONTENT = '<p>获取信息失败1</p>';
	export default {
		components: {uniIcon},
		data() {
			return {
				// 详情页面
				inputValue: [{
						
						detailText: "很好看",
					},],
				inputValue1:'',
				temple:[],
				userList: [{
						userId: 1,
						headsrc: "../../static/head1.jpg",
						name: "影小播",
						likeNum: 2,
						commitNum: 0,
						islike: false, 
						detail: {
							detailText: "前几天写了《送我上青云》的影评，有小伙伴留言说啊，生活已经很难了，这么苦的片子实在不想去影院看。 其实这说法是很有道理的：生活这么苦，大家都想找点乐，我吃饱了撑的非要去影院看别人受苦啊？我又没有受虐妄想狂。 再说了，电影院本来就应该是给我们一个逃避现实的虚拟空间，让我们在里面爽上辣么90分钟，两个小时，等我们走出影院，可以燃气斗志，不被现实打倒，努力的生活下去。 ",
							detailImg: ["../../static/head1.jpg", "../../static/head5.jpg","../../static/head4.jpg"]
						},
					},
				],
				currentUser: {
						userId: 1,
						headsrc: "../../static/head3.jpg",
						name: "当前用户",
						likeNum: 2,
						commitNum: 0,
						islike: false, 
						detail: {
							detailText: "前几天写了《送我上青云》的影评，有小伙伴留言说啊，生活已经很难了，这么苦的片子实在不想去影院看。 其实这说法是很有道理的：生活这么苦，大家都想找点乐，我吃饱了撑的非要去影院看别人受苦啊？我又没有受虐妄想狂。 再说了，电影院本来就应该是给我们一个逃避现实的虚拟空间，让我们在里面爽上辣么90分钟，两个小时，等我们走出影院，可以燃气斗志，不被现实打倒，努力的生活下去。 ",
							detailImg: ["../../static/head1.jpg", "../../static/head5.jpg","../../static/head4.jpg"]
						},
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
		    try {
		        this.banner = JSON.parse(decodeURIComponent(event.query));
		    } catch (error) {
		        this.banner = JSON.parse(event.query);
		    }
		    uni.setNavigationBarTitle({
		        title: this.banner.title
		    });
			//获取详细数据
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
			    uni.request({
			        url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
			        success: (result) => {
			            let content = FAIL_CONTENT
			            if (result.statusCode == 200) {
			                content = result.data.content
			            }
			            const nodes = htmlParser(content);
			            // #ifdef APP-PLUS-NVUE
			            parseImgs(nodes)
			            // #endif
			            this.content = nodes
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
			background-image: url(../../static/haslike.png)
		}
		.commit-bottom-unlike {
			width: 20px;height: 20px;
			background-size:20px 20px;
			background-repeat:no-repeat;
			background-image: url(../../static/like.png)
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
