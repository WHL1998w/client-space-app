<template>
	<div class="container">
		<div class="login-box bl-shadow ">
			<div class="tab">
				<span class="tab-item" :class="{ active: signUpisActive }" @click="signUpclick">账号注册</span>
				<span class="tab-item" :class="{ active: loginisActive }" @click="loginclick">密码登录</span>
			</div>
			<!-- 免密登录 -->

			<div class="tab-signUp-box" v-show="signUpistrue == true">
				<div class="blank">
					<label class="alert" v-if="!ismobile">{{ mobileTip }}</label>
				</div>
				<input type="text" name="account" class="input-box bl-shadow" placeholder="手机号" v-model="userDto.mobile" @input="checkmobile()" />

				<input type="text" class="input-box-small bl-shadow" placeholder="验证码" v-model="userDto.code" />
				<button type="submit" class="bl-btn bl-btn-round bl-btn-nomal bl-btn-none1" @click="getsms">获取验证码</button>
				<div class="tab-bottom"><button type="submit" class="bl-btn bl-btn-round  btn-login bl-shadow" @click="signIn()">注册</button></div>
				<div class="line-box">
					<span class="line"></span>
					<span class="login-3rd">第三方登录</span>
					<span class="line"></span>
				</div>
				<div class="icon-box">
					<i class="iconfont" style="color: rgb(81, 195, 50)">&#xe709;</i>
					<i class="iconfont" style="color: rgb(48, 165, 221)">&#xe66a;</i>
					<i class="iconfont" style="color: rgb(230, 23, 45)">&#xe636;</i>
				</div>
			</div>

			<!-- 密码登录 -->
			<div class="tab-signUp-box" v-show="loginistrue == true">
				<div class="blank">
					<label class="alert" v-if="!ismobile">{{ mobileTip }}</label>
				</div>
				<input type="text" name="account" class="input-box bl-shadow" placeholder="请输入账号" v-model="userDto.mobile"/>
				<input type="password"  class="input-box bl-shadow" placeholder="密码" v-model="userDto.password" />
				<div class="tab-bottom"><input type="submit" value="登录" class="bl-btn bl-btn-round  btn-login bl-shadow" @click="signUp()"></input></div>
				<div class="line-box">
					<span class="line"></span>
					<span class="login-3rd">第三方登录</span>
					<span class="line"></span>
				</div>
				<div class="icon-box">
					<i class="iconfont" style="color: rgb(81, 195, 50)">&#xe709;</i>
					<i class="iconfont" style="color: rgb(48, 165, 221)">&#xe66a;</i>
					<i class="iconfont" style="color: rgb(230, 23, 45)">&#xe636;</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			signUpisActive: true,
			loginisActive: false,
			signUpistrue: true,
			loginistrue: false, 
			userDto:{
				mobile:'',
				password:'',
				code:''
			},
			ismobile: false,
			usersms: null,
			msg: '获取验证码',
			timer: null,
			countdown: 10,
			tipmsg: '',
			mobileistrue: false,
			passwordistrue: false,
			mobile:''
		};
	},
	methods: {
		signUpclick() {
			this.signUpistrue = true;
			this.loginistrue = false;
			this.signUpisActive = true;
			this.loginisActive = false;
		},
		loginclick() {
			this.signUpistrue = false;
			this.loginistrue = true;
			this.signUpisActive = false;
			this.loginisActive = true;
		},
		/**免密登录交互
		 * @param {Object} signDto
		 */

		// 1.检查手机号格式
		checkmobile() {
			var phone = this.userDto.mobile;
			if (!/^1[3456789]\d{9}$/.test(phone)) {
				this.ismobile = false;
				this.mobileTip = '手机号格式不正确';
			} else {
				this.ismobile = true;
				this.mobileTip = '';
			}
		},
		//2.获取短信验证码
		getsms() {
			let that = this;
			this.axios({
				method: 'post',
				url: this.GLOBAL.baseUrl + '/user/sms',
				data: {
					mobile: this.userDto.mobile
				}
			}).then(res => {
				console.log(res);
			});
		},
		// 3.验证手机号和短信验证码   登录
		signIn() {
			let that = this;
			this.axios({
				method: 'post',
				url: this.GLOBAL.baseUrl + '/user/signup',
				data: {
					mobile: this.userDto.mobile,
					code:this.userDto.code,
				}
			}).then(res => {
				console.log(res);
				alert(res.data.msg);
				if (res.data.msg == "成功") {
					 localStorage.setItem('user',JSON.stringify(res.data.data));
					alert("注册成功");
					 this.$router.push('/personal');
				}
			});
		},

		// 账号密码登录
	signUp(){
		 let that=this;
		 this.axios({
		method: 'post',
		url:this.GLOBAL.baseUrl +'/user/login',
		data: {
			mobile:this.userDto.mobile,
			password:this.userDto.password
		}
		 }).then(res=>{
		  alert(res.data.msg)
		  if(res.data.msg=="成功"){
		  this.$router.push('/Index');
		  //将后端获取到的值传送到前端，相当于将数据暂时存到localStroage
		   localStorage.setItem('user',JSON.stringify(res.data.data));
		  }
		  if(res.data.msg=="用户不存在"){
		   this.mobileistrue=true;
		  }else{
		   this.mobileistrue=false; 
		  }
		  if(res.data.msg=="密码错误"){
		   this.passwordistrue=true;
		  }else{
		   this.passwordistrue=false;
		  }
		 }).catch(function(error){
		  console.log(Error)
		 });
		}
	}
};
</script>

<style scoped>
.blank {
	padding: 3%;
	height: 3%;
}
.alert {
	color: red;
	text-align: center;
}

/*iconfont图标，第三方登录用*/
@font-face {
	font-family: 'iconfont'; /* project id 1544591 */
	src: url('//at.alicdn.com/t/font_1544591_9916xmkl8jd.eot');
	src: url('//at.alicdn.com/t/font_1544591_9916xmkl8jd.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1544591_9916xmkl8jd.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1544591_9916xmkl8jd.woff') format('woff'), url('//at.alicdn.com/t/font_1544591_9916xmkl8jd.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1544591_9916xmkl8jd.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont', serif !important;
	font-size: 28px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0;
	-moz-osx-font-smoothing: grayscale;
}
.line-box {
	width: 90%;
	margin-left: 20px;
	margin-top: 30px;
	display: inline-flex;
	align-items: center;
}
/*线条样式*/
.line {
	border-bottom: 1px solid #9b9b9b;
	flex: 0 0 33%;
}
/*第三方登录文字样式*/
.login-3rd {
	flex: 0 0 30%;
	color: #9b9b9b;
	font-size: 12px;
	text-align: center;
}
/*图标外层包裹区样式*/
.icon-box {
	width: 60%;
	margin-left: 25%;
	display: inline-flex;
	justify-content: center;
	margin-top: 10px;
}
/*图标样式*/
.icon-box i {
	flex: 0 0 33%;
}
.container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(../assets/image/1.jpg);
	background-size: 120%;
}
.active {
	color: #00bbdd;
	font-weight: 600;
	border-bottom: 2px solid #00bbdd;
}

.login-box {
	width: 360px;
	height: 320px;
	border: 2px solid #ffffff;
	border-radius: 10px;
	background-color: #ffffff;
	position: absolute;
	top: 150px;
	left: 50%;
}
.tab {
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
}
.input-box {
	width: 70%;
	height: 30px;
	border: 1px solid #e4e6e5;
	border-radius: 3px;
	padding-left: 30px;
	margin-top: 20px;
	margin-left: 50px;
}
.input-box-small {
	width: 30%;
	height: 30px;
	border: 1px solid #e4e6e5;
	border-radius: 3px;
	padding-left: 30px;
	margin-top: 20px;
	margin-left: 50px;
}
.tab-signIn-box {
	height: 200px;
	background-color: #ffffff;
	color: #fff;
	font-size: 13px;
	margin-top: 0px;
	animation: myfirst 2s;
}
.tab-signUp-box {
	height: 220px;
	background-color: #ffffff;
	color: #fff;
	margin-top: 0px;
	animation: mysecond 2s;
}
@keyframes myfirst {
	from {
		margin-left: 20px;
		opacity: 0;
	}

	to {
		margin-left: 0px;
	}
}
@keyframes mysecond {
	from {
		opacity: 0;
	}

	to {
	}
}
@keyframes mythird {
	from {
		opacity: 0;
	}

	to {
	}
}

.tab-bottom {
	width: 70%;
	margin: 0 auto;
	height: 30px;
	margin-top: 20px;
}
.btn-login {
	display: block;
	 cursor: pointer;
	height: 100%;
	width: 100%;
	color: #ffffff;
	background-color: rgb(26, 160, 52);
	cursor: pointer;
	animation: mythird 2s;
}

.bl-btn-none {
	color: #ffffff;
	background-color: rgb(128, 128, 128);
	margin-left: 50px;
	margin-top: 30px;
}
.bl-btn-none1 {
	color: #ffffff;
	background-color: rgb(128, 128, 128);
	margin-left: 35px;
}

.bl-btn-getcode {
	color: #ffffff;
	background-color: rgb(0, 121, 215);
	margin-left: 35px;
	cursor: pointer;
}

.code-box {
	display: flex;
	margin-top: 10px;
	margin-bottom: 20px;
	justify-content: space-between;
}

.verify {
	flex: 1 1 50%;
	height: 40px;
	margin-left: 50px;
	margin-top: 10px;
}

.verify:hover {
	cursor: pointer;
}

.code {
	flex: 0 0 40%;
	height: 40px;
}
.btnDisabled {
	background-color: #ddd;
	color: #333;
}
</style>
