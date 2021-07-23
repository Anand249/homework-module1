function generateCode() {
  console.log("Getting In");
  var code = " "; //Initialization to null value
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  //Generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
    console.log("Code", code);
  }
  return code; //return the final acuumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
  document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();
