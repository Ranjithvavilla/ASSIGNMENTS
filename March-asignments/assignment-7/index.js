function num_swap(){
    var num1= document.getElementById("num_1");
    var num2 = document.getElementById("num_2");
    var A = document.getElementById("value_A");
    var B = document.getElementById("value_B");
    num1 = num1.value;
    num2 = num2.value;

    if(parseInt(num1) && parseInt(num2)){

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num1= num1 + num2;
        num2= num1 - num2;
        num1= num1 - num2;

        A.innerText = "A :"+ num1;
        B.innerText = "B :" + num2;

    }
    else{
        alert("enter a valid number")
    }
}