<template>
  <div class="setting">
  	<button class="back" @click="backHome">
	  	<span class="icon icon is-large">
		  <i class="fa fa-arrow-left"></i>
		</span>
  	</button>
  	<div class="container">
  		<h1 style="font-size:50px;"> {{ titlePage }}</h1>
  		<button class="bt_menu" @click="goto('addMoney')">
	 	<img src="../assets/cash-icon.png">
	 	<h1>เติมเงิน</h1>
	 </button>
  	</div>
  </div>
</template>

<script src="../js/setting.js"></script>