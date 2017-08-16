<template>
  <div class="items">  
  	 <button class="back" @click="backHome">
  	 	<span class="icon icon is-large">
		  <i class="fa fa-arrow-left"></i>
		</span>
  	 </button>
  	<div class="container">
	 <div class="item_menu" v-for="items in item_lists" @click="send(items)">
	 	<div class="imgitem">
	 		<img :src="items.img">
	 	</div>
	 	<div class="Nitem">
	 		<h1>{{ items.name }}</h1>
	 	</div>
	 </div>
	</div>
  </div>
</template>

<script src="../js/item.js"></script>


