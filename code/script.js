/* Selecting buttons */
const startWriting_button= document.querySelector('.js-button-startwriting');
const breathe_button= document.querySelector('.js-button-breathe');
const openFolder_button= document.querySelector('.js-button-openfolder');
const Hamburger_button= document.querySelector('.js-hamburger-icon');
var navbar= document.querySelector('.js-navbar');
var overlay=document.querySelector('.js-overlay');

Hamburger_button.addEventListener('click',openNavbar);

function openNavbar(event){
    
    navbar.style.display= 'flex';
    overlay.style.display='flex';

    cross_button= document.querySelector('.js-cross');
    cross_button.addEventListener('click', (event) =>{

        navbar.style.display= 'none';
        overlay.style.display='none';

    })

    overlay.addEventListener('click', (event) =>{

        navbar.style.display= 'none';
        overlay.style.display='none';

    })
}

startWriting_button.addEventListener('click', (event) => {
    window.location.href='writing.html';
})

breathe_button.addEventListener('click', (event) => {
    window.location.href='Breathe.html';
})

openFolder_button.addEventListener('click', (event) => {
    window.location.href='Folder.html';
})
