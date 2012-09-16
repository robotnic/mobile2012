/*
kleiner test mit node.js
*/


var http = require('http');
var i=0;
http.createServer(function (req, res) {
  
   res.writeHead(200, {
                         'Content-Type': 'text/plain',
                         'Access-Control-Allow-Origin' : "*"
   })
   res.write("Hello ");
   res.end('World: \n'+i++);


 
}).listen(process.env.PORT);
console.log('Server running');