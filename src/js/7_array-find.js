// array.from
const people = Array.from(document.querySelectorAll('.people p'))
const peopleArray = Array.from(people, p => p.textContent)
// console.log(peopleArray)

function sumAll () {
  const nums = Array.from(arguments)
  console.log(nums.reduce((prev, next) => prev + next, 0))
}
// sumAll(2, 23, 34, 45, 65, 65, 23, 45, 56, 67)

// make an array of all arguments
const ages = Array.of(234, 23, 54, 123, 642, 2, 34)
console.log(ages)

// Array.prototype.find
const posts = [
  {
    "code": "GtlXiSjs",
    "caption": "I'm in Dallas for a conference and doing some training. Enjoying some local brew with my baby",
    "likes": 83,
    "id": "23245",
    "display_src": "instagram.com"
  },
  {
    "code": "FpXlweAsBk",
    "caption": "I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby",
    "likes": 82,
    "id": "12344",
    "display_src": "instagram.com"
  },
  {
    "code": "FpTyHQcau",
    "caption": "I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby",
    "likes": 82,
    "id": "12344",
    "display_src": "instagram.com"
  }
]

const code = 'FpTyHQcau'
const post = posts.filter(post => post.code === code)
const postIndex = posts.findIndex(post => post.code === code)

console.log(post.caption)
console.log(postIndex)

// array.some
const ages = [32, 15, 19, 12];

const adultPresent = ages.some(age => age >= 18);
console.log(adultPresent);

const allOldEnough = ages.every(age => age >= 19);
console.log(allOldEnough);
