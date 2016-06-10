const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var dataServer = function(req, res) {
  res.writeHead(200, 'Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');
  res.end();
};

var serverOn = function(port, hostname) {
  console.log(`Server running at http://${hostname}:${port}/`);
}

var server = http.createServer(dataServer);
server.listen(port, serverOn(port, hostname));