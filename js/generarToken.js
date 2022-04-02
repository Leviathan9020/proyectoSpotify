 export async function generarToken(){
    let URI ="https://accounts.spotify.com/api/token"


   
   
    let client_id="client_id=4b02c1cc3d5b48c089affd3ede5796a8"
    let client_secret="client_secret=9f9a63746a1b4b29a26af65c8bef1dc6"
    let grant_type="grant_type=client_credentials"
    
    

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`        
    }


   
    let respuesta = await fetch(URI,parametros)
    let token = respuesta.json()
    return token
      
   
    
} 

let token = await generarToken()


export const PARAMATROS_PETICION = {
        method:"GET",
        headers:{Authorization:`${token.token_type} ${token.access_token}`} 
    }
