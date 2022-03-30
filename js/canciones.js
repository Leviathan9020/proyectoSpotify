export function imprimirCanciones(respuestaJSON){
   let canciones=document.getElementById("populares")
   canciones.innerHTML=""

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
        nombre.classList.add("text-light")
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
}

