//Buttons
const skipButton= document.querySelector('.js-skip-button');
const fadeLeavesButton= document.querySelector('.js-fadeleaves-button')
const glowRootsButtons= document.querySelector('.js-glowroots-button')

// div elements
var count= document.querySelector('.js-div-count');
var popup= document.querySelector('.js-count-UI');
var roots= document.querySelector('.js-roots');
var leaves= document.querySelectorAll('.js-leaf');

skipButton.addEventListener('click',(event) => {
   
    popup.style.display='none';

    roots.style.animation= '';

});

roots.addEventListener('animationend',(event) => {

    if (event.animationName === 'blink'){
      
        roots.style.opacity='0';
        popup.style.display= 'none';

    }
   
})

setTimeout(counting, 600, 1);

function counting(i){

    console.log(i); // Temporary log
    
    count.innerHTML= `${i}`;
   
    i+=1;

    if(i<=3){
        setTimeout(counting,800,i);
    }else if(i==4){
        setTimeout(start,800,i);
    }

}

function start(i){
   
    console.log('Start'); //Temporary log
    
    count.innerHTML= `Start`;
    
    setTimeout( function removecount(i){
        count.style.display= 'none'
        breatheon();
    },800,i);

}

function breatheon(){

    roots.style.animation= 'blink 10s ease 5';

}


// Button Functions
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
