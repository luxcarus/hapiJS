module.exports = {
  index: {
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('gate/signin.html')
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