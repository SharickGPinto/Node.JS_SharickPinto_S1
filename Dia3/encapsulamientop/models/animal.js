class animal {
    #nombre;
    constructor(nombre) {
        this.#nombre = nombre;
    }
    verificarNombre(entrada) {
        if (entrada != this.#nombre) {
            console.log("no es el nombre del animal");

        }
        else {
            console.log("ese es el nombre del animal");
        }
        
        scrambleNombre(){
            console.log(`aergufpak${this.#nombre}r&TGS)/&F/(HWEMNJ)(#)`);
        }
    }
}

module.exports = animal