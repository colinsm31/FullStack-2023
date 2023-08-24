class Car{
  // Constructor with default values
  constructor(make='default', model='default', year=0){
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription(){console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`)}  
}

class ElectricCar extends Car{
  constructor(make='default', model='default', year=0, range=0){
    super(make, model, year);
    this.range = range;
  }

  getDescription(){console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Range: ${this.range}`)}
}

const ford = new Car('Ford', 'F-150', 2020);
const tesla = new ElectricCar('Tesla', 'Model S', 2019, 300);
const defaultCar = new Car();
const defaultElectric = new ElectricCar();

ford.getDescription();
tesla.getDescription();
defaultCar.getDescription();
defaultElectric.getDescription();