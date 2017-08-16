import api from '../services/axios.js'
export default {
  name: 'payment',
  data () {
    return {
      itemname: '',
      img: '',
      choice: [],
      netAmount: 0,
      cnt: 1,
      price: 0,
      oldMenu: [],
      langID: 0
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
    back_item () {
      this.$router.push({ name: 'items', params: { menu: this.oldMenu, langID: this.langID }})
    }
  },
  mounted () {
    var items = this.$route.params.items
    this.langID = this.$route.params.langID
    this.oldMenu = this.$route.params.oldMenu

    if (items) { 
      this.showDetail(items, this.langID)
      this.select_type(0)
    } else { 
      this.$router.push('/') 
    }
  }
}
