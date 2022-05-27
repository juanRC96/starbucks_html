function mostrarDireccion() {
    let nombreCiudad = document.getElementById('ciudad').value;
    let direccion;

    if (nombreCiudad=="Buenos Aires" || nombreCiudad=="buenos aires" || nombreCiudad=="capital") {
      direccion="Olga Cossettini 340";
    }
    else if(nombreCiudad=="Rosario"|| nombreCiudad=="rosario"){
      direccion = "Bv. Oroño 786";
    }
    else if(nombreCiudad=="Cordoba" || nombreCiudad=="cordoba" || nombreCiudad=="córdoba" || nombreCiudad=="Córdoba"){
      direccion = "Av. Colón 608";
    }
    else{
      direccion = "No encontramos en tu localidad"
    }
    return document.getElementById('nombre-ciudad').innerHTML = direccion;
  }
