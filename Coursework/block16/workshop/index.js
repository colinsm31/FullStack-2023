const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
  name: 'Timmy',
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
  name: 'Sarah',
}

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
  name: 'Rocky',
}


// Check for if a customer has a subscription, return true or false
let hasSub = (customer) => {
  // console.log(customer.subscription);
  return customer.subscription;
}

// Check for if a customer has a coupon and return true or false
let hasCoupon = (customer) => {
  // console.log(customer.coupon);
  return customer.coupon;
}


// Totaling function
function getTotal(customer){
  //calculate total cost of refill before any discounts
  let total = customer.pricePerRefill * customer.refills;
  // check for customer discounts/coupon and subtract discounts
  if(hasSub(customer)){
    total *= 0.75;
  }
  if(hasCoupon(customer)){
    total -= 10;
  }
  return `${customer.name} => Your grand total is $${total}`;
}

console.log(getTotal(timmy));
console.log(getTotal(sarah));
console.log(getTotal(rocky));