// #########################
// clase base o superclase
// #########################


class animal{
    //ATRIBUTOS
    //NOMBRE
    constructor(nombre){
        this.nombre=nombre;

    }
    //metodos
hablar(){
    console.log (`soy un animal llamado ${this.nombre} que habla!!`);
}
}

module.exports = animal; 