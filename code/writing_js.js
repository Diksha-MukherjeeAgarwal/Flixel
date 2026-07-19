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


// Event Listeners
submitButton.addEventListener('click',addTopic);
cancelButton.addEventListener('click',confirmationPopup);

function addTopic(event){                        //Adding the values in variables
   
    /* temporary print */
    console.log(topic.value);
    console.log(date.value);
    console.log(textBox.value);

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

        console.log(heading);
        console.log(dateInput);
        console.log(textInput);

        storefiles(heading,dateInput,textInput);
   
    }

}

function storefiles(heading,dateInput,textInput){
   
    const existingJSON = localStorage.getItem('savedFile');
    
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
    
    console.log("Updated JSON Data:", updatedJsonString);

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

// temporary function to remove file
function deletefile(){

   localStorage.removeItem('savedFile');

}

deletefile();
