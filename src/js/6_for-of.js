// const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib']

// for (let i = 0; i < cuts.length; i++) {
//   console.log(cuts[i])
// }

// cuts.forEach(cut => {
//   console.log(cut)
// })

// for (const i in cuts) {
//   console.log(cuts[i])
// }

// for (const [i, cut] of cuts.entries()) {
//   console.log(`${cut} is the ${i + 1} item`)
// }
//
// function addUpNumbers () {
//   let total = 0
//   for (const num of arguments) {
//     total += num
//   }
//   console.log(total)
//   return total
// }
// addUpNumbers(10, 23, 52, 34, 12, 13, 123)

// -- Strings --
// name = 'Brandon Patterson'
//
// for (const char of name) {
//   console.log(char)
// }

// -- NodeLists --
// const ps = document.querySelectorAll('p')
// for (const paragraph of ps) {
//   console.log(paragraph)
// }

// -- Objects --
const apple = {
  color: 'Red',
  size: 'Medium',
  weight: 50,
  sugar: 10
}

for (const prop of Object.keys(apple)) {
  const value = apple[prop]
  console.log(prop + ': ' + value)
}
