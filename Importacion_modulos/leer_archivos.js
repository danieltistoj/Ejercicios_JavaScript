const fs = require('fs');

fs.readFile('./texto.txt',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        //toString es para convertirlo en una string
        console.log(data.toString());
    }
})