function saludar(nombre){
    return `¡Hola ${nombre}!`
  //  return "¡Hola "+ nombre + "!"

}

function saludar(nombre = "Carlos"){
    return `¡Hola ${nombre}!`
  //  return "¡Hola "+ nombre + "!"

}


saludar("Carlos")
saludar("Pepe")
saludar("Maria")
