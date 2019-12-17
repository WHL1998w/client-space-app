<template>
	<div>
		<div id="notes">
			<div class="al-container">
				<input style="border: none;width: 100%;" readonly class="bl-title" v-model="notes.title"/>
			<div class="card bl-row">
				<div class="bl-col2">
				<router-link to="/profile">
				<img :src="notes.avatar" class="avatar">
				</router-link>
				</div>
				<div class="">
					<p class="bl-sub-title">{{notes.nickname}}</p>
					<p class="bl-sub-title">
					{{notes.createTime}}
					</p>
				</div>
			</div>
			<textarea readonly class="input-content" v-model="notes.content">

			</textarea>
			<div class="btn-box">
				<button  class="bl-btn bl-btn-round bl-btn-min btn-del bl-btn-none bl-btn-warning" @click="deleteBtn()">删除</button>
				<button class="bl-btn bl-btn-round bl-btn-min bl-btn-none bl-btn-blue" @click="update()">编辑</button>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				notes:{}
			};
		},
		created() {
			var id = this.$route.params.id;
			this.axios.get(this.GLOBAL.baseUrl + '/notes/' + id).then(res => {
				console.log(res.data.data);
				this.notes = res.data.data;
			});
		},
		computed: {},
		methods: {
			update() {
				
			},
			deleteBtn() {
				
			}
		}
	};
</script>

<style scoped>
	#article{
		width: 100%;
		background: #EEEEEE;
	}
	.al-container{
		width: 60%;
		margin: 0 auto;
		background: white;
		padding-top: 50px;
		padding-left: 20px;
		padding-right: 20px;
	}
	.box{
		height: 50px;
		line-height: 50px;
	}
	.avatar{
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
	.card{
		margin-top: 10px;
	}
	.btn-box{
		width: 200px;
		height: 50px;
		margin-left: 500px;
		margin-top: 10px;
	}
	.btn-del{
		margin-right: 10px;		
	}
	.input-content{
		width: 100%;
		height:500px;
		font-size:15px;
		background-image: url(../assets/image/log6.png);
	}
</style>
