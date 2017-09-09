<template>
	<div class="add_money">
		<button class="back" @click="backSetting">
	  	 	<span class="icon icon is-large">
			  <i class="fa fa-arrow-left"></i>
			</span>
  	 	</button>
		<div class="container" style="padding: 0 1%;">
			<h1 style="font-size:50px; margin-top:1%;"> {{ titlePage }}</h1>
			<div class="add-l">
				<h1>ยอดเงินในตู้</h1>
				<div class="text-money">
					{{ format_money(onMachine) }}
				</div>

				<h1>ยอดเงินที่เพิ่ม</h1>
				<div class="text-money">
					{{ format_money(addMachine) }}
				</div>
				<button class="button is-success button-money" @click="save_data">
					บันทึก
				</button>
			</div>
			<div class="add-r">
				<div class="data-money">
					<div class="add-QTY">{{ QT1 }}</div>
						<button class="bt_money" @click="add_QTY(0)">
						 	<img src="../assets/money/c1.png">
						 	<h1>เหรียญ 1 บาท</h1>
					 	</button>
				 	<div class="rm-QTY" @click="rm_QTY(0)"> - </div>
			 	</div>

			 	<div class="data-money">
					<div class="add-QTY">{{ QT2 }}</div>
						<button class="bt_money" @click="add_QTY(1)">
						 	<img src="../assets/money/c5.png">
						 	<h1>เหรียญ 5 บาท</h1>
					 	</button>
				 	<div class="rm-QTY" @click="rm_QTY(1)"> - </div>
			 	</div>

			 	<div class="data-money">
					<div class="add-QTY">{{ QT3 }}</div>
						<button class="bt_money" @click="add_QTY(2)">
						 	<img src="../assets/money/c10.png">
						 	<h1>เหรียญ 10 บาท</h1>
					 	</button>
				 	<div class="rm-QTY" @click="rm_QTY(2)"> - </div>
			 	</div>

			 	<div class="data-money">
					<div class="add-QTY">{{ QT4 }}</div>
						<button class="bt_money" @click="add_QTY(3)">
						 	<img src="../assets/money/b100.jpg" style="width:80%; margin: 15% 0;">
						 	<h1>ธนบัตร 100 บาท</h1>
					 	</button>
				 	<div class="rm-QTY" @click="rm_QTY(3)"> - </div>
			 	</div>

			</div>	  		
		</div>
	</div>
</template>
<script src="../js/add_money.js"></script>