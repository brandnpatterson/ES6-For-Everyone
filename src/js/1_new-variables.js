// New Variables

// var - can be redefined and redeclared - function scope
var height = 100;
console.log(height);

// redeclared, as well as redefined
var height = 200;
console.log(height);

const setWidth = () => {
  const innerWidth = 300;
  console.log(innerWidth);
};
setWidth();
// console.log(innerWidth) // err

const age = 100;

// let - cannot be redeclared, but are made to be redefined - block scope
if (age > 12) {
  const dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old`);
}

// block scoped
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(`The number is ${i}`);
    console.log('Hello World');
  }, 1000);
}

// const - cannot be redeclared or redefined
const person = {
  name: 'Brandon',
  age: 29,
};

// replaces iife because it is block scoped
{
  const computer = {
    model: 'Mac',
    year: 2017,
  };
  console.log(computer);
}
// console.log(computer) // err

// temporal dead zone === You may not access a variable before it is defined
console.log(pizza);
var pizza = 'Deep Dish 🍕🍕🍕';
