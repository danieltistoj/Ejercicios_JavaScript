//Este modulo utiliza internamente el modulo http 
const express = require('express');

//al ejecutar express nos devuelve un objeto que es mi servidor 
const app = express();
app.get('/',(req,res)=>{
    //como respuesta
    res.send("Hola mundo");
});
//si queremos crear otra ruta
app.get('/about',(req,res)=>{
    res.send('About me');
})

//si queremos crear otra ruta
app.get('/contacto',(req,res)=>{
    res.send('Fromulario de contacto');
})

app.get('/test',(req,res)=>{
    res.send('<h1>TEST</h1>');
})

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});
