var express = require('express');
var socket = require('socket.io');
var app = express();
app.use(express.static(__dirname));

var server = app.listen(5005,function(){
	console.log("Server is up!");
});

var io = socket(server);

io.sockets.on('connection', function(socket){
	socket.on('send', function(data){
		console.log(data);
		io.sockets.emit('send1',data);
	});
	
});