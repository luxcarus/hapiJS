const Path = require('path')
module.exports = {
  index: {
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('gate/signin.html')
			// reply.file('/')
			// reply('hello world ~~~ *')
			// console.log(Path.join(__dirname, 'gate/signin.html'))
			// reply.file(Path.join(__dirname, 'gate/signin.html'))
		}
  },
  signin: {
		method: 'GET',
		path: '/signin',
		handler: function (request, reply) {
			reply.file('gate/signin.html')
		}
	} 
}