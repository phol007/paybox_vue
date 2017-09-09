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
			this.$router.push(path)
		},
		backHome () {
			this.$router.push('/')
		}
	}
}