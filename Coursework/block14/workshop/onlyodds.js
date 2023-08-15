// Initialize two arrays, one with the numbers and an empty one for odd numbers
const arr = [70, 42, 55, 81, 21, 91, 34];
const odds = [];
const evens = [];

for(const i in arr){
  if(arr[i]%2!=0){
    odds.push(arr[i])
  }
  else{
    evens.push(arr[i])
  }
}

console.log(odds);
console.log(evens);