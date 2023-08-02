// Is Truthy Tab
  // check if value is false, null, undefined, 0 or empty string
    // display correct prompt is one is met
    // display true otherwise

let value = "";
if(value === false){
  console.log("The boolean value false is falsy");
} else if(value === null){
  console.log("The null value is falsy");
} else if(value === undefined){
  console.log("Undefined is falsy");
} else if(value === 0){
  console.log("The number 0 is falsy (the only falsy number)");
} else if(value === ""){
  console.log("The empty string is falsy (the only falsy string)");
} else{
  console.log(true);
}


// Number Line
  /*
    1.) Create variables: num1 num2 sum
    2.) Set up if statements for if sum is greater than 0, less than 0, equal to 0
        greater than 100, or less than -1000
    3.) Print corresponding console.log statement
  */

const num1 = -5;
const num2 = 0;
const sum = num1+num2;
if(sum===0){
  console.log(sum+" is equal to 0");
} else if(sum>100){
  console.log(sum+" is greater than 100");
} else if(sum>0){
  console.log(sum+" is greater than 0");
} else if(sum<(-1000)){
  console.log(sum+" is less than -1000");
} else if(sum<0){
  console.log(sum+" is a negative number");
}


// Greater than 5
  // Set up variables for val1 and val2
  // Create Ternary statement that checks if both values are greater than or equal to five
    // true if they are, false if one or both aren't

const val1 = 6;
const val2 = 4;
((val1>=5) && (val2>=5)) ? console.log(true) : console.log(false);


// Pair and Compare
  //Ternary statement that checks if both the data type and values are the same for each
  // of parameters. True if at least one pair is the same

const param1A = 11;
const param1B = "eleven";
const param2A = "four";
const param2B = "for";
((param1A===param1B) || (param2A===param2B)) ? console.log(true) : console.log(false);