const people = new Set();
people.add('Brandon');
people.add('Lauren');
people.add('Hamlet');

// console.log(people);
// people.clear();
// console.log(people.entries());
// for (const person of people) {
//   console.log(person);
// }

class Student {
  constructor (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  speak () {
    console.log(`My name is ${this.name}! I am ${this.age} and my job is that of a ${this.job}.`);
  }
}

const student_1 = new Student('Brandon', 29, 'Developer');
const student_2 = new Student('Lauren', 24, 'Social Media');
const student_3 = new Student('Hamlet', 18, 'Cat');

const student_data = [student_1, student_2, student_3];

// Sets can contain any data type
const students = new Set(student_data);
// for (const student of students) {
//   console.log(student.speak());
// }

const brunch = new Set();
brunch.add('Wes');
brunch.add('Sarah');
brunch.add('Simone');
const line = brunch.values();
console.log(line.next().value);
console.log(line.next().value);
brunch.add('Heather');
brunch.add('Snickers');
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);

// weak Sets may only contain objects
let dog1 = { name: 'Snickers', age: 3 };
let dog2 = { name: 'Sunny', age: 1 };
const weakSauce = new WeakSet([dog1, dog2]);

console.log(weakSauce);
dog1 = null;
// deleted via garbage collection
console.log(weakSauce);
