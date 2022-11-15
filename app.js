let funcionalidadTareas = require('./concesionaria.js');


let accion = process.argv[2];

let primerParametro = process.argv[3];

let segundoParametro = process.argv[4];

switch(accion) {
    
    case 'leerAutos' : console.log(funcionalidadTareas.autos)
        break;

    case 'buscarAuto' : console.log(funcionalidadTareas.buscarAuto(primerParametro))
        break;

    case 'venderAuto' : console.log(funcionalidadTareas.venderAuto(primerParametro))
        break;

    case 'autosParaLaVenta' : console.log(funcionalidadTareas.autosParaLaVenta())
        break;

    case 'autosNuevos' : console.log(funcionalidadTareas.autosNuevos())
        break;

    case 'listaDeVentas' : console.log(funcionalidadTareas.listaDeVentas())
        break;

    case 'totalDeVentas' : console.log(funcionalidadTareas.totalDeVentas())
        break;

    case 'puedeComprar' : console.log(funcionalidadTareas.puedeComprar(primerParametro,segundoParametro))
        break;

    case 'autosQuePuedeComprar' : console.log(funcionalidadTareas.autosQuePuedeComprar(primerParametro))
        break;

    default: console.log('No hay autos');
            break;
}
