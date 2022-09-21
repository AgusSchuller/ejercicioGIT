<<<<<<< HEAD
let saludo = "Hola Julian";
console.log(saludo);
=======
buscarAuto:function(patente) {
    let found = autos.find(function(auto){return auto.patente == patente;
    })
    if(found === undefined){
        return null
    }
    else{
        return found;
    }
}
>>>>>>> fc953d8f27fcb45e48cf9d633f318d4bde3c8b97
