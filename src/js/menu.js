import api from '../services/axios.js'

export default {
  name: 'menu',
  data() {
    return {
      title: 'เมนูหลัก',
      menu_datas: [],
      menu_list: [],
      language: '',
      langID: 0,
    }
  },
  methods: {
    getApi(langID) {
      api.getMenuAX((data) => {
        this.menu_datas = data
        this.langID = langID
        this.selectMenu(langID)
      }, (response) => {
        console.log(JSON.stringify(response))
      })
    },
    selectMenu(langID) {
      this.langID = langID
      if (this.menu_datas != '') {
        this.menu_list = []
        for (var i = 0; i < this.menu_datas.length; i++) {
          if (this.menu_datas[i].lang_id == langID) {
            var menus = this.menu_datas[i]
            for (var r = 0; r < menus.menus.length; r++) {
              this.menu_list.push({ id: r, menu_code: menus.menus[r].Id, name: menus.menus[r].name, img: 'http://localhost:8888/public/img/' + menus.menus[r].image })
            }
          }
        }
        switch (langID) {
          case 1:
            this.language = 'กรุณาเลือกภาษา'
            break;
          case 2:
            this.language = 'Please select a language'
            break;
          case 3:
            this.language = '选择你的语言'
            break;
        }
        var x = document.getElementsByClassName("lang");
        for (i = 0; i < x.length; i++) {
          if (langID - 1 == i) {
            x[i].style.backgroundColor = "#f00";
          } else {
            x[i].style.backgroundColor = "#fff";
          }
        }
      } else {
        this.getApi(1)
      }
    },
    getMenuToitem (menu){
      console.log(JSON.stringify(menu))
      this.$router.push({ name: "items", params: {menu: menu, langID: this.langID}})
    }
  },
  mounted() {
    this.selectMenu(1)
  }
}
