//Este modulo utiliza internamente el modulo http 
const express = require('express');

//al ejecutar express nos devuelve un objeto que es mi servidor 
const app = express();
//get es para devolver cosas
app.get('/',(req,res)=>{
    //como respuesta
    res.send("Hola mundo");
});

app.get('/usuario',(req,res)=>{
    //res.send('Juan Perez');
    //podemos devolver objetos de javascript
    res.json({
        nombre: 'Juan',
        apellido: 'Perez'

    });
});

app.post('/usuario',(req,res)=>{
    //recibe los datos que me esta enviando el cliente
    console.log(req.body);
    res.send('Usuario Post recibido')
});

//post para resivir un determinado dato para devolver algo
//si queremos crear otra ruta
app.post('/about',(req,res)=>{
    res.send('About me');
})
//put tomar los datos que me da el frontend para actualizarlos 
//si queremos crear otra ruta
app.put('/contacto',(req,res)=>{
    res.send('Fromulario de contacto');
})
//delete toma la peticion y elimina un dato dentro del servidor y dar una respuesta
app.delete('/test',(req,res)=>{
    res.send('<h1>TEST</h1>');
})

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});
