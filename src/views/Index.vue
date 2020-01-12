<template>
	<div class="background-color bl-col">
		<div class="carousel-wrap">
			<transition-group tag="ul" class="slide-ul" name="slide">
				<li v-for="(item,index) in sliders" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
					<a :href="item.url">
						<img :src="item.image" alt="item.description">
					</a>
				</li>
			</transition-group>
			<div class="carousel-items">
				<span v-for="(item,index) in sliders" :key="index" :class="{active:index===currentIndex}" @mouseover="change(index)">
				</span>
			</div>
		</div>
		<div class="bl-container bl-row container bl-shadow">
			<div class="bl-col-2 left">
				<div class="bl-card bl-shadow">
					<div class="bl-card-header bl-col">
						<img :src="users.backgroundimg" class="left-top-images" />
						<img :src="users.avatar" class="avatar-max avatar-images circle-avatar" />
					</div>
					<div class="bl-card-body bl-card-body1">
						<h1> {{users.nickname}}</h1>
						<h3 class="text-color-gray">{{users.autograph}}</h3>
					</div>
					<div class="bl-card-bottom bl-card-bottom1">
						<table align="center" border="0" class="one">
							<tr>
								<th>好友总数</th>
								<th>今日访客</th>
							</tr>
							<tr>
								<td class="text-color-gray">12M</td>
								<td class="text-color-gray">100</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="bl-card left-middle bl-shadow bl-col">
					<h4 class="text-color-gray hotusers">推荐用户</h4>
					<div class="list bl-row">
						<div class="bl-col-1">
							<img src="../assets/image/01.jpg" class="circle-avatar user-avatar" />
						</div>
						<div class="bl-col-6 news">
							<h5>FriendName</h5>
							<p class="text-color-gray">个性签名</p>
						</div>
						<div class="bl-col-4 bl-row">
							<img src="../assets/image/add.png" style="width: 20px;height: 20px;margin-top: 18px;" />
							<button class="bl-btn bl-btn-round bl-btn-gree bl-btn-minl" style="margin-top: 18px;">添加</button>
						</div>
					</div>
					<div class="list bl-row">
						<div class="bl-col-1">
							<img src="../assets/image/01.jpg" class="circle-avatar user-avatar" />
						</div>
						<div class="bl-col-6 news">
							<h5>FriendName</h5>
							<p class="text-color-gray">个性签名</p>
						</div>
						<div class="bl-col-4 bl-row">
							<img src="../assets/image/add.png" style="width: 20px;height: 20px;margin-top: 18px;" />
							<button class="bl-btn bl-btn-round bl-btn-gree bl-btn-minl" style="margin-top: 18px;">添加</button>
						</div>
					</div>
				</div>
			</div>
			<div class="bl-col-6 main">
				<div class="bl-card-comment bl-row bl-shadow">
					<div class="bl-col-9">
						<label>
							<input type="text" value="请评论" name="comment" class="comment text-color-gray" />
						</label>
					</div>
					<div class="bl-col-1 al-right">
						<img src="../assets/image/camera.png" class="icon" />
					</div>
					<div class="bl-col-1 al-right">
						<img src="../assets/image/accessory.png" class="icon" />
					</div>
				</div>
				<!-- 日志与相册的切换卡的制作 -->
				<div class="bl-col dynamic bl-shadow">
					<div class="tab">
						<span class="tab-item bl-title" :class="{active:logisActive}" @click="logclick">日志</span>
						<span class="tab-item bl-title" :class="{active:albumisActive}" @click="albumclick">相册</span>
					</div>
					<!-- 展示日志 -->
					<div class="tab-box bl-col" v-show="logistrue==true">
						<div v-for="(item,index) in notes" :key="index" class="box bl-col bl-shadow">

							<div class="content bl-shadow">
								<h3 style="text-align: center;">{{item.title}}</h3>
								<hr />
								<div class="box2" style="text-align: center;">
									<router-link :to="{ path: '/notes/' + item.id }">
										<p>
											{{ item.content.substring(0, 120) }} ……</p>
									</router-link>
								</div>
								<div class="box31">
									<div>
										<img :src="item.accessStatus" style="width: 95%;height: 180px;margin-left: 15px;" />
									</div>
								</div>
							</div>

							<div class="box4 bl-row">
								<div class="bl-col-1">
									<img src="../assets/image/good.png" />
								</div>
								<div class="bl-col-1">
									<img src="../assets/image/comment.png" />
								</div>
								<div class="bl-col-1">
									<img src="../assets/image/share.png" />
								</div>
							</div>
							<div>
								<label>
									<input class="comment1 text-color-gray" type="text" name="comment1" value="评论" />
								</label>
							</div>

						</div>
						<div class="box">

						</div>
					</div>
					<!-- 展示相册 -->
					<div class="tab-box bl-col" v-show="albumistrue==true">
						<div class="box3">
							<div class="box3-card bl-shadow" v-for="(item, index) in albums" :key="index">
								<img :src="item.cover" class="img-circle" />
								<h3 class="photos text-color-white">{{item.photos}}</h3>
								<h4 class="ablum-name">{{item.albumName}}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bl-col-2">
				<div class="bl-card right-top bl-shadow">
					<h4 class="text-color-gray hotusers">热门文章</h4>
					<hr />
					<div class="list bl-row">
						<div class="bl-col-6 news">
							<h3>Git相关技能</h3>
							<div class="bl-row">
								<img src="../assets/image/yanjing.png" />
								<p class="text-color-gray">35人</p>
							</div>
						</div>
						<div class="bl-col-4 bl-row">
							<img src="../assets/image/01.jpg" class="img-circle" />
						</div>
					</div>
					<hr />
					<div class="list bl-row">
						<div class="bl-col-6 news">
							<h3>Java编程学习</h3>
							<div class="bl-row">
								<img src="../assets/image/yanjing.png" />
								<p class="text-color-gray">40人</p>
							</div>
						</div>
						<div class="bl-col-4 bl-row">
							<img src="../assets/image/02.jpg" class="img-circle" />
						</div>
					</div>
					<hr />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {	
			    logisActive: true,
				albumisActive: false,
				logistrue: true,
				albumistrue: false,
				users:'',
				/*轮播的效果*/
				sliders: [{
						"url": "#",
						"description": "one",
						"image": "http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191532_f2975b.jpg"
					},
					{
						"url": "#",
						"description": "two",
						"image": "http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191630_ff8fef.jpg"
					},
					{
						"url": "#",
						"description": "three",
						"image": "https://cdn.dribbble.com/users/1018201/screenshots/7816965/media/2ed92a6a7ee0017e28f3bbcaf88b8138.png"
					}
				],
				currentIndex: 0,
				timer: null
			}
		},
		created: function() {
			this.users = JSON.parse(localStorage.getItem('user'))
			this.$nextTick(() => {
					this.timer = setInterval(() => {
						this.autoPlay()
					}, 3000)
				}),
				//日志
				this.axios({
					method: 'post',
					url: this.GLOBAL.baseUrl + '/notes/selectallnotes',
					headers: {
						'Content-Type': 'application/json'
					},
				}).then(res => {
					alert(res.data)
					this.notes = res.data;
					console.log(res.data);
				});
				//获取所有相册的数据请求
				this.axios({
					method: 'post',
					url: this.GLOBAL.baseUrl + '/album/selectallalbums',
					headers: {
						'Content-Type': 'application/json'
					},
				}).then(res => {
					this.albums = res.data;
					console.log(res.data);
				});
				
		},
		methods: {
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 3000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
				this.currentIndex = index
			},
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > this.sliders.length - 1) {
					this.currentIndex = 0
				}
			},
			logclick() {
				this.logistrue = true;
				this.albumistrue = false;
				this.logisActive = true;
				this.albumisActive = false;
			},
			albumclick() {
				this.logistrue = false;
				this.albumistrue = true;
				this.logisActive = false;
				this.albumisActive = true;
			}
		}
	}
</script>
<style scoped="scoped">
	hr {
		width: 100%;
		margin: 0 auto;
		border: 0.5px solid #CCCCCC;
	}

	.photos {
		position: relative;
		z-index: 999;
		left: 90px;
		top: -30px;
	}

	.ablum-name {
		position: relative;
		top: -30px;
	}

	.hotusers {
		margin-top: 20px;
		margin-left: -135px;
	}

	.background-color {
		width: 100%;
		height: 100%;
		background-color: rgb(234, 234, 234);
	}

	.container {
		border-radius: 2%;
		background: white;
		margin-top: 690px;
		z-index: 8000;
		padding: 30px 10px 10px 10px;
	}

	.left-middle {
		height: 450px;
	}

	.left-top-images {
		width: 100%;
		height: 70%;
	}

	.avatar-images {
		position: relative;
		top: -50px;
		margin: 0 auto;
	}

	.bl-card-body1 {
		position: relative;
		top: -40px;
	}

	.bl-card-bottom1 {
		position: relative;
		top: -15px;
	}

	.box {
		width: 100%;
		height: 600px;
		margin-bottom: 20px;
		background-color: aliceblue;
	}

	.content {
		border-radius: 2%;
		width: 80%;
		height: 75%;
		margin: 0 auto;
		border: 1px solid #CCCCCC;
		margin-top: 5%;
		margin-left: 10%;
		padding: 10px 10px 10px 10px;
	}

	.left {
		margin-right: 15px;
	}

	.main {
		margin-top: 10px;
		margin-right: 15px;
	}

	.right-top {
		height: 600px;
	}

	table.one {
		border-collapse: separate;
		border-spacing: 20px 10px;
	}

	.bl-card-comment {
		width: 100%;
		height: 80px;
		border: 1px solid lightgrey;
		margin-bottom: 10px;
		background-color: aliceblue;
	}

	.comment {
		width: 100%;
		height: 100%;
		border: 0px;
	}

	.comment-right {
		align-items: center;
		margin-right: 15px;
	}

	.dynamic {
		width: 100%;
		background-color: aliceblue;
	}

	.al-right {
		width: 30%;
		margin-top: 25px;
		align-items: center;
	}

	.icon {
		margin-left: 30px;
		width: 30px;
		height: 30px;
	}

	.box1 {
		width: 100%;
		height: 70px;
	}

	.box2 {
		float: left;
		width: 60%;
		margin-left: 20px;
		text-align: center;
		box-lines: multiple;
		margin-top: 20px;
		margin-bottom: 15px;
	}

	.box3 {
		width: 100%;
		display: grid;
		grid-template-columns: 240px 240px 240px;
		grid-template-rows: 210px 210px 210px;
	}

	.box31 {
		width: 100%;
		grid-template-columns: 160px 160px 160px;
		grid-template-rows: 170px 170px 170px;
	}


	.box3-card {
		text-align: center;
		padding: 5px 5px 5px 5px;
		border: 1px solid #EEEEEE;
		margin-right: 10px;
		margin-bottom: 20px;
	}

	.box4 {
		margin-left: 65%;
		margin-top: 10px;
		width: 30%;
		height: 40px;
	}

	.comment1 {
		margin: 10px 10px 10px 10px;
		width: 90%;
		height: 40px;
	}

	.camera {
		margin-top: 15px;
	}

	/*轮播的效果*/
	.carousel-wrap {
		width: 100%;
		height: 720px;
		position: absolute;
		top: 0px;
	}

	.slide-ul {
		width: 100%;
		height: 100%;
	}

	.slide-ul li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.slide-ul li img {
		width: 100%;
		height: 100%;
	}

	.carousel-items {
		z-index: 100;
		position: relative;
		top: -80px;
		text-align: center;
		font-size: 0;
	}

	.carousel-items span {
		display: inline-block;
		width: 50px;
		height: 6px;
		margin: 0 5px;
		background-color: #eee;
		cursor: pointer;
	}

	.carousel-items .active {
		background-color: #FFA500;
	}

	/* 动画 */
	.slide-enter-to {
		transition: all 1s ease;
		transform: translateX(0);
	}

	.slide-leave-active {
		transition: all 1s ease;
		transform: translateX(-100%)
	}

	.slide-enter {
		transform: translateX(100%)
	}

	.slide-leave {
		transform: translateX(0)
	}

	/*卡片切换的样式*/
	.tab {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 40px;
		background-color: #fff;
	}

	.tab-item {
		cursor: pointer;
		margin-right: 10px;
		flex: 0 0 80px;
		text-align: center;
		line-height: 38px;
		font-size: 25px;
	}

	.tab-box {
		width: 100%;
		background-color: #ffffff;
		color: #fff;
		margin-top: 0px;
		animation: myfirst 2s;
	}

	.active {
		color: #00bbdd;
		font-weight: 600;
		border-bottom: 2px solid #00bbdd;
	}

	.list {
		cursor: pointer;
		/*鼠标悬停变小手*/
		width: 100%;
		height: 70px;
		padding: 5px 5px 5px 5px;
	}

	.news {
		padding: 10px 10px;
	}
</style>
