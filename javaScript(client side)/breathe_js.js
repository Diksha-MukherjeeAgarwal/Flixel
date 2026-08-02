let isSkipped= false;

//Buttons
const skipButton= document.querySelector('.js-skip-button');
const fadeLeavesButton= document.querySelector('.js-fadeleaves-button')
const glowRootsButtons= document.querySelector('.js-glowroots-button')
const moveHandButton= document.querySelector('.js-movehand-button');
const Hamburger_button= document.querySelector('.js-hamburger-icon');

// div elements
var count= document.querySelector('.js-div-count');
var popup= document.querySelector('.js-count-UI');
var roots= document.querySelector('.js-roots');
var leaves= document.querySelectorAll('.js-leaf');
var umbrella= document.querySelector('.js-umbrella');
var instructions= document.querySelector('.js-instructions');
var navbar= document.querySelector('.js-navbar');
var overlay=document.querySelector('.js-overlay');

skipButton.addEventListener('click',(event) => {

    isSkipped= true;
    clearTimeout(countdownTimer);
   
    popup.style.display='none';

    roots.style.animation= 'none';
    roots.style.display= 'none';

    instructions.style.display= 'none';
    instructions.style.animation = 'none'; 

});

roots.addEventListener('animationend',(event) => {

    if (event.animationName === 'blink'){
      
        roots.style.display='none';
        popup.style.display= 'none';

        instructions.style.display= 'none';

    }
   
})

countdownTimer = setTimeout(counting, 600, 1);

function counting(i){

    if (isSkipped) return; 
    
    count.innerHTML= `${i}`;

    instructions.style.display= 'block';
    instructions.style.animation= 'appear 0.5s ease-in-out forwards';
   
    i+=1;

    if(i<=3){
        setTimeout(counting,800,i);
    }else if(i==4){
        setTimeout(start,800,i);
    }

}

function start(i){
    
    count.innerHTML= `Start`;
    
    setTimeout( function removecount(i){
        count.style.display= 'none'

        breatheon();

    },800,i);

}

function breatheon(){

    if (isSkipped) return;

    roots.style.animation= 'blink 10s ease 5';

}


// Button Functions
Hamburger_button.addEventListener('click',openNavbar);

fadeLeavesButton.addEventListener('click',(event) => {

    fadeLeavesButton.classList.toggle('addAnimation');

    changeLine= document.querySelector('.addAnimation');

    if(fadeLeavesButton.classList.contains('addAnimation')){

        changeLine.innerHTML= `flow leaves`;
        
        leaves.forEach(leaf => {
        
        leaf.style.opacity= '1';

        p= (Math.random()*(0.8-0) +0).toFixed(1);

        leaf.style.animation= 'fadeAndMove 4s ease-in-out forwards';

        leaf.style.animationDelay= `${p}s`;
    
       });

    }else{

        fadeLeavesButton.innerHTML=`fade leaves`;

        leaves.forEach(leaf => {

          leaf.style.opacity= '0';

          leaf.style.animation= 'appear 1s ease-in-out forwards';
        
          p= (Math.random()*(0.8-0) +0).toFixed(1);

          leaf.style.animationDelay= `${p}s`;
    
        });

    }

})

glowRootsButtons.addEventListener('click', (event) => {

    glowRootsButtons.classList.toggle('appear');

    changeLine= document.querySelector('.appear');

    if(glowRootsButtons.classList.contains('appear')){

        changeLine.innerHTML= `fade roots`;

        roots.style.display='';
        roots.style.opacity='0';

        roots.style.animation= 'appear 1s ease-in-out forwards';

    }else{

        glowRootsButtons.innerHTML= `glow roots`;

        roots.style.opacity='1';
        
        roots.style.animation= 'disappear 1s ease-in-out forwards';
    }
})

moveHandButton.addEventListener('click',(event) => {
   
    moveHandButton.classList.toggle('move');

    umbrella.style.animation= 'none';

    void umbrella.offsetWidth;

    if(moveHandButton.classList.contains('move')) {

        umbrella.style.animation= 'move 3s linear forwards';
        
    }else{

        umbrella.style.animation= 'move 3.5s linear reverse forwards';

    }
})

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
