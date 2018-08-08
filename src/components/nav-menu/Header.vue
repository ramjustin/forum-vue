<template>
    <nav class="navbar navbar-expand-lg navbar-default" role="navigation">
		<div class="container">
			<div class="navbar-left">
			    <router-link class="navbar-brand logo" :to="{name: 'homeLink'}">
				    <img src="../../assets/photos/app_logo.png" style="width: 35px; height: auto;"/>
			        <span class="weizhi">微智社区</span>
			    </router-link>
			</div>
			<div class="collapse navbar-collapse navbar-center header-center">
				<ul class="navbar-nav mr-auto mt-2 my-lg-0">
					<li class="nav-item" id="nav-information"><router-link class="nav-link" :to="{name: 'homeLink'}">资讯</router-link></li>
					<li class="nav-item" id="nav-forum"><router-link class="nav-link" :to="{name: 'forumLink'}">论坛</router-link></li>
					<li class="nav-item" id="nav-model"><router-link class="nav-link" :to="{name: 'modelLink'}">版块</router-link></li>
					<li class="nav-item" id="nav-shopping"><router-link class="nav-link" :to="{name: 'shoppingLink'}">智能商城</router-link></li>
					<li class="nav-item" id="nav-more"><router-link class="nav-link" :to="{name: 'moreLink'}">更多</router-link></li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search">
					<button class="btn btn-outline-success" type="button"><i class="fa fa-search"></i></button>
				</form>
			</div>
			<div class="navbar-right">
				<ul class="navbar-nav mr-auto mt-2 my-lg-0">
					<li class="nav-item left"><router-link class="nav-link" :to="{name: 'registerLink'}">登录</router-link></li>
					<li class="nav-item right"><router-link class="nav-link" :to="{name: 'loginLink'}">注册</router-link></li>
				</ul>
			</div>
		</div>
	</nav>
</template>


<style scoped>
body {
    box-sizing: border-box;
}
nav {
    color: white;
}
nav.navbar {
    background-color: #505050;
}
div.container {
	width: 90%;
	min-width: 1000px;
	display: flex;
}
a.logo {
    margin: 0;
    padding: 0;
	margin-right: 15px;
	display: inline-block;
}
.weizhi {
	padding: 0 10px 0 30px;
	font-size: 18px;
	font-weight: bold;
	color: white;
}

ul li {
	padding: 0 10px 0 10px;
}
.nav-link {
	color: white;
}	

input{
    width: auto;
    height: 30px;
}
li.left {
    padding: 0 0 0 20px;
}
.button_i {
	color: white;
}

.router-link-active {
	color: #3CB371;
}

</style>

