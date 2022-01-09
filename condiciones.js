//Sentencia IF
let operacion = 5+2
if(operacion >=7){
    console.log('Es true');
}else{
    console.log('Es falso')
}


if(operacion >=7){
    console.log('Es true');
}else if(operacion<7 && operacion>2){
    console.log('Esta entre 7 y 2')
}else {
    console.log('Es menor a 2')
}

//Sentencia SWITCH

let operacion = 5+2
switch(operacion){
    case 0:
        console.log("el resultado es 0")
        break;
    case 7:
        console.log("El resultado es 7")
        break;
    default:
        console.log("El resultado no es ni 0 ni 7")
}

