const http = require('http');

const hostname = 'http://142.47.102.214/';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
	});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
	});
