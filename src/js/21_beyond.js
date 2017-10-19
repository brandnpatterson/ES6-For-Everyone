// // Class Properties
// class Dog {
//   constructor (name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   spoke = 0;
//   speak () {
//     console.log(`Bark! Bark! My name is ${this.name}`);
//     this.spoke = this.spoke + 1;
//     console.log(this.spoke);
//   }
//   cuddle () {
//     console.log('I love you owner!');
//   }
//   static info () {
//     console.log('A dog is better than a cat by 10 times');
//   }
//   // getter -- not a method -- property that is computed
//   get description () {
//     return `${this.name} is a ${this.breed} type of dog`;
//   }
//   set nicknames (value) {
//     this.nick = value.trim();
//   }
//   get nicknames () {
//     return this.nick;
//   }
// }
//
// const snickers = new Dog('Snickers', 'King Charles');
// const sunny = new Dog('Sunny', 'King Charles');
//
// snickers.speak();
// snickers.speak();

// padStart -- padEnd
// console.log("brandon".padEnd(6));

// const strings = ['short', 'medium', 'loooooooong', 'really reallly really looooooong'];
// const longestString = strings.sort(str => str.length).map(str => str.length)[0];
// console.log(longestString);
//
// strings.forEach(str => console.log(str.padStart(longestString)));

// ES7
['a', 'b', 'c'].includes('c'); // true

3 ** 3 // 27
Math.pow(3, 3); // 27

// Comma
const names = [
  'wes',
  'kait',
  'lux',
];

const people = {
  wes: 'Cool',
  kait: 'Even Cooler!',
  lux: 'Coolest!',
};

function family (
  mom,
  dad,
  children,
  dogs,
) {

}

const inventory = {
  backpacks: 10,
  jeans: 23,
  hoodies: 4,
  shoes: 11
};

const nav = Object
  .keys(inventory)
  .map(item => `<li>${item}</li>`)
  .join('');
console.log(nav);

const totalInventory = Object
  .values(inventory)
  .reduce((a, b) => a + b);
console.log(totalInventory);

Object
  .entries(inventory)
  .forEach(([key, val]) => {
    console.log(key, val);
  });

// can break away from a for of, but not forEach or map
for (const [key, val] of Object.entries(inventory)) {
  console.log(key);
  if (key === 'jeans') break;
}
