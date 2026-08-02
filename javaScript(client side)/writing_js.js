// taking values
let heading;
let dateInput;
let textInput;

// Selecting Elements
const topic= document.querySelector('.js-heading-box');
const date= document.querySelector('#start-date');
const textBox= document.querySelector('.js-text-box');
const submitButton= document.querySelector('.js-button-submit');
const cancelButton= document.querySelector('.js-button-cancel');
const popupContainer= document.querySelector('.js-popup-container');
const Hamburger_button= document.querySelector('.js-hamburger-icon');
var navbar= document.querySelector('.js-navbar');
var overlay=document.querySelector('.js-overlay');

// Event Listeners
submitButton.addEventListener('click',addTopic);
cancelButton.addEventListener('click',confirmationPopup);
Hamburger_button.addEventListener('click',openNavbar);

function addTopic(event){                        //Adding the values in variables

    heading= topic.value;
    dateInput= date.value;
    textInput= textBox.value;

    checkvalues(heading,dateInput,textInput); 
    
}

function checkvalues(heading,dateInput,textInput){
   
    if(heading.trim() =="" & dateInput.trim() == "" & textInput.trim() ==""){

        return;

    }else{
        
        if(heading.trim() ==""){
        
            heading= "Untitled file";

        }
        
        if(dateInput.trim() ==""){ 
            
            const today = new Date(); 
            dateInput= today.toLocaleDateString('en-US');
        
        }

        storefiles(heading,dateInput,textInput);
   
    }

}

function storefiles(heading,dateInput,textInput){
   
    const existingJSON = localStorage.getItem('savedFile'); // 1. open the JSON file
    
    let openFile = [];

    if (existingJSON !== null) {              // 2. If data exists, parse it; if not, keep the empty array
        openFile = JSON.parse(existingJSON);
    }

    openFile.push({        // 3. Push new item
        title: heading, 
        date: dateInput, 
        text: textInput
    });
    
    const updatedJsonString = JSON.stringify(openFile);
    
    localStorage.setItem('savedFile', updatedJsonString);

    window.location.reload();

}

function confirmationPopup(event){
    
    popupContainer.style.display= 'flex'; //Showing up a confirmation popup
    
    //Selecting Buttons in popup
    const yesButton= document.querySelector('.js-yes-button');
    const noButton= document.querySelector('.js-no-button');

    // Listening which key is pressed
    yesButton.addEventListener('click',(event) =>{
       
        window.location.reload();
    
    });

    noButton.addEventListener('click',(event) =>{
      
        popupContainer.style.display= 'none';
    
    });
}

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

// temporary function to remove file
function deletefile(){

   localStorage.removeItem('savedFile');

}

//deletefile();
