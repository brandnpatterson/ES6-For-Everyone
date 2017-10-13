const featured = ['Deep Dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
const pizzas = [...featured, 'Vegetable', ...specialty];
const fridayPizzas = [...pizzas];
// console.log(fridayPizzas);

const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Margherita', 'Italian Sausage', 'Dough', 'Cheese']
};

// Spread Exercize 1
// const heading = document.querySelector('.jump');
// heading.innerHTML = sparanWrap(heading.textContent);
//
// function sparanWrap (word) {
//   return [...word].map(letter => `<span>${letter}</span>`).join('');
// }

// Spread Exercize 2
const people = [...document.querySelectorAll('.people p')];
const names = people.map(p => p.innerHTML);
// console.log(names);

const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];

// console.log(shoppingList);

const comments = [
  { id: 12334, text: 'I love your dog!' },
  { id: 12335, text: 'Cuuute! 🐐' },
  { id: 12336, text: 'You are so dumb' },
  { id: 12337, text: 'Nice work on this wes!' }
];
const commentId = 12336;
const commentIndex = comments.findIndex(comment => comment.id === commentId);

const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
// console.log(newComments);

const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];
inventors.push(...newInventors);
// console.log(inventors);

const name1 = ['Wes', 'Bos'];
function sayHi(firstName, lastName) {
  alert(`Hey there ${firstName} ${lastName}`);
}
// sayHi(...name1);

// Spread unpacks an interable to multiple items
// Rest takes multiple items and puts it into an iterable

function convertCurrency(rate, ...amounts) {
  return amounts.map(amount => amount * rate);
}

const amounts = convertCurrency(1.54, 10, 23, 52, 1, 56);
// console.log(amounts);

const runner = ['Wes Bos', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...runs] = runner;
console.log(name, id, runs);

const team = ['Wes', 'Kait', 'Lux', 'Sheena', 'Kelley'];
const [captain, assistant, ...players] = team;
console.log(`Captain: ${captain}\nAssistant: ${assistant}\nPlayers: ${players}`);
