function generateCode() {
  var code = " "; //Initialization to null value
  var getCode = " ";
  var btnValue;
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  //Generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }
  return code; //return the final acuumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnValue) {
  document.getElementById("submit").disabled = btnValue;
  if (btnValue == true) {
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}

var codebox = document.getElementById("codeentered");
console.log("I am Here", codebox);
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
  console.log("INNNNNNN");
  getCode = document.getElementById("codeentered").value;
  var charset1 = getCode.trim();
  var charset2 = code.trim();
  if (charset1.length == charset2.length && charset1 == charset2) {
    disableButton(false);
  }
}

//Activate function
disableButton();
