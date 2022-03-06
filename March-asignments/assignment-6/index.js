function show(){

    var a=document.getElementById("show")
    
    if(a.classList.contains("show")){
        a.classList.replace("show" , "hide");
    }
    
    else {
        a.classList.replace("hide","show");
    }
    
    }