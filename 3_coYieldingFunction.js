var co = require('co');
var wait = require('co-wait');

// co(function *(){
// 	console.log("Started");
// 	console.time("sequence\t");

// 	yield wait(1000);
// 	yield wait(2000);
// 	yield wait(3000);

// 	console.timeEnd("sequence\t");
// 	console.log("Completed");
// })();

co(function *(){
	console.log("Started");
	var a = wait(1000);
	var b = wait(2000);
	var c = wait(3000);

	console.time("parallell\t");

	var res = yield [a, b, c];

	console.timeEnd("parallell\t");
	console.log("Completed");
})();