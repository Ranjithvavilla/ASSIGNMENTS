function num_sum(){
    var num1= document.getElementById("num_1");
    var num2 = document.getElementById("num_2");
    var result = document.getElementById("result");
    num1 = num1.value;
    num2 = num2.value;

    if(parseInt(num1) && parseInt(num2)){

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        var c= num1+num2;
        result.innerText = c;

    }
    else{
        alert("enter a valid number")
    }
}