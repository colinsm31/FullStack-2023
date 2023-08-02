// Initialize two arrays, one with the numbers and an empty one for odd numbers
const arr = [70, 42, 55, 81, 21, 91, 34];
const odds = [];

// For loop to push odd numbers to oddNumber array
for(let i=0; i<arr.length; i++){
  if(arr[i]%2!=0){
    odds.push(arr[i]);
  }
}

console.log(odds);