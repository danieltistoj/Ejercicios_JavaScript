//http arquitectura cliente-servidor 
const http = require('http');
//request = req -> peticion
//response = res -> respuesta
//listen: indica desde que puerto escucha el servidor. Un puerto es un proceso para ejecutar el servidor mientras hace otras cosas
http.createServer(function (req,res){
    //Indicar el contenido
    //El 200 indica un numero de estado, una respuesta para el cliente
    //el numero 200 indica OK, que la respuesta es correcta
    //Luego pasamos el contenido
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola Mundo</h1>');
    //es para terminar la respuesta
    res.end();
}).listen(3000);
