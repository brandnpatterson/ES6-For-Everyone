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

// this
const box = document.querySelector('.box')
box.addEventListener('click', function () {
  this.classList.toggle('toggle-size')
  setTimeout(() =>{
    this.classList.toggle('toggle-text')
  }, 500)
})
