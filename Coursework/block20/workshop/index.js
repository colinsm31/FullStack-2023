const users = [
  { name: "John", age: 25, occupation: "Gardener" },
  { name: "Lenny", age: 51, occupation: "Programmer" },
  { name: "Andrew", age: 43, occupation: "Teacher" },
  { name: "Peter", age: 81, occupation: "Teacher" },
  { name: "Anna", age: 43, occupation: "Teacher" },
  { name: "Albert", age: 76, occupation: "Programmer" },
  { name: "Adam", age: 47, occupation: "Teacher" },
  { name: "Robert", age: 72, occupation: "Driver" },
];

const root = document.getElementById('root');

function main() {
  const h1 = document.createElement('h1');
  h1.innerHTML = 'FREELANCERS';
  root.appendChild(h1);

  const list = document.createElement('ul');
  for(let i=0; i<users.length; i++){
    const li = document.createElement('li');
    const name = users[i].name;
    const age = users[i].age;
    const job = users[i].occupation;

    li.innerHTML = `${name}, ${age}, ${job}`;
    list.appendChild(li);
  }

  root.append(list);
}

//call the main function
main();