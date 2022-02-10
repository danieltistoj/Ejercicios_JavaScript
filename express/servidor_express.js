//Este modulo utiliza internamente el modulo http 
const express = require('express');

//al ejecutar express nos devuelve un objeto que es mi servidor 
const app = express();
//morgan
const morgan = require('morgan');
//Setting
//nombre variable, valor variable
app.set('appName','Daniel Express Tutorial');
app.set('port',5000);
app.set('view engine','ejs');
//Middlewares
//req: es la informacion del navegador
function logger(req,res,next){
    console.log(`Route Receives: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();

}
app.use(express.json());
//app.use(logger);
app.use(morgan('dev'));

//Routes


//no es un metodo http. Es una funcion de express que para toda ruta se puede hacer algo
/*
app.all('/usuario',(req,res,next)=>{
    console.log('Por aqui paso');
    //res.send('Terminado');
    next();
});
*/
//get es para devolver cosas

/*
app.get('/',(req,res)=>{
    //como respuesta
    res.send("Hola mundo");
});
*/
app.get('/',(req,res)=>{
    const data = [{name: 'jose'},{name: 'juan'},{name:'pedro'}]
    res.render('index.ejs',{personas:data});
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
app.use(express.static('public'));

app.listen(app.get('port'),()=>{
    console.log(app.get('appName'));
    console.log("Servidor en el puerto",app.get('port'));
});
