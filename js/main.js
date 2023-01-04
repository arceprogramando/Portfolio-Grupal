// Inicializacion de constante menuBtn seleccionando a .menu-btn
const menuBtn = document.querySelector('.menu-btn');
const none = document.querySelector('.secundary')

//Inicializacion de variable menuOpen inicializado en false
let menuOpen = false;

//Se le agrega una funcion en la cual escucha el mouse y si este es igual a click, si el menu no esta abierto . se agrega al menu-btn , la clase open y menuOpen pasa a ser true
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        none.classList.add('visible');
        //De lo contrario se remove el open y pasa menuOpen a False
    }else{
        menuBtn.classList.remove('open');
        none.classList.remove('visible');
        menuOpen= false}
});

console.log("hola");