class Animal {
  constructor (name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }
  drink () {
    this.thirst -= 10;
    return this.thirst;
  }
  eat (food) {
    this.belly.push(food);
    return this.belly;
  }
}

class Dog extends Animal {
  constructor (name, breed) {
    // call the thing you're extending before you other attributes
    // first create an Animal before you layer it into a Dog
    super(name);
    this.breed = breed;
  }
  bark () {
    console.log('Bark! Bark! I am a dog!');
  }
}

// const rhino = new Animal('Rhiney');
// rhino.eat('burger');
// rhino.eat('leaves');
// rhino.drink();
// console.log(rhino);

const snickers = new Dog ('Snickers', 'King Charles');
snickers.eat('dog food');

console.log(snickers);
console.log(snickers.bark());
