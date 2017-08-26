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
	 			{{  Format_money(netAmount) }} ฿
	 		</div>
	 	</div>
	 	<div class="payment-right">
	 		<div class="PRT">	 			
	 			<div class="PRT-romove">
	 				<a class="button is-large is-danger" @click="rmCNT()"> - </a>
	 			</div>
	 			<div class="PRT-cnt">
	 				{{ cnt }}
	 			</div>
	 			<div class="PRT-plus">
	 				<a class="button is-large is-success" @click="addCNT()"> + </a>
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
	 			<button class="success" @click="send_payment">
	 				ชำระเงิน
	 			</button>
	 		</div>
	 	</div>
	</div>
<!-- modal payment -->
	<div class="modal" id="payment-onhand">
	  <div class="modal-background"></div>
	  <div class="modal-content">
	    
	    <div class="md-left">
	    	<u>ธนบัตรที่ชำระได้ </u> <hr style="margin: 2% 5% 5% 5%; width:90%;">
	    	<img src="../assets/money/b1000_true.png">
	    	<img src="../assets/money/b500_true.png">
	    	<img src="../assets/money/b100_true.png">
	    	<img src="../assets/money/b50_true.png">
	    	<img src="../assets/money/b20_true.png">
	    </div>
		<div class="md-right">
			<div class="netAmt">
				<span>ยอดค้างชำระ</span>
				<div class="mn">
					{{  Format_money(netAmount) }} ฿
				</div>
			</div>
			<div class="paymentAmt">
				<span>ยอดชำระ</span>
				<div class="mn">
					{{  Format_money(netPayment) }} ฿
				</div>
			</div>
			<div class="cancel">
				<button @click="close_modal" :class="PMC" :disabled="netPayment!=0">
	 				ยกเลิก
	 			</button>
			</div>
			<div class="coinuse">
				<u>เหรียญที่ชำระได้ </u> <br>
				<img src="../assets/money/c1.png" class="c1">
				<img src="../assets/money/c5.png" class="c5">
				<img src="../assets/money/c10.png" class="c10">
			</div>
		</div>

	  </div>
	</div>
<!-- close modal payment -->

<!--- modal payment success -->
	<div class="modal" id="payment-success">
	  <div class="modal-background"></div>
	  <div class="modal-content" style="text-align:center">
	    <img src="../assets/status/thankyou.gif" width="150">
	    <h1>{{ TPsuccess }}</h1>
	  </div>
	</div>
<!-- close modal payment success -->

  </div>
</template>

<script src="../js/payment.js"></script>
