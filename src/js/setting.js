import numeral from 'numeral'

export default {
	name: 'setting',
	data () {
		return {
			titlePage: 'Setting Paybox'
		}
	},
	methods: {
		goto (path) {
			this.$router.push(path)
		}
	}
}