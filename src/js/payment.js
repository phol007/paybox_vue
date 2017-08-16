import api from '../services/axios.js'
import numeral from 'numeral'
import $ from 'jquery'

export default {
  name: 'payment',
  data () {
    return {
      itemname: '',
      img: '',
      choice: [],
      netAmount: 0,
      netPayment: 0,
      cnt: 1,
      price: 0,
      oldMenu: [],
      langID: 0,
      PMC: 'bt-cancel'
    }
  },
  methods: {
    showDetail (item, lang) {
      this.itemname = item.name
      this.img = item.img
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
      this.cnt += 1
      this.total_bill()
    },
    rmCNT () {
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
        }else{
          this.choice[r].isActive = false
        }
      }
      this.total_bill()
    },
    send_payment () {
      $(".modal").addClass("is-active")
      this.$socket.sendObj({Device:"host",type:"request",command:"onhand"})
    },
    bill_netAmount (payment) {
      this.netAmount -= payment
      this.netPayment += payment
      if(this.netPayment!=0){
        this.PMC = 'bt-cancel disabled'
      }
    },
    close_modal () {
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
      switch(data.command){
          case 'onhand' : this.bill_netAmount(data.data)
                          break
        }
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
