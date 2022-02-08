//modulo nos sirve para crear un servidor 
const http = require('http');

const server = http.createServer(function(req,res){
    res.status = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello world');
});

server.listen(3000,function(){
    console.log('Servidor en el puerto 3000');
});

