import {
    consumirAPI
} from "./servicio2.js"
import {
    imprimirCanciones
} from "./canciones.js"


let botoncoldplay = document.getElementById("coldplay")
console.log(botoncoldplay)
botoncoldplay.addEventListener("click", async function (event) {


    let canciones = await consumirAPI("https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=us")
    imprimirCanciones(canciones)

    console.log(canciones)


})

let botonightwish = document.getElementById("nigthwish")
botonightwish.addEventListener("click", async function (event) {

    let canciones = await consumirAPI("https://api.spotify.com/v1/artists/2NPduAUeLVsfIauhRwuft1/top-tracks?market=us")
    imprimirCanciones(canciones)


})

let botontrivium = document.getElementById("trivium")
botontrivium.addEventListener("click",async function (event) {

    let canciones = await consumirAPI("https://api.spotify.com/v1/artists/278ZYwGhdK6QTzE3MFePnP/top-tracks?market=us")
    imprimirCanciones(canciones)

})

let botonmaiden = document.getElementById("maiden")
botonmaiden.addEventListener("click",async function (event) {

    let canciones = await consumirAPI("https://api.spotify.com/v1/artists/6mdiAmATAx73kdxrNrnlao/top-tracks?market=us")
    imprimirCanciones(canciones)

})

let botonff = document.getElementById("ff")
botonff.addEventListener("click",async function (event) {

    let canciones = await consumirAPI("https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD/top-tracks?market=us")
    imprimirCanciones(canciones)

})