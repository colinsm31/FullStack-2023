// Scope


// Global Scope: 
  // Can be accessed inside functions or other parts of file
const x = 10; 

function myFunc(){

  // Function Scope:
    // Can only be accessed in the function it's made in
  let y = 20;
  console.log(x);
}

// console.log(y); // Returns error -> y is in function scope

for(let i=0; i<10; i++){
  // Local Scope
    // Only exists in that for loop, i no longer exists when for loop is done
}

const arr = [3,6,2,1,7,8,9,5,4];

/*
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}
*/

// Same way of doing the for loop as above ^
arr.forEach((element) => console.log(element))

// Sorting an array
arr.sort();
console.log(arr);




let heap = [];

// Event loop
for(let i=0; i<heap.length; i++){
  
}