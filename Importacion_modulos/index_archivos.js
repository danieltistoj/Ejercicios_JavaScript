const fs = require('fs');
//para crear archivos, ecribimos donde lo queremos y el nombre. Y como segundo parametro el contenido 
//tambien tiene tercer parametro un call back, que es una funcion que se ejecuta despues de que termina el proceso anterior
//la funcion call back recibe un error, para ver si ha acurrido el error

//Esto es codigo asincrono
fs.writeFile('./texto.txt','linea uno',function(err){
    if(err){
        console.log(err);
    }  
    else{
        console.log("Archivo creado");
    }
});
console.log("Ultima linea");

