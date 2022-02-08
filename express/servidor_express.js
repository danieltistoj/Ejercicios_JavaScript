//Este modulo utiliza internamente el modulo http 
const express = require('express');

//al ejecutar express nos devuelve un objeto que es mi servidor 
const app = express();
app.use(express.json());
//no es un metodo http. Es una funcion de express que para toda ruta se puede hacer algo
app.all('/usuario',(req,res,next)=>{
    console.log('Por aqui paso');
    //res.send('Terminado');
    next();
});
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

app.post('/usuario/:id',(req,res)=>{
    //recibe los datos que me esta enviando el cliente
    console.log(req.body)
    console.log(req.params)
    res.send('Usuario Post recibido')
});
//esto es para que express reconozca los json

//post para resivir un determinado dato para devolver algo
//si queremos crear otra ruta
app.post('/about',(req,res)=>{
    res.send('About me');
})
//put tomar los datos que me da el frontend para actualizarlos 
//si queremos crear otra ruta
app.put('/usuario/:id',(req,res)=>{
    console.log(req.body);
    res.send(`Usuario ${req.params.id} actualizado`);
})
//delete toma la peticion y elimina un dato dentro del servidor y dar una respuesta
app.delete('/usuario/:usuarioId',(req,res)=>{
    res.send(`Usuario ${req.params.usuarioId} eliminado`);
})

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});
