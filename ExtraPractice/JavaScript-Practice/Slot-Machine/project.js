/*
  In Terminal commands to get packages for user input:
    npm init
    npm i prompt-sync
*/

/* 
  1.) Deposit money
  2.) Determine number of lines to bet on
  3.) Collect bet amount
  4.) Spin slot machine
  5.) Check win conditions
  6.) Give user winnings/take their bet
  7.) Play again if user still has money
*/

const prompt = require("prompt-sync")();

// Global variables
const ROWS = 3;
const COLS = 3;

// Making a map with keys and values
const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8
}

const SYMBOL_VALUE = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}

// One way to write a function
const deposit = () => {
  while(true){
    let depositedAmount = prompt("Enter a deposit amount: ");
  
    // convert string input into float value
      // will give Not a Number (NaN) if a string is entered
    let numberDepositAmount = parseFloat(depositedAmount);
  
    // loop if entry is not a valid amount
    if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
      console.log("Invalid deposit amount, try again.");
    }else{
      // otherwise break out of function if it is a valid entry
      return numberDepositAmount
    }
  }
}

const getNumberOfLines = () => {
  while(true){
    let lines = prompt("Enter number of lines to bet on (1-3): ");
    let numberOfLines = parseFloat(lines);
  
    if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines>3){
      console.log("Invalid number of lines, try again.");
    }else{
      return numberOfLines;
    }
  }
}

const getBet = (balance, lines) => {
  while(true){
    let bet = prompt("Enter the total bet per line: ");
    let numberBet = parseFloat(bet);
  
    if(isNaN(numberBet) || numberBet<=0 || numberBet>(balance/lines)){
      console.log("Invalid bet, try again.");
    }else{
      return numberBet;
    }
  }
}

const spin = () => {
  // Array of all possible symbols
  const symbols = [];
  for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
    for(let i=0; i<count; i++){
      // Add each symbol to the array
      symbols.push(symbol);
    }
  }
  
  // Creating slot machine with 3 columns
  const reels = [];
  for(let i=0; i<COLS; i++){
    reels.push([]);
  
    // Copy the symbols available for use into another array
      // This way we can remove symbols as we add them
    const reelSymbols = [...symbols];

    for(let j=0; j<ROWS; j++){
      // create random index to select
        // round number down to nearest whole number
      const randomIndex = Math.floor(Math.random()*reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];

      reels[i].push(selectedSymbol);
      // Removing selected element from pool of symbols to be picked from
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
}

const transpose = (reels) => {
  const rows = [];

  for(let i=0; i<ROWS; i++){
    rows.push([]);
    for(let j=0; j<COLS; j++){
      // push index at column[j] at row[i]
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
}

const printRows = (rows) => {
  for(const row of rows){
    let rowString = "";

    // Loop through the index and the element that exist in that row
    for(const [i, symbol] of row.entries()){
      rowString += symbol;
      if(i != row.length-1){
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
}

// Check how many lines user bet on
  // if bet on 1 line -> check first row; 2 lines -> check first two rows; etc.
const getWinnings = (rows, bet, lines, balance) => {
  let winnings = 0;
  let won = false;

  for(let row=0; row<lines; row++){
    const symbols = rows[row];
    let allSame = true;

    for(const symbol of symbols){
      if(symbol!=symbols[0]){
        allSame = false;
        break;
      }
    }

    if(allSame){
      // Multiply bet amount by the predefined value of each symbol
        // the winning symbol will be any index in that row
      winnings += bet*SYMBOL_VALUE[symbols[0]];
      won = true;
      console.log("You won: $"+winnings+"!");
      balance += winnings;
    }
  }

  // Subtract bet amount if ser doesn't win on any rows bet on
  if(won==false){
    balance -= bet*lines;
  }

  return balance;
}

let balance = deposit();

while(balance>0){
  let linesBetOn = getNumberOfLines();
  let bet = getBet(balance, linesBetOn);
  const reels = spin();
  const rows = transpose(reels);
  printRows(rows);
  balance = getWinnings(rows, bet, linesBetOn, balance);

  console.log("Current balance: $" + balance);

  // Give user option to opt out at any time
  const keepPlaying = prompt("Do you wish to keep playing (Y/N): ");
  if(keepPlaying=="N"){
    break;
  }
}