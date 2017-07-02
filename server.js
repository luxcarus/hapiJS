'use strict';

const Hapi = require('hapi'),
			Good = require('good'),
			Path = require('path');

const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'public')
			}
		}
	}
});
server.connection({ port: 12000, host: 'localhost' });

// server.register([require('vision'), require('inert')], (err) => {
server.register(require('inert'), (err) => {
	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/signin',
		handler: function (request, reply) {
			reply.file('gate/signin.html');
		}
	});
	server.route({
		method: 'GET',
		path: '/dashboard/{file*}',
		handler: {
			directory: { 
				path: 'dashboard',
				listing: false
			}
		}
	});




	server.route({  
		method: 'GET',
		path: '/utils/{file*}',
		handler: {
			directory: { 
				path: 'utils',
				listing: false
			}
		}
	});

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

	if (err) {
		throw err; // something bad happened loading the plugin
	}

	server.start((err) => {
		if (err) {
				throw err;
		}
		server.log('info', 'Server running at: ' + server.info.uri);
	});

});











/*
basci
*/
// server.register(require('inert'), (err) => {
//     if (err) {
//         throw err;
//     }
//     server.route({
//         method: 'GET',
//         path: '/hello',
//         handler: function (request, reply) {
//             reply.file('./public/hello.html');
//         }
//     });
//     server.start((err) => {
//         if (err) {
//             throw err;
//         }
//         console.log(`Server running at: ${server.info.uri}`);
//     });
// });