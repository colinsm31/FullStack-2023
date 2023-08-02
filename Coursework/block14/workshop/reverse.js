// Initialize two arrays, one original and another empty that will be the reverse of the original
const arr = [1, 3, 5, 7, 9, 11];
const reverse = [];

// Loop through array starting at last index
for(let i=arr.length-1; i>=0; i--){
  // Add each index into the reverse array
  reverse.push(arr[i]);
}

console.log(reverse);