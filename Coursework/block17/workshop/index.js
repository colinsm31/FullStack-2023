const coffee_data = require('./coffee_data');

function printItem(item){
  return item;
}
function fiveBelow(item){
  return item.price<=5;
}
function evenPriced(item){
  if(item.price%2===0){
    return item;
  }
}
function getPrices(item){
  return item.price;
}
function totalSum(accumulator, currentValue){
    return accumulator + currentValue;
}
function isSeasonal(item){
  if(item.seasonal){
    item.name += ' with imported beans'
    return item;
  }
}

const priceArray = coffee_data.map(getPrices);
const totalPrice = priceArray.reduce(totalSum);


console.log('Coffee Menu:');
console.table(coffee_data.map(printItem));
console.log();

console.log('Items that are $5 and less: ');
console.table(coffee_data.filter(fiveBelow));
console.log();

console.log('Items that have an even number price: ');
console.table(coffee_data.filter(evenPriced));
console.log();

console.log('Price of all items combined: $'+totalPrice);
console.log();

console.log('Seasonal coffees: ');
console.table(coffee_data.filter(isSeasonal));