import api from '../services/axios.js'
export default {
  name: 'items',
  data() {
    return {
      item_datas: [],
      item_lists: [],
      langID: 0,
      old_menu: []
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
                try {
                  this.item_lists.push({ id: r, item_code: items.items[r].Id, name: items.items[r].name, img: this.image(items.items[r].image), type_list: items.items[r].prices })
                } catch (e) { 
                  this.item_lists.push({ id: r, item_code: items.items[r].Id, name: items.items[r].name, img: this.image('noItem.gif'), type_list: items.items[r].prices })
                  console.log(e) 
                }                
              }
            }
          }
        }
      } else {
        this.getApi(1)
      }
    },
    send (items) {
      this.$router.push({ name: "payment", params: { items: items, langID: this.langID, oldMenu: this.old_menu } })
    },
    image (name) {
      return require('../assets/item/'+name)
    },
    backHome () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.item_datas = []
    this.old_menu = this.$route.params.menu
    var lang = this.$route.params.langID
    if(this.old_menu){
     this.getApi(lang, this.old_menu.menu_code)
    }else{
      this.$router.push('/')
    }
  }
}
