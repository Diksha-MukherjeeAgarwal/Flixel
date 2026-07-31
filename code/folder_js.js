html='';

// for Hamburger Button
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

// Acessing locally stored  data
const files= localStorage.getItem('savedFile');
const openFile = JSON.parse(files);

// Selecting tyhe folder to add elements
var folderBox= document.querySelector('.js-folder-box');

// Lopping access each data from the stored file
openFile.forEach(element => {

    html+= `<div class="entry js-entry"> 
                            <p>${element['title']}</p>
                            <button class="open-button js-open-button">Open</button>                                                          
            </div>`;

    
}); 

folderBox.innerHTML+= html; //placing in the folder

// Selcting each file after placing in folder
const openButton= document.querySelectorAll('.js-entry');

//looping
openButton. forEach((button,index) =>{

    console.log(button);
    
    button.addEventListener('click', (event) => {
        
        showDetails(openFile[index]);

    });

    
});

//Function to open each file
function showDetails(element){

    const fileContainer= document.querySelector('.js-file-container');
    var loadFile= document.querySelector('.js-file');

    fileContainer.style.display= 'flex';

    info= `
          <div class="cancel js-cancel">
            <button></button>
          </div>

          <div class="row-1">

            <h1 class="title">${element['title']}</h1>
            <h1>${element['date']}</h1>

          </div>

          <p>${element['text']}</p>
          `;

    loadFile.innerHTML+= info;
    
    const cancelButton= document.querySelector('.js-cancel');

    cancelButton.addEventListener('click',(event) =>{

        fileContainer.style.display='none';

        loadFile.innerHTML='';
    
    });
    
};