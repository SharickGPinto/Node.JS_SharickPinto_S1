
/*En esta parte se va a importar todas las clases 
y constantes que se van a usar requiere() carga el modulo sih.js
este modulo esporta objetos con muchas propiedades 
(Es como queremos recibir el formato)
*/

const {
    nombre, direccion, paciente,
} = require('./sih.js');

const {
    rango, doctor, titulo, personal 
} = require('./sih.js');

const {
    departamento, pabellon, hospital,
} = require('./sih.js');



const titulo = (s) => console.log (`\n=== ${s} ===`);

/*Aca vamos a crear hospital, departamentos y pabellones */

const hospital1 = new hospital({nombre: 'hospital central'});
const depCardio = hospital1.agregarDepartamento(new departamento({nombre: 'cardioloía'}));
const depTI = hospital1.agregarDepartamento(new departamento( {nombre: 'tecnologia'}));


const pabCardio = hospital1.agregarPabellon(new pabellon ({nombre:'pabellon cardio', capacidad: '2', especialidad: 'CARDIOLOGIA'}));
const pabGeneral = hospital1.agregarPabellon(new pabellon({nombre: 'pabellon general', capacidad: '4'}));

//Aca vamos 