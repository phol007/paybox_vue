<template>
  <div class="payment">
  	<div class="container">
	 	<div class="payment-top">
	 		<span>{{ itemname }}</span>
	 	</div>
	 	<div class="payment-left">
	 		<div class="Pimg">
	 			<img :src="img">
	 		</div>
	 		<div class="PnetA">
	 			{{  netAmount }} ฿
	 		</div>
	 	</div>
	 	<div class="payment-right">
	 		<div class="PRT">
	 			<div class="PRT-plus">
	 				<a class="button is-large is-success" @click="addCNT()"> + </a>
	 			</div>
	 			<div class="PRT-cnt">
	 				{{ cnt }}
	 			</div>
	 			<div class="PRT-romove">
	 				<a class="button is-large is-danger" @click="rmCNT()"> - </a>
	 			</div>
	 		</div>
	 		<div class="PRC">
	 			<a class="choice" :class="{ 'active': chs.isActive }" v-for="(chs, index) in choice" @click='select_type(index)'>
	 				{{ chs.name }}
	 			</a>
	 		</div>
	 		<div class="PRB">
	 			<button class="cancel" @click="back_item">
	 				ย้อนกลับ
	 			</button>
	 			<button class="success">
	 				ชำระเงิน
	 			</button>
	 		</div>
	 	</div>
	</div>
  </div>
</template>

<script src="../js/payment.js"></script>
