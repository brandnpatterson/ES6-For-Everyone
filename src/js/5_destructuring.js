// destructuring

// objects
const person = {
  name: {
    first: 'Brandon',
    last: 'Patterson'
  },
  country: 'USA',
  city: 'Roanoke',
  links: {
    social: {
      twitter: 'https://twitter.com/brandnpatterson',
      facebook: 'https://facebook.com/brandnpatterson'
    }
  }
}

const { first, last } = person.name
const { twitter: tweet, facebook } = person.links.social

const settings = { width: 300, color: 'black' }

const { width = 100, height = 100, color = 'blue', fontSize = 25 } = settings

// arrays
const details = ['Brandon Patterson', 123, 'brandnpatterson.com']
const [ name, id, website ] = details
// console.log(name)

const data = 'Basketball, Sports, 90210, 23, some, random, stuff'
const [itemName, category, sku, inventory] = data.split(',')
// console.log(itemName)

const team = ['Brandon', 'Harry', 'Sarah', 'Keegan', 'Riger']
// ----------------------  rest operator
const [captain, assistant, ...players] = team
// console.log(players)

// any time you manipulate data, you must use a semi-colon
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';
// console.log(inRing, onSide);
[inRing, onSide] = [onSide, inRing];
// console.log(inRing, onSide);

function convertCurrency (amount) {
  const converted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.30
  }
  return converted
}

const { USD, AUD } = convertCurrency(100)
console.log(USD, AUD)

function tipCalc ({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
  return total + (tip * total) + (tax * total)
}

const bill = tipCalc()

console.log(bill)
