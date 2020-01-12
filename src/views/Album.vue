<template>
	<div class="head-backgroud-album">
		<div class="header-background">
			<img src="../assets/image/album.jpg" class="header-avatar" />
			<div class="header-background-color bl-col">
				<p class="title-front text-color-white ">分享</p>
				<p class="meta-front text-color-bule">分享你的生活,记录</p>
			</div>
		</div>
		<div class="bl-row ablum-box">
			<router-link to="/insertAblum">
				<div class="bl-row al-left">
					<button class="bl-btn bl-btn-blue bl-shadow bl-btn-nomal bl-btn-round btn-ablum">创建相册</button>
				</div>
			</router-link>
			
			<button class="bl-btn bl-btn-blue bl-shadow bl-btn-nomal bl-btn-round btn-ablum">管理相册</button>
		</div>
		<div class="container bl-shadow" >
			<div class="card" v-for="(item, index) in albums" :key="index">
				<div class="front">
					<div class="card-head">
					</div>
					<div>
						<img :src="users.avatar" class="circle-avatar avatar-max avatar">
					</div>
					<div class="card-body">
						<h4 class="text-color-pick ">{{item.albumName}}</h4>
						<p class="card-content">
							欢迎上传你喜欢的照片
						</p>
						<button type="button" class="btn">喜欢</button>
					</div>
				</div>
				<div class="back">
					<img :src="item.cover" class="img-round" />
					<button type="button" class="bl-btn bl-btn-min bl-shadow bl-btn-round bl-btn-pick btn-in">进入</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: ''
			};
		},
		created: function() {
			this.users = JSON.parse(localStorage.getItem('user'))
			//获取相册数据
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
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	.head-backgroud-album {
		width: 100%;
	}

	.container {
		position: relative;
		top: 10px;
		width: 70%;
		margin: 0 auto;
		/*网格布局*/
		display: grid;
		grid-template-columns: 350px 350px 350px;
		grid-template-rows: 310px 310px 310px;
	}

	.card {
		text-align: center;
		width: 330px;
		height: 300px;
		padding: 5px 5px 5px 5px;
		perspective: 500;
		margin-bottom: 40px;
		/* 设置元素被查看位置的视图 */
		-webkit-perspective: 500;
		/* Safari 和 Chrome */
		box-shadow: 2px 5px 10px #aaa;
		/* 阴影 */
	}

	.card div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-perspective: 10000;
		backface-visibility: hidden;
		/* 隐藏 */
		-webkit-transition: all 1s;
		-moz-transition: all 1s;
		-ms-transition: all 1s;
		-o-transition: all 1s;
	}

	.card .front {
		background: #fff;
		display: flex;
		flex-direction: column;
	}

	.card .back {
		background: papayawhip;
		-webkit-transform: rotateY(-180deg);
		/* 背面卡片先沿Y轴翻转180，反过来 */
	}

	.card:hover .front {
		-webkit-transform: rotateY(-180deg);
		/* 鼠标进入时正面卡片翻转180
	 */
	}
	.card:hover .back {
		-webkit-transform: rotateY(-360deg);
		/* 鼠标进入时背面卡片转360度 */
	}

	.card-head {
		max-height: 65%;
		background: linear-gradient(40deg, #ff6ec4, #7873f5);
	}

	.card-body {
		margin-top: 150px;
		font-size: 17px;
	}

	.card-content {
		color: #aaa;
		font-size: 20px;
		line-height: 28px;
	}

	.btn {
		position: relative;
		top: 30px;
		width: 110px;
		height: 40px;
		background: #ff6ec4;
		color: #fff;
		border: none;
		border-radius: 5px;
		box-shadow: 2px 5px 10px #aaa;
	}

	.btn-in {
		position: relative;
		top: -10px;
	}

	.avatar {
		position: relative;
		top: 20px;
	}

	.img-round {
		height: 90%;
		width: 90%;
		padding: 10px 10px 10px 10px;
		border-radius: 5%;
	}

	.btn-ablum {
		margin-left: 10px;
	}

	.ablum-box {
		width: 300px;
		margin-top: 15px;
		margin-left: 15%;
	}
</style>
