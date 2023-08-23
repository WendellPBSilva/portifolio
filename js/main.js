const title = document.querySelectorAll(".resume__title");
const list = document.querySelectorAll("[data-list]");
title.forEach( (_element) =>{
    _element.addEventListener("click", (_event) =>{
        //console.log(_event.target.parentNode.parentNode.lastElementChild);
        active = _event.target.parentNode.parentNode.lastElementChild.classList;
        //console.log(active.value);
        displayContent(active);
    })
})

function displayContent (display){
    if(display.value == "show"){
        
        //console.log(display);
        active.add('hide');
        active.remove('show');
        console.log(display);
        //display = "true";
    }
    else{
        active.add('show');
        active.remove('hide');
        //display = "false";
        console.log(display);
    }
}