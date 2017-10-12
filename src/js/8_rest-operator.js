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

// Spread Exercize
const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap (word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}
