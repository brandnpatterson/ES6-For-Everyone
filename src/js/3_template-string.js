// Template Strings (Template Literals)

function highlight (strings, ...values) {
  console.log(values)
  let str = ''
  strings.forEach((string, i) => {
    str += `${string} <span contenteditable class="hl">${values[i] || ''}</span>`
  })
  return str
}

const name = 'Snickers'
const age = 2
const sentance = highlight`My dog's name is ${name} and he is ${age * 7} years old`
// document.body.innerHTML = sentance
// console.log(sentance)

const person = {
  name: 'Brandon',
  job: 'Web Developer',
  city: 'Roanoke',
  bio: 'Brandon is a really cool guy that loves to write code!'
}

const markup = `
  <div class="person">
    <h2>
      ${person.name} -
      <span class="job">${person.job}</span>
    </h2>
    <p class="location">City: ${person.city}</p>
    <p class="bio">Bio: ${person.bio}</p>
  </div>
`
// console.log(markup)
// document.body.innerHTML = markup

const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 },
  { name: 'Sunny', age: 1 },
]

const dogMarkup = `
  <ul class="dogs">
    ${dogs.map(dog => `
      <li>
        ${dog.name} is ${dog.age * 7}
      </li>`).join('')}
  </ul>
`
// console.log(dogMarkup)
// document.body.innerHTML = dogMarkup

const song = {
  name: 'Dying to live',
  artist: 'Tupac',
  featuring: 'Biggie Smalls'
}

const songMarkup = `
  <div class="song">
    <p>
      ${song.name} - ${song.artist}
      ${song.featuring ? `(Featuring ${song.featuring})` : ''}
    </p>
  </div>
`
// console.log(songMarkup)
// document.body.innerHTML = songMarkup

const beer = {
  name: 'Belgian Wit',
  brewery: 'Steam Whistle Brewery',
  keywords: ['pale', 'cloudy', 'spiced', 'crisp']
}

function renderedKeywords(keywords) {
  return `
    <ul>
      ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
    </ul>
  `
}

const beerMarkup = `
  <div class="beer">
    <h2>${beer.name}</h2>
    <p class="brewery">${beer.brewery}</p>
    ${renderedKeywords(beer.keywords)}
  </div>
`
// console.log(beerMarkup)
// document.body.innerHTML = beerMarkup
