// function Dog (name, breed) {
//   this.name = name;
//   this.breed = breed;
// }
// Dog.prototype.speak = function () {
//   console.log(`Bark! Bark! My name is ${this.name}`);
// }
//
// const snickers = new Dog('Snickers', 'King Charles');
// const sunny = new Dog('Sunny', 'King Charles');
//
// console.log(snickers.speak());
// console.log(sunny.speak());

// class expression
// const Dog = class {
//
// }
// class declaration

function Cat (name, breed) {
  this.name = name;
  this.breed = breed;
}

Cat.prototype.speak = function () {
  console.log(`Meow! Meow! My name is ${this.name}`);
}
Cat.prototype.cuddle = function () {
  console.log('I love you owner!');
}

class Dog {
  constructor (name, breed) {
    this.name = name;
    this.breed = breed;
  }
  speak () {
    console.log(`Bark! Bark! My name is ${this.name}`);
  }
  cuddle () {
    console.log('I love you owner!');
  }
  static info () {
    console.log('A dog is better than a cat by 10 times');
  }
  // getter -- not a method -- property that is computed
  get description () {
    return `${this.name} is a ${this.breed} type of dog`;
  }
  set nicknames (value) {
    this.nick = value.trim();
  }
  get nicknames () {
    return this.nick;
  }
}

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'King Charles');

console.log(snickers.speak());
console.log(sunny.cuddle());
console.log(Dog.info());
console.log(snickers.description);
snickers.nicknames = "       snick   ";
console.log(snickers.nicknames.toUpperCase());
