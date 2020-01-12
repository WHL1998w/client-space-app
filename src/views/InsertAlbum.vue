<template>
	<div class="container bl-col">
		<div class="header-background">
			<img src="../assets/image/2.jpg" class="header-avatar" />
			<div class="header-background-color bl-col">
				<p class="title-front text-color-white">分享</p>
				<p class="meta-front text-color-bule">用心发现美,记录生活点滴</p>
			</div>
		</div>
		<div class="write-box bl-shadow">
			<input class="bl-title title" type="text" value="请输入标题" v-model="albums.albumName"/>
			<textarea class="input-con bl-sub-title" v-model="albums.cover">记录美好，记录心情</textarea>
			<div class="bl-row bottom-box">
				<button class="bl-btn bl-btn-min bl-btn-none bl-btn-round bl-btn-blue btn-send " @click="insertAlbum()">新增</button>
			</div>
		</div>

	</div>

</template>
<script>
	export default {
		data() {
			return {
				albums:{
					albumName:'',
					cover:''
				}
			};
		},
		computed: {},
		created: function() {
			this.users = JSON.parse(localStorage.getItem('user'))			
		},
		methods: {
			insertLog() {
				this.axios({
					method: 'post',
					url: this.GLOBAL.baseUrl + '/album/insetablum',
					data: {
						userId:this.users.id,
						albumName:this.albums.albumName,
						cover:this.albums.cover
					}
				}).then(res => {
					alert(res.data.msg)
					if(res.data.msg=="成功"){
					this.$router.push('/album');
					console.log(res.data.data);
					}
				});		
			}
		}
	};
</script>

<style scoped="scoped">
	.container {
		width: 100%;
	}

	.write-box {
		width: 57.3%;
		height: 517px;
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 30px;
	}

	.input-con {
		width: 100%;
		position: relative;
		top: -35px;
		height: 250px;
		padding: 20px 20px 0px 20px;
		background-color: rgb(143, 175, 167);
	}

	.bottom-box {
		width: 200px;
		float: right;
		margin-right: 5px;
		position: relative;
		top: -40px;
	}

	.btn-send {
		margin-right: 20px;
	}

	.title {
		width: 40%;
		margin-left: 30%;
		position: relative;
		top: -50px;
		opacity: 0.5;
		background: rgb(143, 175, 167);
		border: 1px dashed transparent;
		background: linear-gradient(white, white) padding-box,
			repeating-linear-gradient(-45deg, #ccc 0, #ccc 0.25em, white 0, white 0.75em);

	}
</style>
