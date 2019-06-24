var os = require( 'os' );
var colors = require('colors');

function timeConverter() {
	var uptime = os.uptime();
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime - (hours * 3600)) / 60);
	var seconds = uptime - (hours * 3600) - (minutes * 60);

	if(hours > 0) {
		console.log('Uptime: '.green, hours.toFixed(0), ' hours ' + minutes.toFixed(0), ' minutes ' + seconds.toFixed(0), ' seconds' );
	}else if (minutes > 0 ) {
		console.log('Uptime: '.green, minutes.toFixed(0), ' minutes ' + seconds.toFixed(0), ' seconds');
	}else if (seconds > 0 ) {
		console.log('Uptime: '.green, seconds.toFixed(0), ' seconds');
	}
}

exports.printTime = timeConverter;