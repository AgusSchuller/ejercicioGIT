let autos = require("./autos");
const concesionaria = {
    autos: autos,

    buscarAuto:function(patente) {
        let found = autos.find(function(auto){return auto.patente == patente;
        })
        if(found === undefined){
            return null
        }
        else{
            return found;
        }
    },
    venderAuto:function(patente){
        let autoAVender = this.buscarAuto(patente);
        if(autoAVender){
           autoAVender.vendido = true;
       }
       return autoAVender;
    },
    autosParaLaVenta:function(){
        let n = this.autos.filter(function(arr){
            return arr.vendido === false;
        })
        return n;
    },
    autosNuevos:function(){
        let x = this.autosParaLaVenta().filter(function(arr){
            return arr.km < 100
        })
        return x;
    },
    listaDeVentas:function(){
        return this.autos.filter( auto => 
            auto.vendido ).map( auto => auto.precio )
    },
    totalDeVentas:function(){
        let total = 0;
        return this.autos.filter( auto => 
            auto.vendido ).reduce( (acum, element) => acum + element.precio, 0)
    },
    puedeComprar:function(auto, persona){
        let cuotasF = auto.precio / auto.cuotas;
        console.log(cuotasF)
        if(cuotasF <= persona.capacidadDePagoEnCuotas && auto.precio <= persona.capacidadDePagoTotal){
            return true;
        }else{
            return false;
        }
    },
    autosQuePuedeComprar : function(persona){return this.autosParaLaVenta().filter( auto => this.puedeComprar(auto, persona));
    }
}