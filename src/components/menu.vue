<template>
  <div class="menu">
  	<div class="container">
	 <h1 class="title"> {{ title }} </h1>
	 <div class="menu-c">
	 <button class="bt_menu" v-for="menus in menu_list" @click="getMenuToitem(menus)">
	 	<img :src="menus.img">
	 	<h1>{{ menus.name }}</h1>
	 </button>
	 </div>
	 <p id="lang_bar">
	 	<hr />
	 	<span><img src="../assets/lang/thaiflag.png" class="lang" @click="getApi(1)"></span>&nbsp;&nbsp;
	 	<span><img src="../assets/lang/uk-flag.png" class="lang" @click="getApi(2)"></span>&nbsp;&nbsp;
	 	<span><img src="../assets/lang/China.png" class="lang" @click="getApi(3)"></span>	 	
		<h1 style="font-size:20px; font-weight:bold;"> {{ language }} </h1>
	 </p>
	</div>
  </div>
</template>

<script src="../js/menu.js"></script>


