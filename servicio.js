//pasos para consumir datos de un api con js puro


//1. pa donde vas ome
// la URI del SERVICIO

const URI="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=us"

//2. Necesito permisos
const TOKEN="Bearer BQCi0_zw6HKFOk20rJ_LTrE8Vg7No-5az2lQ2VEyWfiRGucSQaMH6_xQiABK17wVEbascSald-L0emcFzLpPYHZjdu28Vi1T9XRTjUqP-AQ4YgAG7gFLkcDUa_lPi7MZLymDN7V0oq3B7gG6u1WFK3jvlsogp9ECbP4"

//3. configuro metodo, cabeceras y cuerpo de la peticion
let parametrosPeticion={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//4. ARRANCO PAL RESTAURANTE
//CONSUMO EL API
//LE TOCOLA PUERTA AL SERVIDOR
fetch(URI,parametrosPeticion)
.then(respuesta=>{
    return respuesta.json()
}) 
.then(respuestaJSON=>{
    console.log(respuestaJSON)
    let canciones = document.getElementById("canciones")
    
    respuestaJSON.tracks.forEach(function(cansion){
        let tarjeta = document.createElement("div")
        let cuerpo = document.createElement("div")
        cuerpo.classList.add("card-body")
        tarjeta.classList.add("bg-dark")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("p-3")
        imagen.classList.add("h-25")
        imagen.classList.add("w-25")
        imagen.src = cansion.album.images[0].url        


        let nombre = document.createElement("h4")
        nombre.textContent=cansion.name
        nombre.classList.add("fw-bold")        
        nombre.classList.add("mx-3")
        

        let audio = document.createElement("audio")
        audio.src=cansion.preview_url
        audio.controls=true
        

        tarjeta.appendChild(imagen)
        cuerpo.appendChild(nombre)        
        cuerpo.appendChild(audio)
        tarjeta.appendChild(cuerpo)
        canciones.appendChild(tarjeta)

      
    })
})
.catch(respuestaERORR=>{
    console.log(respuestaERORR)
})

