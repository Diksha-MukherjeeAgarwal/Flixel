const existingJSON = localStorage.getItem('emotionsData');
const parsedData= JSON.parse(existingJSON);

const emotionMap = {
  "happy": "happy",
  "sad": "sad",
  "demotivating": "demotivated",
  "need motivation": "motivated"
};

let visibleCount=0;
let click= 0;

/* Selecting buttons */
const startWriting_button= document.querySelector('.js-button-startwriting');
const breathe_button= document.querySelector('.js-button-breathe');
const openFolder_button= document.querySelector('.js-button-openfolder');
const Hamburger_button= document.querySelector('.js-hamburger-icon');

// selecting elements
const searchBar= document.querySelector('.js-search-bar');
const crossIcon= document.querySelector('.js-cross-icon');
const outputBox = document.querySelector('.js-output');
var navbar= document.querySelector('.js-navbar');
var overlay=document.querySelector('.js-overlay');
var suggestionBox= document.querySelector('.js-suggestion-box');
var listItem= document.querySelectorAll('.js-suggestion-box li')

searchBar.addEventListener('input', filterList);

searchBar.addEventListener('click', (event) => {

    suggestionBox.style.display= 'block';
    overlay.style.display='flex';
    searchBar.style.zIndex= '5';
    crossIcon.style.zIndex= '5';


    overlay.addEventListener('click', (event) =>{

        if(click>= 0){

            click=0;
        };

        suggestionBox.style.display= 'none';
        outputBox.style.display= 'none';
        overlay.style.display='none';

        searchBar.value = '';

        resetSearchResults();

    })

})

listItem.forEach((item)=>{
    
    item.addEventListener('click', (event) =>{
       
        const uiText = item.innerHTML.trim().toLowerCase();
       
        const jsonKey = emotionMap[uiText];
       
        const quotesArray = parsedData[jsonKey]; 

        outputBox.style.display = 'block';

        if (quotesArray) {
        
        // Generate a random number between 0 and the length of the array
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        
        // Select that single random quote object from the array
        const randomQuote = quotesArray[randomIndex];
   
        outputBox.innerHTML = `<p>"${randomQuote.quote}" <br><strong class="author-name">- ${randomQuote.author}</strong></p>`;
        
        }else if(click=== 1){

            outputBox.innerHTML = `<p>why don't you forget what just happened just now OvO.</p>`;
            click++;

        }
        else if(click=== 2){

            outputBox.innerHTML = `<p>Seriously... -_-.</p>`;
            click++;

        }
        else if(quotesArray=== undefined && click=== 0) {

           outputBox.innerHTML = `<p>Emotions come and go just like seasons OwO.</p>`;
           click++;

        }else{

            outputBox.innerHTML = `<p>Bye...</p>`;

        }
        
        searchBar.value = '';
    });
});

searchBar.addEventListener('keydown',(event) =>{

    if (event.key === 'Enter') {

        const uiText = searchBar.value.toLowerCase().trim();
        
        const jsonKey = emotionMap[uiText];
        
        const quotesArray = parsedData[jsonKey];

        outputBox.style.display = 'block';

        if (quotesArray) {
            
            // Generate a random number between 0 and the length of the array
            const randomIndex = Math.floor(Math.random() * quotesArray.length);
            
            // Select that single random quote object from the array
            const randomQuote = quotesArray[randomIndex];

            outputBox.innerHTML = `<p>"${randomQuote.quote}" <br><strong class="author-name">- ${randomQuote.author}</strong></p>`;
        
        }else {
            outputBox.innerHTML = `<p>Make your own definitions instead of quoting others.</p>`;
        }
    }

});

function filterList(event){

    others= document.getElementById('others-option');

    textInput= searchBar.value.toLowerCase().trim();

    listItem.forEach(list => {

        const textValue= list.textContent || list.innerText;

        if(textValue.toLowerCase().includes(textInput)){

            list.style.display='block';
            visibleCount++;
        }
        else{
            list.style.display='none';
            visibleCount--;
        }
        
    });
   
    if(textInput== ""){
        suggestionBox.style.display='none';
        suggestionBox.offsetHeight;
        suggestionBox.style.display='block';
    }

    if (visibleCount <= 0 && textInput !== "") {
        others.style.display = 'block';
    } else {
        others.style.display = 'none';
    }
}

crossIcon.addEventListener('click',resetSearchResults);

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
    window.location.href='HTML/writing.html';
})

breathe_button.addEventListener('click', (event) => {
    window.location.href='HTML/Breathe.html';
})

openFolder_button.addEventListener('click', (event) => {
    window.location.href='HTML/Folder.html';
})

function resetSearchResults() {
    others= document.getElementById('others-option')
  
    listItem.forEach(item => {
        item.style.display = 'block'; // Or 'flex', 'list-item', etc.
    });

    others.style.display= 'none';

}