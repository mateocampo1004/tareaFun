'use strict'

let car = {

color:"red",
registration: "dasf1323",
aniofabricacion: 2004,
brand: "BMW"

}

function validaTaxi (car){

    let anioactual= 2023;
    let taxi=anioactual-car.aniofabricacion;
    

    if(taxi<=10){

        return true;
    }else{
        return false;
    }
    
}

let resultado = validaTaxi(car);
alert("La validacion del vehiculo es: "+ resultado);