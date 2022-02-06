const express = require('express');
const colors = require('colors');
//al ejecutarlo me crea un servidor 
const server = express();
//cuando pidan un / respondemos con una funcion
server.get('/',function(req,res){
    res.send('<h1>Hola mundo con express y node js</h1>');
    res.end();

})
//puerto, cunado escuche
server.listen(3000,function(){
    console.log('Server port 3000'.red);

});

