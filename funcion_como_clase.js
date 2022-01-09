
class Inventario{
    constructor(nombre){
        this.nombre = nombre;
        this.articulo = [];

    }
    getNombre(){
        return this.nombre;
        
    }
    add(articulo,cantidad){
        this.articulos[articulo]=cantidad;
    }
    cantidad(){
        return this.articulos[this.articulo];
    }
}



function Inventario(nombre){
    this.nombre = nombre;
    this.articulos = [];

}
Inventario.prototy.getNombre = function(){ 
    return this.nombre

}

Inventario.prototy.add = function(articulo, cantidad){
    this.articulo[articulo] = cantidad;
}
Inventario.prototy.cantidad = function(articulo){
    return this.articulo[articulo];
}
let libros = new Inventario('libros');

libros.getNombre(); //libros
libros.add("aprendiendo javascript",5);
libros.cantidad("aprendiendo javascript");