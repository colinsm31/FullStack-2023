// Initialize string variable with input and two counters for vowels and consonants
const input = "awesome";
let vowels = 0;
let consonants = 0;

// Loop through string
for(let i=0; i<input.length; i++){
  // Increase if the current index is a vowel
  if(input[i]==="a" || input[i]==="e" || input[i]==="i" || input[i]==="o" || input[i]==="u"){
    vowels++;
  }else{
    // Otherwise increaes the consonant count
    consonants++;
  }
}

console.log(`${input} has ${consonants} consonants and ${vowels} vowels.`);