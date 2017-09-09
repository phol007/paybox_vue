import moment from 'moment'
import $ from 'jquery'

export default {
  name: 'app',
  data () {
    return {
      time: '',
      data_socket: {},
      sale: 0
    }
  },
  methods: {
    websocket_onmessage() {
      this.$options.sockets.onmessage = (skResult) =>
        this.userTest_sale(JSON.parse(skResult.data))
    },
    userTest_sale (data) {
      switch(data.command){
          case 'print'  : this.sale += 1
                          break
        }
    },
    inputPassword () {
      $('#setting').addClass('is-active')
      document.getElementById('PasswordKey').value = ''
    },
    closeModal () {
      $('#setting').removeClass('is-active')
    },
    addKey (int) {
      document.getElementById('PasswordKey').value += int.toString()
    },
    removeKey () {
      var key = document.getElementById('PasswordKey').value
      document.getElementById('PasswordKey').value = key.substring(key.length-1,0)
    },
    gotoSetting () {
      this.$router.push('/setting')
      this.closeModal
    }
  },
  beforeDestroy () {
    return {
      sockets: null
    }
  },
  mounted() {
    setInterval(function() {
      this.time = moment(new Date()).format('h:mm:ss')
    }.bind(this), 1000)
    this.websocket_onmessage()
  }
}
