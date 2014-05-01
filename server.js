var bodyParser = require('body-parser')
//Important note: 
var express = require('express')

var app = express()
app.use(function (req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*')


	next()
})
app.use(bodyParser())

var messages = [
	{message: 'Thad has a sweet hat!'},
	{message: 'Dont drink and drive!'}
] 


// can create lots of these... is '/' because it is the default location;
app.get('/', function (req, res) {
	console.log('I just did a GET!')
	res.json(messages)
})
app.post('/', function (req, res) {
	var message = req.body
	messages.push(message)
	res.json(messages)
})

app.listen(12200, function (){
	console.log('I am listening...')
})

// var http = require('http')

// var messages = [
// 	{message: 'Thad has a sweet hat!'},
// 	{message: 'Dont drink and drive!'}
// ] /

// var server = http.createServer(function (req, res) {

//   if (req.method == 'POST') {
//    var postData = '';
//    req.on('data', function(chunk) {
//     postData += chunk.toString();
//    });
//    req.on('end', function() {
//     var msg = JSON.parse(postData)
//     messages.push(msg)
//    });

//   } else if (req.method === 'GET') {
//   	res.writeHead(201, {
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*' 

// 	});

// 	res.end(JSON.stringify(messages))
//   }
// });
// server.listen(12200);