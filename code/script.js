/* Selecting buttons */
const startWriting_button= document.querySelector('.js-button-startwriting');
const breathe_button= document.querySelector('.js-button-breathe');
const openFolder_button= document.querySelector('.js-button-openfolder');

startWriting_button.addEventListener('click', (event) => {
    window.location.href='writing.html';
})

breathe_button.addEventListener('click', (event) => {
    window.location.href='Breathe.html';
})

openFolder_button.addEventListener('click', (event) => {
    window.location.href='Folder.html';
})
