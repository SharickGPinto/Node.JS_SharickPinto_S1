/* ######################################
p.o.o programacion oriendad a objetos
############################################### */

const animal = require('./models/animal')

let perro = new animal ("paco");
let perro2 = new animal ("firulais")
console.log(perro.nombre);