// Fat Arrow Function Exercizes

const names = ['wes', 'kait', 'lux']
// arrow function -- anonymous function -- implicit return
const fullNames = names.map(name => `${name} bos`)
console.log(fullNames)

// anonymous functions
const sayName = (name) => { console.log(`Hey ${name}!`) }
sayName('Brandon')

const race = '100m Dash'
const winners = ['Hunter Gath', 'Singa Song', 'Imda Boss']

const win = winners.map((winner, i) => (
  { name: winner, race, place: i + 1 }
))
console.table(win)

const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34]
const old = ages.filter(a => a > 50)
const old2 = ages.filter(function(a) {
  if (a > 50) {
    return a
  } else {
    return
  }
})
console.log(old)

// this not rebound with fat arrow functions
const box = document.querySelector('.box')
box.addEventListener('click', function () {
  let first = 'toggle-size'
  let second = 'toggle-text'

  if (this.classList.contains(first)) {
    [first, second] = [second, first]
  }

  console.log(this)

  this.classList.toggle(first)
  setTimeout(() => {
    this.classList.toggle(second)
  }, 500)
})

// functions with default values
function calculateBill (total, tax = 0.13, tip = 0.15) {

  return total + (total * tax) + (total * tip)
}

const totalBill = calculateBill(100, undefined, 0.25)
console.log(totalBill)


// when to not use fat arrow syntax
// when you need a method to bind to an object
const person = {
  points: 23,
  score () {
    this.points++
    console.log(this)
  }
}

// when you need to add a prototype method
class Car {
  constructor(make, color) {
    this.make = make
    this.color = color
  }
}

const beemer = new Car('bwm', 'blue')
const subie = new Car('Subaru', 'white')

Car.prototype.summarize = function () {
  return `This car is a ${this.make} in the color ${this.color}`
}

console.log(beemer.summarize())
