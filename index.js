function numberValidation(num1,num2) {
            
   if (num1 == '') {
    alert("Error!!Input Blank");
    return false;
}   

if(num2==''){
        alert("Error!!Input Blank");
    return false;
    }
    return true;
}

function addBy()
{
    var num1,num2,
    num1 = document.getElementById("firstinput").value;
    num2 = document.getElementById("secondinput").value;
  if(numberValidation(num1,num2))
  { 
      document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}
   

}

function subtractBy()
{
    var num1,num2;
    num1 = document.getElementById("firstinput").value;
    num2 = document.getElementById("secondinput").value;
    if(numberValidation(num1,num2))
    {
    document.getElementById("result").innerHTML = parseInt(num1) - parseInt(num2);
    }
}



function multiplyBy()
{
    var num1,num2;
    num1 = document.getElementById("firstinput").value;
    num2 = document.getElementById("secondinput").value;
    if(numberValidation(num1,num2))
    {
    document.getElementById("result").innerHTML = parseInt(num1) * parseInt(num2);
    }
}

function divideBy() 
{ 
    var num1,num2;
    num1 = document.getElementById("firstinput").value;
    num2 = document.getElementById("secondinput").value;
    if(numberValidation(num1,num2))
    {
    document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
    
    }
}

function modBy()
{
    var num1,num2;
    num1 = document.getElementById("firstinput").value;
    num2 = document.getElementById("secondinput").value;
    
    if(numberValidation(num1,num2))
    {
    document.getElementById("result").innerHTML = parseInt(num1) % parseInt(num2);
    }
}