module.exports = {
  index: {
		method: 'POST',
		path: '/test',
		handler: function (request, reply) {
      console.log(555)
			reply({test: 123})
		}
  }
}