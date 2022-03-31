async function generarToken(){
    let URI ="https://accounts.spotify.com/api/token"
   
   
    let client_id="client_id=4b02c1cc3d5b48c089affd3ede5796a8"
    let client_secret="client_secret=9f9a63746a1b4b29a26af65c8bef1dc6"
    let grant_type="grant_type=client_credentials"
    
    

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`        
    }

    fetch (URI,parametros)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
        console.log(respuesta.token_type)
        console.log(respuesta.access_token)  
        let token=`${token_type}&${access_token}`
        console.log(token)        
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