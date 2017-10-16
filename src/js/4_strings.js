const course = 'RFB2'
const flightNumber = '20-AC2018-jz'
const accountNumber = '825242631RT0001'

const make = 'BMW'
const model = 'x5'
const color = 'Royal Blue'

// .startsWith()

// .endsWith()

// .includes()

// .repeat()

function leftPad(str, length = 120) {
  return `${' '.repeat(length - str.length)}${str}`
}

console.log(leftPad(make))
console.log(leftPad(model))
console.log(leftPad(color))
