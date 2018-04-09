// const path = require('path')
const fs = require('fs')
module.exports = {
  index: {
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('gate/signin.html')
		}
  },
  signin: {
		method: 'POST',
		path: '/signin',
		handler: function (request, reply) {
			console.log(123)
			let {id, passwd, result} = request.payload
			if (id === 'aaa' && passwd === '1234') {
				result = {result: 0, data: {name: 'NamGaNae'}}
			} else {
				result = {result: 1, errCode: 'E0001', errDetail: 'G0001'}
			}
			reply(result)
		}
	}
}