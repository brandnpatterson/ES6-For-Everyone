// const dogs = new Map();
//
// dogs.set('Riley', 3);
// dogs.set('Domasco', 2);
// dogs.set('Ben', 10);
//
// for (const [key, val] of dogs) {
//   console.log(key, val);
// }

const clickCounts = new Map();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  clickCounts.set(button, 0);
  button.addEventListener('click', function () {
    const  val = clickCounts.get(this);
    clickCounts.set(this, val + 1 );
    console.log(clickCounts);
  })
});

console.log(clickCounts);

let dog1 = { name: 'Riley' };
let dog2 = { name: 'Domasco' };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, 'Riley is the best!');
weak.set(dog2, 'Domasco is the best!');

console.log(strong);
console.log(strong.size);
console.log(weak);
