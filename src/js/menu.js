import api from '../services/axios.js'

export default {
  name: 'menu',
  data () {
    return {
      title: 'เมนูหลัก',
      menu_datas: [],
      menu_list: [],
      language: '',
      langID: 0,
    }
  },
  methods: {
    getApi (langID) {
      api.getMenuAX((data) => {
        this.menu_datas = data
        this.langID = langID
        this.selectMenu(langID)
      }, (response) => {
        console.log(JSON.stringify(response))
      })
    },
    selectMenu (langID) {
      this.langID = langID      
      this.select_lang(langID)  
      this.set_lang(langID)  
      if (this.menu_datas != '') {
        this.menu_list = []
        for (var i = 0; i < this.menu_datas.length; i++) {
          if (this.menu_datas[i].lang_id == langID) {
            var menus = this.menu_datas[i]
            for (var r = 0; r < menus.menus.length; r++) {
              this.menu_list.push({ id: r, menu_code: menus.menus[r].Id, name: menus.menus[r].name, img: require('../assets/menu/' + menus.menus[r].image) })
            }
          }
        }     
      } else {
        this.getApi(1)
      }
    },
    sayLang (lang, text) {
      setTimeout(function() {
        responsiveVoice.setDefaultVoice(lang)
        responsiveVoice.speak(text)
      }, 300)
    },
    select_lang (langID) {
      var x = document.getElementsByClassName("lang");
        for (var i = 0; i < x.length; i++) {
          if (langID - 1 == i) {
            x[i].style.backgroundColor = "#f00";
          } else {
            x[i].style.backgroundColor = "#fff";
          }
        }
    },
    set_lang (langID) {
      switch (langID) {
        case 1:
          this.sayLang('Thai Female', 'ภาษาไทย')
          this.language = 'กรุณาเลือกภาษา'
          break
        case 2:
          this.sayLang('UK English Female', 'English language')
          this.language = 'Please select a language'
          break
        case 3:
          this.sayLang('Chinese Female', '中國')
          this.language = '选择你的语言'
          break
      }
    },
    getMenuToitem (menu) {
      this.$router.push({ name: "items", params: { menu: menu, langID: this.langID } })
    }
  },
  mounted () {
    this.selectMenu(1)
  }
}
