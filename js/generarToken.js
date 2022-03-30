async function generarToken(){
    let URI ="https://accounts.spotify.com/api/token"
   
   
    let client_id="4b02c1cc3d5b48c089affd3ede5796a8"
    let client_secret="9f9a63746a1b4b29a26af65c8bef1dc6"
    let grant_type="client_credentials"

    let parametros={
        method:"POST",
        Headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    }

    fetch (URI,parametros)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })
}

generarToken()

// export const PARAMATROS_PETICION = {
//     method:"GET",
//     headers:{Authorization:TOKEN} 
// }