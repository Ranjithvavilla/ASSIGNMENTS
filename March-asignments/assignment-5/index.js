function like(counter){
    var like = document.getElementsByClassName("like_counter");
    var a = like[counter].innerText ;
    a=parseInt(a);
    a = a+1;
    like[counter].innerText =a;
    
}


function dislike(counter){
    var dislike = document.getElementsByClassName("dislike_counter");
    var a = dislike[counter].innerText ;
    a=parseInt(a);
    a = a+1;
    dislike[counter].innerText =a;
    
}