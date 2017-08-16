import moment from 'moment'

export default {
  name: 'app',
  data() {
    return {
      time: '',
      data_socket: {}
    }
  },
  methods: {
    websocket_onmessage() {
      this.$options.sockets.onmessage = (skResult) =>
        console.log(skResult.data)
    }
  },
  mounted() {
    setInterval(function() {
      this.time = moment(new Date()).format('h:mm:ss')
    }.bind(this), 1000)
    this.websocket_onmessage()
  }
}
