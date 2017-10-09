// Fat Arrow functions

// Select all the list items on the page and convert to array
const videos = Array.from(document.querySelectorAll('li[data-time]'))

// Filter for only the elements that contain the word 'flexbox'
const filtered = videos
  .filter(video => video.textContent.toLowerCase().includes('flexbox'))
  // map down to a list of time strings
  .map(video => video.dataset.time)
  // map to an array of seconds
  .map(timecode => {
    const parts = timecode.split(':').map(part => parseFloat(part))
    return parts[0] * 60 + parts[1]
  })
  // reduce to get total
  .reduce((runningTotal, seconds) => runningTotal + seconds, 0)

// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
console.log(filtered)

// 1. Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]
const large = numbers.filter(n => n > 70)
console.log(large)
