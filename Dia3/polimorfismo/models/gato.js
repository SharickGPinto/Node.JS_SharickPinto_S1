const animal = require ("./animal");
class gato extends animal{
    hablar(){
        console.log (`soy un gato llamado ${this.nombre} y hago miau!`);
    }
}
module.exports = gato;