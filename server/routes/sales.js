module.exports = {
  index: {
		method: 'GET',
		path: '/sales/enter',
		handler: function (request, reply) {
			reply.file('sales/enter.html')
		}
  }
}