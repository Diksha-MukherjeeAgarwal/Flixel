const skipButton= document.querySelector('.js-skip-button');
var count= document.querySelector('.js-div-count');
var popup= document.querySelector('.js-count-UI');
var roots= document.querySelector('.js-roots');

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