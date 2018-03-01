'use strict';

const Hapi = require('hapi')
const Good = require('good')
const Path = require('path')
const Config = require('./config')
const Routes = require('./routes')

const $debug = Config.debug
const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, '../public')
			}
		}
	}
});
server.connection({port: Config.port, host: 'localhost'});

server.register(require('inert'), (err) => {
	if (err) throw err
	server.log('info', `regist Routes starts`)
	for(let route in Routes) {
		server.log('debug', route)
		server.route(Routes[route]);
	}
	server.log('info', `regist Routes ends`)
});

server.register({
	register: Good,
	options: {
		reporters: {
			console: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{
						response: '*',
						log: '*'
				}]
			}, {
				module: 'good-console'
			}, 'stdout']
		}
	}
}, (err) => {
	if (err) throw err
	server.start((err) => {
		if (err) throw err
		server.log('info', 'Server running at: ' + server.info.uri)
	})
})
module.exports = server