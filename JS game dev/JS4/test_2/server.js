const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World');
  res.sendFile(__dirname + '/start.html');
});
/*
app.get('/', function(req,res){
  res.sendFile(__dirname + '/start.html');
});
*/
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});