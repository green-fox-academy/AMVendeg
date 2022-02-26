
// it works with js

let http = require('http');
let server = http.createServer(function(req, res) {

  console.log('request was made: ' + req.url);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey Pirate!');
});

server.listen(3000, '127.0.0.1');
 console.log('yaaay, the port is listening this port 3000');