// For loop that starts at 1 and ends at 100
for(let i=1; i<101; i++){
  // If the number is divisible by both 3 and 5...
  if(i%3===0 && i%5===0){
    // Print 'FizzBuzz'
    console.log("FizzBuzz");
  } 
  // If the number is divisible only by 3...
  else if(i%3===0){
    // Print 'Fizz'
    console.log("Fizz");
  } 
  // If the number is divisible only by 5...
  else if(i%5===0){
    // Print 'Buzz'
    console.log("Buzz");
  } 
  // Otherwise...
  else{
    // Print the number
    console.log(i);
  }
}