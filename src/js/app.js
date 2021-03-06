import moment from 'moment'
import $ from 'jquery'

export default {
  name: 'app',
  data () {
    return {
      time: '',
      data_socket: {},
      sale: 0,
      file1: require('../assets/sound/click.mp3'),
      screen: 'width ' + screen.availWidth + ', height '+ screen.availHeight
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
      this.stopSound()
      this.Soundclick()
      document.getElementById('PasswordKey').value += int.toString()
    },
    removeKey () {
      this.stopSound()
      this.Soundclick()
      var key = document.getElementById('PasswordKey').value
      document.getElementById('PasswordKey').value = key.substring(key.length-1,0)
    },
    gotoSetting () {
      this.stopSound()
      this.Soundclick()
      this.$router.push('/setting')
      this.closeModal()
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
    setInterval(function() {
      this.time = moment(new Date()).format('h:mm:ss')
    }.bind(this), 1000)
    this.websocket_onmessage()
  }
}
