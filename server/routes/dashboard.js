module.exports = {
  index: {
		method: 'GET',
		path: '/dashboard',
		handler: (request, reply) => {
			reply.file('dashboard/index.html')
		}
  }
}