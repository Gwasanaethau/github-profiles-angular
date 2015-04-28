var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(3000, function() {
  console.log('Server listening on port 3000. ;)');
});

app.get('/', function(request, response) {
  response.sendfile('/index.html', { root : __dirname });
});

module.exports = server;
