// Template Strings Exercize

const dict = {
  HTML: 'Hyper Text Markup Language',
  CSS: 'Cascading Style Sheets',
  JS: 'JavaScript'
}

function addAbbreviations(strings, ...values) {
  const abbreviated = values.map(value => {
    if (dict[value]) {
      return `<abbr title="${dict[value]}">${value}</abbr>`
    }
    return value
  })
  return strings.reduce((sentence, string, i) => {
    return `${sentence}${string}${abbreviated[i] || ''}`
  }, '')
}

const first = 'Brandon'
const last = 'Patterson'
const sentence = addAbbreviations`Hello my name is ${first} ${last} and I love to code ${'HTML'}, ${'CSS'}, ${'JS'}`

// const bio = document.querySelector('.bio')
// const p = document.createElement('p')
// p.innerHTML = sentence
// bio.appendChild(p)

// Sanitize Data
function sanitize(strings, ...values) {
  const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '')
  return DOMPurify.sanitize(dirty)
}
const firstName = 'Brandon'
const aboutMe = sanitize`I love to do cool stuff <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked')" />`

const html = `
  <h3>${firstName}</h3>
  <p>${aboutMe}</p>
`

const bio = document.querySelector('.bio')
bio.innerHTML = html
