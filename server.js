// //import http method
// var http = require ('http');

// onRequest = function(req, res) {
// 	res.writeHead(200, {
// 		'Connection': 'close',
// 		'Content-Type': 'text/html'
// 	});
// 	res.end('<h1> Hello world</h1>');
// }

// http.createServer(onRequest).listen(12200);

var http = require('http')

var messages = [
	{message: 'Thad has a sweet hat!'},
	{message: 'Dont drink and drive!'}
] //in memory (not database)

// var onRequest = function (req, res) {
// 	console.log(req.method);
// 	console.log('serving...');
// 	res.writeHead(200, {
// 		// 'Content-Type': 'text/html'
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*' 
//		//"*" means allow anything, generally a bad practice in 
//		//real life

// 	});

	// res.end('<h1> Hello World </h1>');
// 	res.end(JSON.stringify(messages));
// }
var server = http.createServer(function (req, res) {
	
  if (req.method == 'POST') {
   var postData = '';
   req.on('data', function(chunk) {
    postData += chunk.toString();
   });
   req.on('end', function() {
    var msg = JSON.parse(postData)
    messages.push(msg)
   });

  } else if (req.method === 'GET') {
  	res.writeHead(201, {
		// 'Content-Type': 'text/html'
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*' 
		//"*" means allow anything, generally a bad practice in 
		//real life

	});

	// res.end('<h1> Hello World </h1>');
	res.end(JSON.stringify(messages))
  }
});
server.listen(12200);