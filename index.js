// express initializes app to be a function handler that you can supply to an http server
var app = require('express')();
var http = require('http').Server(app);


//initialize a new instance of socket.io by passing the http server object
var io = require('socket.io')(http);

// we define a route handler / that get called when we hit our website home.


app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
