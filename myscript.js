function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    }
    else
    { 
      return true;
    } 
    document.getElementById("demo").innerHTML = text;
    
  }

function stringLengthCheck(name)
{
    var mnlen = 0;
    var mxlen = 20;
 
    if(name.value.length<mnlen || name.value.length> mxlen)
    { 
        text=("Value should be " +mnlen+ " to " +mxlen+ " characters.");
        document.getElementById("demo1").innerHTML = text;
        return false;
    }
    else
    { 
        return true;
    }
    
}    

function receipt(name,size,add) {  
  var d = new Date();
  var n = d.getDate();
  var m = d.getMonth();
  var y = d.getFullYear();
 
  const nam= name.value;
  const addy= add.value;
  const s= size.value;
  
  alert (" This is your Receipt "+nam+"\n Date:"+ n +"/"+ m +"/"+ y+ "\nYour size: "+s+ "\nOn address: "+addy+"\nThanks for ordering! :D");  
}  