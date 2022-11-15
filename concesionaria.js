let autos = require("./autos");

/*const persona = {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }

const auto = {
      marca: "Ford",
      modelo : "Fiesta",
      color: "Azul",
      anio: 2019,
      km: 50,
      precio: 150000,
      cuotas: 12,
      patente: "APL123",
      vendido: false
      }*/

let funciones = {

   autos: autos,

   buscarAuto: function (patente){

            for(let i=0;i<=autos.length;i++){

         if(autos[i].patente==patente){

            return autos[i]

         } else {

            return null}}

      },

   venderAuto: function (patente){
      
      let autoParaVender = this.buscarAuto(patente)
      
      autoParaVender.vendido = true;
      
      return autos
   }, 

   autosParaLaVenta: function (){

      let autos = this.autos

      return autos.filter(function (auto) {

          return auto.vendido === false

      })

  },
   
   autosNuevos: function () {
      
      let autosNoVendidos = this.autosParaLaVenta();  
      
      let autosNuevos  = autosNoVendidos.filter(autosNoVendidos => autosNoVendidos.km < 100)
      
      return autosNuevos
   },

   listaDeVentas: function () {
      
      let listado = this.autos;
      
      let listaVendidos = []
      
      for(let i = 0; i<listado.length; i ++){

         if(listado[i].vendido == true) {
            
            listaVendidos.push(listado[i].precio)}

      } return listaVendidos

      },

   totalDeVentas: function () {
      
      let listado = this.listaDeVentas()
      
      let total = listado.reduce((acumulador, numero)=> {return acumulador + numero},0)
      
      return total

      },

   puedeComprar: function(auto, persona){

      if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas )){

          return true

      } else {

          return false
      }
   },

   autosQuePuedeComprar:function (persona){

      let autosDispoibles = this.autosParaLaVenta();

      let autosParaComprar = []

      for(let i = 0; i<autosDispoibles.length; i ++){

         if((autosDispoibles[i].precio<=persona.capacidadDePagoTotal && (autosDispoibles[i].precio/autosDispoibles[i].cuotas)<=persona.capacidadDePagoEnCuotas)){autosParaComprar.push(autosDispoibles[i])}
      
      }return autosParaComprar;
   }
}

module.exports = funciones

