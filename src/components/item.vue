<template>
  <div class="items">
  	<div class="container">
	 <button class="bt_menu" v-for="items in item_list">
	 	<img :src="items.img">
	 	<h1>{{ items.name }}</h1>
	 </button>

	</div>
  </div>
</template>

<script src="../js/item.js"></script>


