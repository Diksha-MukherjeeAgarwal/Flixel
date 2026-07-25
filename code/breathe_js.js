setTimeout(count, 600, 1);

function count(i){

    console.log(i); // Temporary log
    i+=1;

    if(i<=3){
        setTimeout(count,800,i);
    }else if(i==4){
        setTimeout(start,800,i);
    }

}

function start(i){
    console.log('Start'); //Temporary log
}