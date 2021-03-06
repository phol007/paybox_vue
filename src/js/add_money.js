import numeral from 'numeral'
import api from '../services/axios.js'

export default {
	name: 'add_money',
	data () {
		return {
			titlePage: 'เพิ่มยอดเงินในตู้',
			QT1: 0,
			QT2: 0,
			QT3: 0,
			QT4: 0,
			onMachine: 0,
			addMachine: 0,
			v1: 0,
			v2: 0,
			v5: 0,
			v10: 0,
			v100: 0
		}
	},
	methods: {
		add_QTY (index) {
			this.stopSound()
			this.Soundclick()
			switch (index) {
				case 0 : if(this.QT1 < 10){this.QT1 += 1; this.addMachine += 1000; this.v1 += 1000;}else{ alert("ท่านใส่ยอดเงินมากเกินไป!")}
						 document.getElementsByClassName('add-QTY')[index].style.display = 'block'
						 document.getElementsByClassName('rm-QTY')[index].style.display = 'block'
				  break
				case 1 : if(this.QT2 < 10){this.QT2 += 1; this.addMachine += 1000; this.v5 += 1000;}else{ alert("ท่านใส่ยอดเงินมากเกินไป!")}
						 document.getElementsByClassName('add-QTY')[index].style.display = 'block'
						 document.getElementsByClassName('rm-QTY')[index].style.display = 'block'				
				  break
				case 2 : if(this.QT3 < 10){this.QT3 += 1; this.addMachine += 1000; this.v10 += 1000;}else{ alert("ท่านใส่ยอดเงินมากเกินไป!")}
						 document.getElementsByClassName('add-QTY')[index].style.display = 'block'
						 document.getElementsByClassName('rm-QTY')[index].style.display = 'block'
				  break
				case 3 : if(this.QT4 < 10){this.QT4 += 1; this.addMachine += 1000; this.v100 += 1000;}else{ alert("ท่านใส่ยอดเงินมากเกินไป!")}
						 document.getElementsByClassName('add-QTY')[index].style.display = 'block'
						 document.getElementsByClassName('rm-QTY')[index].style.display = 'block'
				  break
			}			
		},
		rm_QTY (index) {
			this.stopSound()
			this.Soundclick()
			switch (index) {
				case 0 : if(this.QT1 != 0){this.QT1 -= 1; this.addMachine -= 1000; this.v1 -= 1000;}
						 if(this.QT1==0){
							 document.getElementsByClassName('add-QTY')[index].style.display = 'none'
							 document.getElementsByClassName('rm-QTY')[index].style.display = 'none'
						 }
				  break
				case 1 : if(this.QT2 != 0){this.QT2 -= 1; this.addMachine -= 1000; this.v5 -= 1000;}
						 if(this.QT2==0){
							 document.getElementsByClassName('add-QTY')[index].style.display = 'none'
							 document.getElementsByClassName('rm-QTY')[index].style.display = 'none'
						 }				
				  break
				case 2 : if(this.QT3 != 0){this.QT3 -= 1; this.addMachine -= 1000; this.v10 -= 1000;}
						 if(this.QT3==0){
							 document.getElementsByClassName('add-QTY')[index].style.display = 'none'
							 document.getElementsByClassName('rm-QTY')[index].style.display = 'none'
						 }
				  break
				case 3 : if(this.QT4 != 0){this.QT4 -= 1; this.addMachine -= 1000; this.v100 -= 1000;}
						 if(this.QT4==0){
							 document.getElementsByClassName('add-QTY')[index].style.display = 'none'
							 document.getElementsByClassName('rm-QTY')[index].style.display = 'none'
						 }
				  break
			}
		},
		backSetting () {
			this.$router.push('/setting')
			this.QT1 = 0
			this.QT2 = 0
			this.QT3 = 0
			this.QT4 = 0
			this.addMachine = 0
			for (var i = 0; i < 4; i++){
				document.getElementsByClassName('add-QTY')[i].style.display = 'none'
				document.getElementsByClassName('rm-QTY')[i].style.display = 'none'
			}
		},
		format_money (int) {
			return numeral(int).format("0,0.00")
		},
		save_data () {
			this.stopSound()
			this.Soundclick()
			// this.onMachine += this.addMachine
			this.QT1 = 0
			this.QT2 = 0
			this.QT3 = 0
			this.QT4 = 0
			this.addMachine = 0
			for (var i = 0; i < 4; i++){
				document.getElementsByClassName('add-QTY')[i].style.display = 'none'
				document.getElementsByClassName('rm-QTY')[i].style.display = 'none'
			}

			var data =  {
					      v025: 0,
					      v050: 0,
					      v1: this.v1,
					      v2: 0,
					      v5: this.v5,
					      v10: this.v10,
					      v100: this.v100
					    }
			// console.log({Device:"host",type:"request",command:"cash_refill",data: data})
			this.$socket.sendObj({ Device:"host",type:"request",command:"cash_refill",data: data })
		},
		websocket_onmessage() {
	      this.$options.sockets.onmessage = (skResult) =>
	      this.event_sk(JSON.parse(skResult.data))
	    },
	    event_sk (data) {
	      console.log(JSON.stringify(data))
	      switch(data.command){
	          case 'cash_count' : this.getMoneyOnMachine(data.data)
	            break
	          case 'cash_refill' : this.getMoneyOnMachine(data.data)
	          	break
	        }
	    },
		getMoneyOnMachine (totalAmount) {
			this.onMachine = totalAmount
		},
		Soundclick () {
			var audio = document.getElementById("audio")
       		audio.play()
		},
	    stopSound () {
	      var audio = document.getElementById("audio")
	          audio.currentTime = 0
	    }
	},
	beforeDestroy () {
	  return {
	    sockets: null
	  }
	},
	mounted () {
		// this.getMoneyOnMachine()
		this.websocket_onmessage()
		setTimeout(function(){
			this.$socket.sendObj({Device:"host",type:"request",command:"cash_count"})			
		}.bind(this), 200)
	}
}