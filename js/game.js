// NOMBRE DEL USUARIO

let buttonNombre = document.querySelector('header button')
let pNombre =document.querySelector('header p')

buttonNombre.addEventListener("click", () => {
    let nombrUsuario = prompt ("¿Cuál es tu nombre?")
    buttonNombre.style.display = "none";
    pNombre.textContent = `¡Muchas suerte ${nombrUsuario}!`

})

let formJuego = document.forms["formJuego"]

formJuego.addEventListener('submit', (e) => {
    e.preventDefault();
    let jugada = formJuego["jugada"].value;
    alert (jugada)
})