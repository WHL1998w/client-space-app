<template>
	<div class="container bl-shadow">
		<h1 class="text-color-bule">
			个人资料中心
		</h1>
		<div class="data-box">
			<div class="bl-col">
				<div class="list bl-row">
					<div class="bl-col-3">
						<img :src="users.avatar" class="circle-avatar avatar-max avatar" />
					</div>
					<div class="bl-col-6 ">
						<h2 class="nickname">{{users.nickname}}</h2>
						<p class="nickname text-color-gray">{{users.autograph}}</p>
					</div>				
				</div>
				<div class="list1 bl-row">
					<div class="bl-col-3">
						<h3>介绍</h3>
					</div>
					<div class="bl-col-6 ">
						<input type="text" class="bl-sub-title" v-model="users.introduction"/>
					</div>				
				</div>
				<div class="list1 bl-row">
					<div class="bl-col-3">
						<h3>住址</h3>
					</div>
					<div class="bl-col-6 ">
						<input type="text" class="bl-sub-title" v-model="users.address"/>
					</div>				
				</div>
				<div class="list1 bl-row">
					<div class="bl-col-3">
						<h3>职业</h3>
					</div>
					<div class="bl-col-6 ">
						<input type="text" class="bl-sub-title" v-model="users.job"/>
					</div>				
				</div>
				<div class="list1 bl-row">
					<div class="bl-col-3">
						<h3>生日</h3>
					</div>
					<div class="bl-col-6 ">
						<label class="bl-sub-title">{{users.birthday}}</label>
					</div>				
				</div>
				<div class="list1 bl-row">
					<div class="bl-col-3">
						<h3>爱好</h3>
					</div>
					<div class="bl-col-6 ">
						<input type="text" class="bl-sub-title" v-model="users.hobby"/>
					</div>				
				</div>
				<div class="list1 bl-row">
					<div class="bl-col-3">
						<h3>手机号</h3>
					</div>
					<div class="bl-col-6 ">
						<input type="text" class="bl-sub-title" v-model="users.mobile"/>
					</div>				
				</div>
				<div class="list1 bl-row">
					<div class="bl-col-3">
						<button class="bl-btn bl-btn-min bl-btn-blue bl-shadow bl-btn-round">修改</button>
					</div>
					<div class="bl-col-6 ">
						<button class="bl-btn bl-btn-min bl-btn-blue bl-shadow bl-btn-round">完成</button>
					</div>				
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				users:''
			};
		},
		created() {
				   this.users = JSON.parse(localStorage.getItem('user'))
		},
	}
</script>

<style scoped="scoped">
	.container {
		text-align: center;
		position: relative;
		top: 70px;
		width: 40%;
		height: 600px;
		border: 2px solid rgb(127, 226, 245);
		border-radius: 5%;
	}
	.data-box{
		width: 70%;
		height: 90%;
		
		margin: 0 auto;
	}
	.list{
		padding: 0px 0px 10px 10px;
		width: 90%;
		height:100px;
		margin-bottom: 20px;
	}
	.list1{
		padding: 0px 0px 10px 10px;
		width: 90%;
		height:40px;
	}
	.nickname{
		position: relative;
		top: 20px;
		left:-60px;
	}
</style>
