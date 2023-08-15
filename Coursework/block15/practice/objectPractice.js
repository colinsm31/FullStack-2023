const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
}

let length = 0;
for(const property in student){
  console.log(property);
  length++;
}

console.table(student);
delete student.rollno;
console.table(student);
console.log(length);

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
  }
]

for(let i=0; i<library.length; i++){
  console.log(`Book: ${library[i].title}, Author: ${library[i].author}, Read: ${library[i].readingStatus}`);
}

const Cylinder = {
  height: 0,
  radius: 0,
  volume: (Math.PI *(this.radius*this.radius)*this.height).toFixed(4),
  circumference: (2*Math.PI*this.radius*this.height).toFixed(4),

  // Use getters/setters to dynamically update the volume and circumference values
  setHeight(height){
    this.height = height;
    this.updateVolume();
    this.updateCircumference();
  },
  setRadius(radius){
    this.radius  = radius;
    this.updateVolume();
    this.updateCircumference();
  },
  getHeight(){return this.height;},
  getRadius(){return this.radius;},
  
  updateVolume(){
    this.volume = (Math.PI *(this.radius*this.radius)*this.height).toFixed(4);
  },
  updateCircumference(){
    this.circumference = (2*Math.PI*this.radius*this.height).toFixed(4);
  }
}

Cylinder.setHeight(7);
Cylinder.setRadius(3);


console.table(Cylinder);


const shoe = {
  brand: 'converse',
  laces: true,
  velcro: false,
  color: 'green',
  price: {
    usd: 2000,
    mxp: 20000,
  },
  activityType: ['everyday wear', 'walking', 'basketball'], 
}

console.table(shoe);