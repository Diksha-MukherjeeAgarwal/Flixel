const files= localStorage.getItem('savedFile');
const openFile = JSON.parse(files);

var folderBox= document.querySelector('.js-folder-box');

openFile.forEach(element => {

    entry=`<div class="entry js-entry"> 
                            <p>${element['title']}</p>
                            <button class="open-button js-open-button">Open</button>                                                          
            </div>`;

    folderBox.innerHTML+= entry;
    
}); 
