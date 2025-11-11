const animal = require ("./animal");
class perro extends animal{
    hablar(){
        console.log (`soy un perro llamado ${this.nombre} y hago woff!`);
    }
}
module.exports = perro;