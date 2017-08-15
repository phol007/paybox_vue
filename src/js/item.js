import api from '../services/axios.js'
export default {
  name: 'items',
  data() {
    return {
      item_datas: [],
      item_lists: [],
      langID: 0
    }
  },
  methods: {
    getApi(langID, menuID) {
      api.getItemAX(menuID, (data) => {
        this.item_datas = data
        this.langID = langID
        this.selectMenu(langID)
      }, (response) => {
        console.log(JSON.stringify(response))
      })
    },
    selectMenu(langID) {
      this.langID = langID
      if (this.item_datas != '') {
        this.item_list = []
        for (var i = 0; i < this.item_datas.length; i++) {
          if (this.item_datas[i].lang_id == langID) {
            var items = this.item_datas[i]
            if (!items.items) {
              alert('สินค้านี้ไม่มีข้อมูล กรุณาตรวจสอบฐานข้อมูลระบบ')
              this.$router.push('/')
            } else {
              for (var r = 0; r < items.items.length; r++) {
                this.item_lists.push({ id: r, item_code: items.items[r].Id, name: items.items[r].name, img: this.image(items.items[r].image) })
              }
            }

          }
        }
      } else {
        this.getApi(1)
      }
    },
    send () {
      this.$router.push('/')
      this.$socket.sendObj({Device:"host",type:"request",command:"onhand"})
    },
    image (name) {
      return require('../assets/item/'+name)
    }
  },
  mounted () {
    this.item_datas = []
    var data = this.$route.params.menu
    var lang = this.$route.params.langID
    if(data){
     this.getApi(lang, data.menu_code)
    }else{
      this.$router.push('/')
    }
  }
}
