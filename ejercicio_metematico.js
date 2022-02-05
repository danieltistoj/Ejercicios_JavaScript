function sumar(x1,x2){
    return x1+x2;
}
function resta(x1,x2){
    return x1-x2;
}
function multiplicar(x1,x2){
    return x1*x2;
}
function dividir(x1,x2){
    if(x2 == 0){
        console.log("No se puede dividir por 0");
    }
    else{
        return x1/x2;
    }
}
console.log(sumar(1,2));
console.log(resta(1,2));
console.log(multiplicar(2,2));
console.log(dividir(1,0));
console.log(dividir(2,3));
