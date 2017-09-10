import numeral from 'numeral'

export default {
	name: 'setting',
	data () {
		return {
			titlePage: 'Setting Paybox'
		}
	},
	beforeDestroy () {
	  return {
	    sockets: null
	  }
	},
	methods: {
		goto (path) {
			this.stopSound()
			this.Soundclick()
			this.$router.push(path)
		},
		backHome () {
			this.$router.push('/')
		},
		Soundclick () {
			var audio = document.getElementById("audio")
       		audio.play()
		},
	    stopSound () {
	      var audio = document.getElementById("audio")
	          audio.currentTime = 0
	    }
	}
}