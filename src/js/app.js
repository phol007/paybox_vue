import moment from 'moment'

export default {
  name: 'app',
  data() {
    return {
      time: ''
    }
  },
  methods: {
  },
  mounted() {
     setInterval(function () {
      this.time = moment(new Date()).format('h:mm:ss')
    }.bind(this), 1000)
  }
}
