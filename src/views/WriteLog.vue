<template>
	<div class="container bl-col">
		<div class="header-background">
			<img src="../assets/image/2.jpg" class="header-avatar" />
			<div class="header-background-color bl-col">
				<p class="title-front text-color-white">记录</p>
				<p class="meta-front text-color-bule">用心发现美,用笔记录美</p>
			</div>
		</div>
		<div class="write-box bl-shadow">
			<img style="z-index: 9999;" src="../assets/image/1.png" />
			<input class="bl-title title" type="text" value="请输入标题" />
			<textarea class="input-con bl-sub-title">记录美好，记录心情</textarea>
			<div class="bl-row bottom-box">
				<button class="bl-btn bl-btn-min bl-btn-none bl-btn-round bl-btn-blue btn-send ">发表</button>
				<select>
					<option value="gong">公开可见</option>
					<option value="saab">仅自己可见</option>
					<option value="opel">指定好友可见</option>
					<option value="audi">好友可见</option>
				</select>
			</div>
		</div>

	</div>

</template>
<script>
	export default {
	        
	    }
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
