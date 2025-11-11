//##############################
//####SIMULADOR DE gastos######
//#############################

const readlineSync = require('readline-sync');

let gastos = [];
let menu = true;

while (menu) {
    console.clear();
    console.log(` 
    =============================================
            Simulador de gastos Diario
    =============================================
    Seleccione una opción:
    1.Registrar nuevo gastos
    2.Listar gastos
    3.Calcular total de gastos
    4.Generar reporte de gastos
    5.Salir
    =============================================` );

    let opcion = readlineSync.question('Seleccione una opcion')

    if (opcion == "1") {
        let monto = parseFloat(readlineSync.question("Monto del gastos:"));
        
        let categoria = readlineSync.question("Categoría (ej. comida, transporte, entretenimiento, otros)");
        let Descripcion = readlineSync.question("Descripción (opcional)");
        let guardar = readlineSync.question("Ingrese 'S' para guardar o 'N' para cancelar.");
        if (guardar == "S") {
            let nuevogastos = {
                "monto": monto,
                "categoria": categoria,
                "Descripcion": Descripcion,
            };
            gastos.push(nuevogastos);
            console.log("\gastos guardado\n")

        }
        else if (guardar == "N") {
            console.log("NO SE GUARDO NADA");
        } else {
            (console.log("No puso nada bien, mal "));
            break;
        }
    }
    else if (opcion == "2") {
        console.log(`Listar gastos
    =============================================
    Seleccione una opción para filtrar los gastos:

    1.Ver todos los gastos
    2.Filtrar por categoría
    3.Regresar al menú principal
    =============================================` );

    let listar = readlineSync.question("seleccione una opcion");

    if (listar === "1") {
        if (gastos.length === 0)
        {
           console.log(`\nGasto ${i + 1}:\nMonto: $${g.monto}\nCategoría: ${g.categoria}\nDescripción: ${g.Descripcion}\n`);
        } 
        else {
            gastos.forEach ((g, i)=> {
                console.log('`\ngastos ${i + 1}:\nMonto: $${g.monto}\nCategoría: ${g.categoria}\nDescripción: ${g.Descripcion}\n`');
            });
        }

    }else if (listar == "2") {
            let categoriaF = readlineSync.question("Ingrese la categoria que desea filtrar (comida,transporte,entretenimiento,otros)").toLowerCase();
            let encontrados = gastos.filter(g=> g.categoria.toLowerCase() === categoriaF);

            if (encontrados.length > 0) {
                encontrados.forEach((g,i)=> {
                    console.log(`\ngastos ${i + 1}:\nMonto: $${g.monto}\nCategoría: ${g.categoria}\nDescripción: ${g.Descripcion}\n`);
                });
            } else {
                console.log("\n no se encontraro gastos en esa categoria\n")
            }
        }

        else if (opcion === "3"){
            let total = gastos.reduce ((suma, g) => suma + g.monto, 0);
            console.log(`\nEl total de los gastos registrados es: $${total.toFixed(2)}\n`);

        }else if (opcion === "4"){
            console.log("\n reporte de gastos ");
            gastos.forEach ((g, i)=> {
             console.log(`\ngastos ${i + 1}:\nMonto: $${g.monto}\nCategoría: ${g.categoria}\nDescripción: ${g.Descripcion}`);
    });
        } else if (opcion === "5"){
            console.log("\n saliste de el simulador");
            menu = false
        }else {
            console.log("\n opcion no validad, intentar de nuevo");
        }
        if (menu) readlineSync.question("npresione enter para continuar")
    }
}       
        
        
