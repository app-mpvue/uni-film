<template>
	<view class="content">
		<!-- 顶部轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item>
				<image src="../../static/dongtai/1.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/dongtai/2.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/dongtai/3.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/dongtai/4.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/dongtai/5.jpg" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 顶部轮播图 end -->
		
		<!-- 中间评论栏 start -->
		<view class="commit-items" v-for="(userObj,userIndex) in userList" :key="userIndex">
			<!-- 用户头像、用户名和关注按钮 start -->
			<view class="commit-user">
				<image :src="userObj.imgs[userIndex]" class="commit-user-headphoto"></image>
				<view class="commit-user-name">{{userObj.username}}</view>
				<button plain="true" size="default" 
				hover-class="none" 
				:class="[ userObj.userId > -1 ? 'user-unattention':'user-isattention']"
				@click="clickattention(userObj.userId)">+关注</button>
			</view>
			<!-- 用户头像、用户名和关注按钮 end -->
			
			<!-- 用户影评以及影评图片 start -->
			<view class="commit-detail">
				<!-- <view class="commit-detail-text">{{userObj.detail.detailText}}</view> -->
				<navigator :url="'comment/comment?userId='+ userObj.userId">
					<view class="commit-detail-text">{{userObj.text}}</view>
				</navigator>
				<!-- <view class="commit-detail-text-quanwen" style="font-size: 15px; color: #DD524D;">全文</view> -->
				<view class="commit-detail-img">
					<view v-for="(deTail,imgIndex) in userObj.imgs" :key="imgIndex">
						<image :src="deTail" 
						class="commit-detail-imgs" 
						mode="aspectFill"
						@click="lookMe"
						:data-imgIndex="imgIndex"
						:data-userIndex="userIndex"></image>
					</view>
				</view>	
			</view>
			<!-- 用户影评以及影评图片 end -->
			
			<!-- 评论时间以及点赞评论 start -->
			<view class="commit-bottom">
				<view class="commit-bottom-time">x小时前</view>
				<view class="like-commit">
					<view :class="[userObj.like ? 'commit-bottom-like':'commit-bottom-unlike']" @click="selectLike(userObj.userId)"></view>
					<view class="commit-bottom-like-num">{{userObj.likeNum}}</view>
					<navigator :url="'comment/comment?userId='+ userObj.userId">
						<view class="comment">
							<image src="../../static/dongtai/commit.png" class="commit-bottom-commit"></image>
							<view class="commit-bottom-commit-num">{{userObj.commentNum}}</view>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 评论时间以及点赞评论 end -->
		</view>
		<!-- 中间评论栏 end -->
		
		<!-- <view class="newedit" @click="addEdit"> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFocus: false,
				userList: []
				// userList: [{
				// 		userId: 1,
				// 		headsrc: "../../static/head1.jpg",
				// 		name: "影小播",
				// 		likeNum: 2,
				// 		commitNum: 0,
				// 		islike: false, 
				// 		detail: {
				// 			detailText: "前几天写了《送我上青云》的影评，有小伙伴留言说啊，生活已经很难了，这么苦的片子实在不想去影院看。 其实这说法是很有道理的：生活这么苦，大家都想找点乐，我吃饱了撑的非要去影院看别人受苦啊？我又没有受虐妄想狂。 再说了，电影院本来就应该是给我们一个逃避现实的虚拟空间，让我们在里面爽上辣么90分钟，两个小时，等我们走出影院，可以燃气斗志，不被现实打倒，努力的生活下去。 ",
				// 			detailImg: ["../../static/head1.jpg", "../../static/head5.jpg","../../static/head4.jpg"]
				// 		},
				// 	},
				// 	{
				// 		userId: 2,
				// 		headsrc: "../../static/head2.jpg",
				// 		name: "八点半",
				// 		likeNum: 0,
				// 		commitNum: 0,
				// 		islike: false, 
				// 		detail: {
				// 			detailText: "《共同命运》称得上是一部顶级配置的大项目。作为首部“一带一路”为主题的电影，《共同命运》由六位导演倾力完成，耗时近三年时间，镜头横跨亚欧非南美四个大陆，形成38万公里。视角覆及文化、种族、历史、人文等领域。出镜的明星有商业巨子马云，篮坛巨人姚明。",
				// 			detailImg: ["../../static/head2.jpg"]
				// 		},
				// 	},
				// 	{
				// 		userId: 3,
				// 		headsrc: "../../static/head3.jpg",
				// 		name: "黑羽快斗",
				// 		likeNum: 0,
				// 		commitNum: 0,
				// 		islike: false, 
				// 		detail: {
				// 			detailText: "本以为是儿童动漫，但意外探讨了不少内容。从“非我族人，其心必异”到“和谐美满，共同生活”中间有无数的人和妖一起做出的努力。可荒唐的是，作为执行者的“无限大人”却永远形单影只。他离开的背影，意味着消除偏见仍然长路漫漫。",
				// 			detailImg: ["../../static/head3.jpg"]
				// 		},
				// 	},
				// 	{
				// 		userId: 4,
				// 		headsrc: "../../static/head4.jpg",
				// 		name: "绿谷出久",
				// 		likeNum: 0,
				// 		commitNum: 0,
				// 		islike: false, 
				// 		detail: {
				// 			detailText: "小黑带给人最大的治愈就是它可以带你回到对世界无所惧怕、无所歧视的视角，让你重新看看这个复杂而可爱的世界。电影依然延续这个内核，只是我很担心大面积上映之后，看惯了快节奏电影的大众，会认为低龄化节奏慢。",
				// 			detailImg: ["../../static/head4.jpg"]
				// 		},
				// 	},
				// 	{
				// 		userId: 5,
				// 		headsrc: "../../static/head5.jpg",
				// 		name: "爆豪胜己",
				// 		likeNum: 0,
				// 		commitNum: 0,
				// 		islike: false, 
				// 		detail: {
				// 			detailText: "结合了国际最新的热点话题，比如国际网络被黑，监控，棱镜门之类的，AI主导未来世界？最后的反转也是令人意外。同时将文艺范儿的肖邦、钢琴融入了本片，体现出亦刚亦柔的风范。",
				// 			detailImg: []
				// 		}
				// 	}
				// ],
			}
		},
		onLoad() {
			this.getList();
		
		},
		
		onshow(){
			this.getList();
		},
		
		methods: {
			//显示动态列表
			getList(){
				console.log("进入初始化！！"),
				uni.request({
					url: this.$store.state.mainUrl+'/dynamic/list',
					method: 'GET',
					success: (res) => {
						console.log(res);
						this.userList = res.data.result;
						console.log(this.userList);
					},
					fail: (e) => {
						console.log(e);
					}
				})
			},
			
			// 点击关注
			clickattention(userId) {
				if (this.userList) {
					for (var i = 0; i < this.userList.length; i++) {
						if (this.userList[i].userId == userId) {
							this.userList[i].userId = (-this.userList[i].userId) - 1
						}
					}
				}
			},
			
			// 点击点赞
			selectLike(userId) {
				if (this.userList) {
					for (var i = 0; i < this.userList.length; i++) {
						if (this.userList[i].userId == userId) {
							this.userList[i].like = !this.userList[i].like;
							if(this.userList[i].like) {
								this.userList[i].likeNum = this.userList[i].likeNum + 1
							}else {
								this.userList[i].likeNum = this.userList[i].likeNum - 1
							}
						}
					}
				}
			},
			
			//点击图片预览
			lookMe(e) {
				var me = this;
				// debugger;
				var imgIndex = e.currentTarget.dataset.imgindex;
				var userIndex = e.currentTarget.dataset.userindex;
				uni.previewImage({
					current: me.userList[userIndex].imgs[imgIndex],
					urls: me.userList[userIndex].imgs
				})
			},
			
			//点击编辑
			// addEdit() {
			// 	uni.navigateTo({
			// 		url: "comment/comment"
			// 	})
			// }
		}
	}
</script>

<style>
	@import url("dynamic.css");
</style>
