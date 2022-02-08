//Este modulo utiliza internamente el modulo http 
const express = require('express');

//al ejecutar express nos devuelve un objeto que es mi servidor 
const app = express();
app.get('/',(req,res)=>{
    //como respuesta
    res.send("Hola mundo");
});
app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});
