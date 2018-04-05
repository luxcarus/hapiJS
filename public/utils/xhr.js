export default class XHR {
	constructor () {
		this.host
		this.path
		this.requestPayload
		this.data
		this.store
	}
	get scb () {}
	get ecb () {}
	get tcb () {}
	get handle () {}
	normal () {}
	abnormal () {}
	getErrorMsg () {}
	spin () {}
	despin () {}
	route () {}
	setHost (_) {
		this.level = _
		return this
	}
	setPath (_) {
		this.path = _
		return this
	}
	setData (_) {
		this.data = _
		return this
	}
	setStore (_) {
		this.store = _
		return this
	}
	setRequestPayload (_) {
		this.requestPayload = _
		return this
	}
}
