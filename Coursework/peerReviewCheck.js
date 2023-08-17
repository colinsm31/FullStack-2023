const coffeeMenu = [
  {
      name: "cappuccino",
      price: 8,
      seasonal: false,
  },
  {
      name: "espresso",
      price: 5,
      seasonal: false,
  },
  {
      name: "latte",
      price: 5,
      seasonal: false,
  },
  {
      name: "affogato",
      price: 9,
      seasonal: true,
  }, 
  {
      name: "macchiato",
      price: 6,
      seasonal: false,
  },
  {
      name: "americano",
      price: 7,
      seasonal: false,
  },
  {
      name: "iced coffee",
      price: 6,
      seasonal: false,
  },
  {
      name: "frappe",
      price: 8,
      seasonal: false,
  },
  {
      name: "cuban espresso",
      price: 10,
      seasonal: true,
  }
]

console.log("All Drinks on the Menu:");
coffeeMenu.forEach(item => {
    console.log(item.name);
});

console.log("Drinks that cost $5 and Under:");
const cheapDrinks = coffeeMenu.filter(item => item.price <= 5);
cheapDrinks.forEach(item => {
    console.log(item.name);
})

console.log("Drinks Priced at Even Numbers:");
const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0);
evenPricedDrinks.forEach(item => {
    console.log(item.name);
})

const total = coffeeMenu.reduce((sum, item) => sum + item.price, 0);
console.log(`Total cost for one of every drink: $${total}`);

console.log("Seasonal Drinks:");
const seasonalDrinks = coffeeMenu.filter(item => item.seasonal);
seasonalDrinks.forEach(item => {
    console.log(item.name);
})

module.exports = coffeeMenu;