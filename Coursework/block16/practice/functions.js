function addNumbers(num1, num2){
  return num1+num2
}
function myFunc(){
  return 'Hello World';
}
function defaultFunc(value='Hello World'){
  return value;
}

let myVarFunc = () => {
  return 'myVarFunc';
}

let result = myVarFunc();

console.log(addNumbers(2,7)); //returns 9
console.log(addNumbers(200, 100)); // returns 300
console.log(myFunc()); // returns 'Hello World'
console.log(defaultFunc()); // returns 'Hello World'
console.log(defaultFunc('new param')); // returns 'new param'
console.log(result); // returns 'myVarFunc'

function rectArea(length, width){
  if(!length || !width){
    console.error("Must provide a length and width");
    return;
  }
  console.log('Area: '+length*width);
  return length*width;
}

rectArea(4, 5);