import {PARAMATROS_PETICION} from "./generarToken.js"


export async function consumirAPI(URI){
    let respuesta=await fetch(URI,PARAMATROS_PETICION)
    let canciones=respuesta.json()
    return(canciones)
}





