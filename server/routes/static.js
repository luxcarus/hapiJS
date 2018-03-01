// const server = require('../index.js')
module.exports = {
  static: {
		method: 'GET',
		path: '/static/{files*}',
		handler: function (request, reply) {
      reply.file(`${request.path.replace('/static/','')}`)
		}
  }
}