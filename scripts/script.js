//Funciones arrow para la optimización de JS

function handlerEvent(){

    let div = document.querySelectorAll('.pestanasContent__texto');
    let button = document.querySelectorAll('.pestanasButton__button');


    button.forEach( (boton, i) => {
        button[i].addEventListener('click', () => {

            button.forEach( (boton, i) => {
                button[i].classList.remove('active');
                div[i].classList.remove('active');
            });
            button[i].classList.add('active');
            div[i].classList.add('active');
        });
    });
}


window.onload = handlerEvent;