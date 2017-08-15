<template>
  <div class="items">
  	<div class="container">
	 <div class="item_menu" v-for="items in item_lists">
	 	<img :src="items.img">
	 	<h1>items.name</h1>
	 </div>
	</div>
  </div>
</template>

<script src="../js/item.js"></script>


