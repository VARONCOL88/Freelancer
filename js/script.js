const heading = document.querySelector( '.contenido-hero h2')
console.log(heading);
heading.textContent = 'nuevo titulo del DOM'

const enlaces = document.querySelectorAll('.nav-principal a')
console.log(enlaces[0]);
enlaces[1].textContent = 'modificaco DOM';



/// Eventos

// const btnEnviar = document.querySelector('.contenido-hero .boton')
// console.log(btnEnviar);
// btnEnviar.addEventListener('click', function(e) {
//     console.log(e);
//     evento.preventDefault();
//     console.log('enviando el contacto');
// });


// eventos de los input y textarea

const datos = {
    nombre: '',
    correo: '',
    mensaje: ''
}

//seleccionar elementos y asociar  un evento
// declaracion de variables
const name1 = document.querySelector('#nombre');
const email = document.querySelector('#correo');
const messager = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


// declaracion de los eventos
name1.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
messager.addEventListener('input', leerTexto);


//el vento submit es el indicado para los formularios
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('enviando formulario');
})

function leerTexto(e) {

    datos[e.target.id] = e.target.value;    

    console.log(e.target);
    console.log(datos);


}




