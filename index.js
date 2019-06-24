'use strict';

process.stdin.setEncoding('utf-8');
var OSinfo = require('./modules/OSinfo');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;

			case '/version': 
				process.stdout.write('node version: ' + process.version + '\n');
				process.exit();
				break;

			case '/language': 
				process.stdout.write('language: ' + process.env.LANG + '\n');
				process.exit();
				break;

			case '/sayhello':
				process.stdout.write('hello!\n');
				break;

			case '/getOSinfo':
				OSinfo.print();
				break;

			default:
				process.stderr.write('Wrong instruction!');
				break;
		}
	}
});