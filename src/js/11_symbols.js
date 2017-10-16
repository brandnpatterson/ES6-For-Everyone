/* Reference -- stored on Heap -- little longer to access, much more space
 *           -- var points to stack, which is reference to data on heap
 * Object
 *  |__ Array
 *  |__ Function
 *
 */

/* Primitives -- stored on Stack -- located quickly, not much space
 *
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 * Symbol
 *
 */

var name = 'Max';
// console.log(name);
// secondName is reassigned
name = 'Chris';
var secondName = name;
// console.log(secondName);

var thirdName = 'Josh';
// console.log(thirdName);
// forthName is not reassigned
var forthName = thirdName;
thirdName = 'Bob';
// console.log(forthName);

var person = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking']
}
var thirdPerson = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking']
}
// console.log(person);

// var secondPerson = person;
// Object.assign creates a new object on the heap
// It doesn't create a deep clone
// Array is a reference type
var secondPerson = Object.assign({}, person);
var myHobbies = person.hobbies.slice();

person.name = 'Chris';
person.hobbies.push('Reading');
// console.log(secondPerson);
// console.log(thirdPerson);
//
// console.log(myHobbies);

const wes = Symbol('Wes'); // asdfj3209jafwe9f0jalksj309asdf3209jlkjoijlksfad
// console.log(wes);

const classRoom = {
  [Symbol('Mark')]: { grade: 50, gender: 'male' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' }
}

const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map(sym => classRoom[sym]);
console.log(data);
