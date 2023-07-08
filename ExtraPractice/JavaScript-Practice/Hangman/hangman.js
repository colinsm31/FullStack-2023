/*
  1.) Get word to guess
    1a.) Display word for user
  2.) Get user letter guess
  3.) Check if it is in the word
  4.) Display letter if it is / add appendage to hangman if not
  5.) Check for win/loss
*/

const prompt = require("prompt-sync")();

function getWord(){
  const words = ["apple", "banana", "orange", "strawberry", "tangerine"];
  const randomIndex = Math.floor(Math.random() * words.length);
  const chosenWord = words[randomIndex];
  return chosenWord;
}

function displayBlankWord(word){
  let newWord = "_";
  for(let i=0; i<word.length-1; i++){
    newWord += "_"
  }
  return newWord;
}

function getGuess(){
  console.log("");
  const guess = prompt("What letter would you like to guess: ");
  return guess;
}

function updateGuessedLetters(guessedLetters, guess){
  guessedLetters.push(guess);
  console.log("");
  console.log("Letters Guessed: "+guessedLetters);
  return guessedLetters;
}

function checkLetter(word, answer, guess){
  let newAnswer = answer.trim().split('')
  for(let i=0; i<word.length; i++){
    if(word[i] == guess){
      newAnswer[i] = (guess);
    }
  }
  return newAnswer.join('');
}

function updateWrongGuesses(word, answer, guess, wrongGuesses){
  answer = "";
  let letterContained = false;
  for(let i=0; i<word.length; i++){
    if(guess == word[i]){
      answer += (guess+" ");
      letterContained = true;
    }
  }
  if(!letterContained){
    wrongGuesses++;
  }
  return wrongGuesses;
}

function drawHangman(wrongGuesses, gameOver){
  if(wrongGuesses==0){
    console.log(" -----");
    console.log(" |   |");
    console.log(" |");
    console.log(" |");
    console.log("_|_");
  }else if(wrongGuesses==1){
    console.log(" -----");
    console.log(" |   O");
    console.log(" |");
    console.log(" |");
    console.log("_|_");
  }else if(wrongGuesses==2){
    console.log(" -----");
    console.log(" |   O");
    console.log(" |   |");
    console.log(" |");
    console.log("_|_");
  }else if(wrongGuesses==3){
    console.log(" -----");
    console.log(" |   O");
    console.log(" |  \\|");
    console.log(" |");
    console.log("_|_");
  }else if(wrongGuesses==4){
    console.log(" -----");
    console.log(" |   O");
    console.log(" |  \\|/");
    console.log(" |");
    console.log("_|_");
  }else if(wrongGuesses==5){
    console.log(" -----");
    console.log(" |   O");
    console.log(" |  \\|/");
    console.log(" |   |");
    console.log(" |  /");
    console.log("_|_");
  }else if(wrongGuesses==6){
    console.log(" -----");
    console.log(" |   O");
    console.log(" |  \\|/");
    console.log(" |   |");
    console.log(" |  / \\");
    console.log("_|_");
    gameOver = true;
    console.log("");
    console.log("Game Over!");
  }
  return gameOver;
}

function checkWin(word, answer, gameWon){
  if(word==answer){
    gameWon = true;
    console.log("");
    console.log("Congradulations! You guessed the word!!");
    return gameWon;
  }
}

const word = getWord();
let wrongGuesses = 0;
let gameOver = false;
let gameWon = false;
let guessedLetters = [];

let answer = displayBlankWord(word);
let guess = "";

while(!gameOver){
  console.log("");
  console.log(answer);
  guess = getGuess();
  answer = checkLetter(word, answer, guess);
  guessedLetters = updateGuessedLetters(guessedLetters, guess);
  wrongGuesses = updateWrongGuesses(word, answer, guess, wrongGuesses);
  gameWon = checkWin(word, answer, gameWon);
  if(gameWon){
    console.log("");
    console.log(answer);
    break;
  }
  gameOver = drawHangman(wrongGuesses, gameOver);
}