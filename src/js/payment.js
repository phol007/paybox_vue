import api from '../services/axios.js'
import numeral from 'numeral'
import $ from 'jquery'

export default {
  name: 'payment',
  data () {
    return {
      itemname: '',
      itemID: 0,
      img: '',
      choice: [],
      netAmount: 0,
      netPayment: 0,
      cnt: 1,
      choice_ID: 0,
      choice_name: '',
      price: 0,
      unit: '',
      oldMenu: [],
      langID: 0,
      PMC: 'bt-cancel',
      payload: {},
      test_totalbill: 0,
      TPsuccess: ''
    }
  },
  methods: {
    showDetail (item, lang) {
      // console.log(item)
      this.itemname = item.name
      this.itemID = item.item_code
      this.img = item.img
      this.unit = item.unit
      var type_list = item.type_list
      for(var i = 0; i < type_list.length; i++){
        switch (lang){
          case 1 : this.choice.push({id: type_list[i].id,name: type_list[i].name, price: type_list[i].price, isActive: false})
                  break
          case 2 : this.choice.push({id: type_list[i].id,name: type_list[i].name_en, price: type_list[i].price, isActive: false})
                  break
          case 3 : this.choice.push({id: type_list[i].id,name: type_list[i].name_cn, price: type_list[i].price, isActive: false})
                  break
        }
      }
    },
    addCNT () {
      this.stopSound()
      this.Soundclick()
      this.cnt += 1
      this.total_bill()
    },
    rmCNT () {
      this.stopSound()
      this.Soundclick()
      if(this.cnt > 1){
        this.cnt -= 1
      }else{
        this.cnt = 1
      }
      this.total_bill()
    },
    total_bill () {
      this.netAmount = this.cnt * this.price
    },
    select_type (inD) {
      for( var r = 0; r < this.choice.length; r++){
        if(r == inD){
          this.choice[r].isActive = true
          this.price = this.choice[r].price
          this.choice_name = this.choice[r].name
          this.choice_ID = this.choice[r].id
        }else{
          this.choice[r].isActive = false
        }
      }
      this.total_bill()
    },
    send_payment () {
      this.stopSound()
      this.Soundclick()
      $("#payment-onhand").addClass("is-active")
      this.payload = {
                      total: this.netAmount,
                      type: 'coffee',
                      sale_subs: [{
                                    line: 0,
                                    item_id: this.itemID,
                                    item_name: this.itemname,
                                    qty: this.cnt,
                                    price_id: this.choice_ID,
                                    price_name: this.choice_name,
                                    price: this.price,
                                    unit: this.unit
                                  }]
                      }
      this.test_payment(this.payload)
     
      // var login = {companyCode: "np", appCode: "NpInventory", saleCode: '56163', password: '56163'}
      // api.sendOrderAX (this.payload, 
      // (result) => {
      //   // this.$socket.sendObj({Device:"host",type:"request",command:"onhand"})    
      //   console.log(result)
      // }, (response) => {
      //   console.log(JSON.stringify(response))
      //   alert("API sale error"+ response)
      // })
    },
    bill_netAmount (payment) { 
      console.log("billAmount "+this.payload.total)
      this.netAmount = this.payload.total - payment
      this.netPayment = payment
      
      if(this.netAmount <= 0){
        this.PMC = 'bt-cancel disabled' 
        if(this.netAmount >= 0){          
          this.TPsuccess = 'กรุณารอรับใบเสร็จรับเงิน'
        }else{
          this.TPsuccess = 'กรุณารอรับใบเสร็จรับเงินและเงินทอน '+ Math.abs(this.netAmount) + ' บาท'
        }
        this.show_cm()
        console.log('ทอนเงิน '+Math.abs(this.netAmount)+', netPayment '+this.netPayment)
      }else{
        this.PMC = 'bt-cancel disabled'
        console.log('เพิ่มเงิน '+this.netAmount+', netPayment '+this.netPayment)
        return false
      }

    },
    show_cm () {
          $('#payment-onhand').removeClass('is-active')
          $('#payment-success').addClass('is-active')
    },
    test_payment (payload) {
      var payment = 20
      var r = Math.ceil(payload.total/payment)
      var netPayment = 0
      var p = 0;
      var test = setInterval(function() {
        netPayment += payment 
        if(r==p){
          this.event_sk({command: 'print', data: 'success'})
          clearInterval(test)
        }else{          
          this.event_sk({command: 'onhand', data: netPayment})
        }        
        p++;
      }.bind(this), 3000)
    },
    payment_sucess (data) {
      if(data=='success'){                
        this.netAmount = 0
        this.netPayment = 0
        this.payload = []
        $('#payment-success').removeClass('is-active')
        this.$router.push('/')
      }
    },
    close_modal () {
      var cancel = {device:"host",type:"request",command:"cancel"}
      this.$socket.sendObj(cancel)
      $(".modal").removeClass("is-active")
    },
    back_item () {
      this.$router.push({ name: 'items', params: { menu: this.oldMenu, langID: this.langID }})
    },
    Format_money (int) {
      return numeral(int).format('0,0')
    },
    websocket_onmessage() {
      this.$options.sockets.onmessage = (skResult) =>
      this.event_sk(JSON.parse(skResult.data))
    },
    event_sk (data) {
      console.log(data)
      switch(data.command){
          case 'onhand' : this.bill_netAmount(data.data)
                          break
          case 'print'  : this.payment_sucess(data.data)
                          break
        }
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
    var items = this.$route.params.items
    this.langID = this.$route.params.langID
    this.oldMenu = this.$route.params.oldMenu
    this.websocket_onmessage()
    if (items) { 
      this.showDetail(items, this.langID)
      this.select_type(0)
    } else { 
      this.$router.push('/') 
    }
  }
}
