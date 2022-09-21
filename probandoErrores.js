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