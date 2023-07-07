// 1.) Display welcoming text
alert(`You have received this message because you have been chosen to 
open an important vault. Here is the secret combination:`);

// 2.) Create variables that are combination using arithmetic:
  // 10 - 40- 39
let var1 = 8+2;
let var2 = 74-34;
let var3 = 13*3;

// Creating function to display code equations
function showEquations(){
  // search for id of each paragraph element and change its entry to string version of equation value
  document.getElementById("eq1").innerHTML = String(var1);
  document.getElementById("eq2").innerHTML = String(var2);
  document.getElementById("eq3").innerHTML = String(var3);
}