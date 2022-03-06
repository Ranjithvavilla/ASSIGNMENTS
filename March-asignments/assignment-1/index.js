function cricbuzz(){
    var num=prompt("Enter a number");
    if(parseInt(num)){

        for(i=1; i<=num; i++)
            if(i%3==0 && i%5==0){
                document.write("cricbuzz", "<br>");
            }

            else if(i%3==0){
                document.write("cric", "<br>");
            }

            else if(i%5==0){
                document.write("buzz", "<br>");
            }

            else {
                document.write(i, "<br>");
            }
    }

    else {
        alert("enter a valid number");
        cricbuzz();
    }
}