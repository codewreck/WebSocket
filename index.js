// express initializes app to be a function handler that you can supply to an http server
var app = require('express')();
var http = require('http').Server(app);

// we define a route handler / that get called when we hit our website home.
// app.get('/', function(request, response){
//   resonse.sendFile('<h1>hello world</h1>');
// });

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
