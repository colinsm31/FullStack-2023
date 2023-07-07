function FunctionPractice(){
  var varVariable; // original way of creating variables
  let letVariable; // variable that can be changed
  const constVariable = "Permanent"; // variable that cannot be changed
    // will result in error if changed

  // js will make assumption on what each variable type is
    // do not need to put int, string, boolean, etc
  letVariable = "Some text";
  varVariable = 23;

  console.log(letVariable);
  console.log(varVariable);
}

const name = "JavaScript";
console.log("I enjoy programming in " + name + "!");
console.log(`I enjoy programming in ${name}!`)
// Expected Output: I enjoy programming in JavaScript!

FunctionPressMe();
//Expected Output: Some text <br> 23

console.log(5==5);
// Expected Output: true

console.log(5=="5");
// Expected Output: true
  // converts string five into an int value of 5

console.log(5==="5");
// Expected Output: false
  // compares the values and data type

function PressMe(){
  alert("Don't Press Me Again!");
}