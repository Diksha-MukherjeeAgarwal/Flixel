var count= document.querySelector('.js-div-count');
const skipButton= document.querySelector('.js-skip-button');
var popup= document.querySelector('.js-count-UI')

skipButton.addEventListener('click',(event) => {
   
    popup.style.display='none';

});

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
    },800,i);

}