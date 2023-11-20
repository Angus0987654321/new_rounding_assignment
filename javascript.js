let textin = document.getElementById("textin");
let run = document.getElementById("run");
let numout = document.getElementById("numout");
var output;
var input;

// declaring all variables

run.onclick = function () {
  output = 0; 
  input = 0;
  input = textin.value; //retriving text
  input = input*10;
  input = input %10;
  if (input != 5){
   output = Math.round(textin.value);
    numout.textContent = output; 
  } else { //end of first if and start of else statment
    if (Math.ceil(textin.value)%2 == 0){
output = Math.ceil(textin.value);
    } else {
      output = Math.floor(textin.value);
    } // end of second else statment
    numout.textContent = output; //displaying rounded number
  } //end of fist else statment
} // on on onclick function

