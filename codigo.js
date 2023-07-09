//Modificacion del titulo
console.log(document)
document.querySelector('h1').textContent = 'Cambio de titulo desde JS'
console.log(document.querySelector('h1'))

let parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1)

let enlace1 = document.querySelector('a[href*="google"]')
console.log(enlace1)
    
let parrafos = document.getElementById('contenido')
console.log(parrafos.childNodes)
console.log(parrafos.children[4].innerText = 'Parrafo Editado en JavaScript')


let titulo = document.getElementById('titulo');
console.log(titulo.classList)
titulo.classList.add('text-danger')

const parrafoNuevo = document.createElement('p')
parrafoNuevo.textContent = "Parrafo Creado en Javascript"
parrafoNuevo.classList.add('text-danger', 'fw-bold')
parrafos.appendChild(parrafoNuevo)

console.log(parrafos.firstChild)
console.log(parrafos.firstElementChild)
console.log(parrafos.lastChild)
console.log(parrafos.lastElementChild)
console.log(parrafos.nextElementSibling)
console.log(parrafos.nextSibling)
console.log(parrafos.parentElement)
