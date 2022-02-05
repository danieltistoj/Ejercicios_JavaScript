//este modulo nos permite obtener informacion del sistema operativo
const os = require("os");
console.log(os.platform());
console.log(os.release());
//en bytes
console.log('Memoria libre: ',os.freemem(),'bytes');
console.log('Memoria Total: ',os.totalmem(),'bytes');

