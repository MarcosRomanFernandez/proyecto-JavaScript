import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let precioElemento = document.getElementById('precio')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')


// // Agregar un evento CLICK a cada enlace
// enlaces.forEach(function (enlace) {
//     enlace.addEventListener('click', funcion(){
//         //REMOVER LA CLASE "acive" de todos los enlaces
//         enlaces.forEach(function (enlace) {
//             enlace.classList.remove('active');
//         });
//         // Agregar la clase 'active' al enlace actual
//         this.classList.add('active')

//         //OBTENER EL CONTENIDO CORRESPONDIENTE SEGÚN EL ENLACES        
//         let contenido = obtenerContenido(this.textContent)

//         //TRAER LA INFORMACION DEL OBJECTO CORRESPONDIENTE A LA ELECCIÓN
//         tituloElemento.innerHTML = contenido.titulo
//         subtituloElemento.innerHTML = contenido.subtitulo
//         parrafoElemento.innerHTML = contenido.parrafo
//     });
// });

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function(){
        //REMOVER LA CLASE "acive" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        // Agregar la clase 'active' al enlace actual
        this.classList.add('active')

        //OBTENER EL CONTENIDO CORRESPONDIENTE SEGÚN EL ENLACES        
        let contenido = obtenerContenido(this.textContent)

        //TRAER LA INFORMACION DEL OBJECTO CORRESPONDIENTE A LA ELECCIÓN
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});


//MOSTRAR EL CONTENIDO EN EL DOM

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}

