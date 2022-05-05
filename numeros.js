console.log(25)
console.log(25.5)
console.log(0x1f) //base hexadecimal
console.log(5.4e2) //exponente
console.log(1e10000) // infnito 

let numero = 5
let nuemero = new Number(5)

//pasar un numero a entero siendo string

let entero = parseInt("15")
console.log("Entero",entero)

//pasar el numero de binario a entero
console.log("Binario a entero",parseInt("1111",2))
//pasar de hexadecimal a entero
console.log("Hexadecimal a entero",parseInt("1111",16))
//Para flotante 
console.log("Pasar a flotante:",parseFloat("5e3"))

//Redondear numeros
let n = 2.5678

let redondo = n.toFixed(2)
console.log("Redondeado",redondo)
console.log("Redondeado a entero",n.toFixed(0))

//Representar con exponenciales 

let redondo_exponente = n.toExponential(2)
console.log("Redondeado a exponencial",redondo_exponente)


//Pasar numeros enteros a string 

let numString = (1111).toString(10)
console.log("Entero a String base 10:",numString)
console.log("Numeros a binario",(15).toString(2))
console.log("Numeros a hexadecimal",(15).toString(16))


//Funcion Math
console.log("Numero PI:",Math.PI) //numero Pi
console.log("Numero E",Math.E) //numero E
console.log("Numero aleatorio:",Math.random())//numero aleatorio
console.log("Potencia:",Math.pow(2,6))//potencia
console.log("Potencia forma 2 :",2**6)
Math.min(2,4,6) //devuelve el mas pequeño
Math.max(4,6,2) //devuelve el mas grande 

//Array 


let miArray = [
    {propiedad:"valor"},
    {propiedad:"valor 2"},
    [2,4],
    "Hola"
]

//acceder a valores 
console.log("Array:",miArray[0])
console.log("Array:",miArray[1])
console.log("Array:",miArray[2])
console.log("Array:",miArray[2][0])
console.log("Array:",miArray[2][1])
console.log("Array",miArray[3])

//tamaño 
let size = miArray.length
console.log("Tamaño de array:",size)

//ordenar array
let miArray2 = [3, 6,1,4]
let miArray2Ordenado = miArray2.sort()
console.log("array ordenado:",miArray2)
//Obtener el ultimo elemento
let ultimo = miArray2.pop()
console.log(`Ultimo: ${ultimo} Array actual:${miArray2}`)
//Ingresar un elemento
miArray2.push(2)
console.log("Agregar elemento",miArray2)
miArray2.sort()
//Darle la vuelta
miArray2.reverse()
console.log("Vuelta del array",miArray2 )

//join 
let valor = 3
const template = [
    "<li>",
    valor,
    "</li>"
].join("")

console.log("Elementos unidos:",template)
 //Map
 
 let miArray3 = [2,4,6,8]
 let raices = miArray3.map( Math.sqrt) //que a cada elemento le aplique la raiz
 console.log("Raiz con map",raices)
  //Metodo filter 
let miArray4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//filtrar los que son multiplos de 3
let resultado = miArray4.filter(item => item%3 === 0)
console.log("Resultado de filtracion:",resultado)

//cortar array 

console.log(miArray4.slice(2)) //corta desde la posisicon 2
console.log(miArray4.slice(2,4))//que corte del 2 al 4

//String 

let texto = "javascript"
console.log(texto[2])
console.log(texto.length)
console.log(texto.charCodeAt(2))
console.log(texto.indexOf("string"))
console.log(texto.substring(2,4))//seria como un slice

//transformar un string en array 
const fecha = new Date()
console.log(fecha.toString())
arrayFecha = fecha.toString().split(" ")
console.log(arrayFecha)

//obtener hora
let hora = fecha.toString().split(" ")[4].split(":")[0]
console.log("hora:",hora)
