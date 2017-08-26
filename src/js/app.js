import moment from 'moment'

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
    }
  },
  mounted() {
    setInterval(function() {
      this.time = moment(new Date()).format('h:mm:ss')
    }.bind(this), 1000)
    this.websocket_onmessage()
  }
}
