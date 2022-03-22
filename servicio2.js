import {URI, PARAMATROS_PETICION} from "./constantes.js"


async function consumirAPI(){
    let respuesta=await fetch(URI,PARAMATROS_PETICION)
    let canciones=respuesta.json()
    return(canciones)
}


export let resultado=await consumirAPI()

