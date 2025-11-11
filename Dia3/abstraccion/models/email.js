class email{
    constructor(destinatario){
        this.destinatario = destinatario;
    }
    enviarCorreo(mensaje){
        console.log (`enviadno correo a ${this.destinatario} con mensaje`);
    }
}
module.exports=email; 