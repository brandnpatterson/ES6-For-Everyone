// stepped functions -- ajax requests that require one after another
// function* listPeople () {
//   let i = 0;
//   yield i;
//   i++;
//   yield i;
//   i++;
//   yield i;
//   // or loop through with for in
// }
//
// const people = listPeople();
// console.log(people.next());
// console.log(people.next());
// console.log(people.next());
// console.log(people.next());
//
function* message () {
  yield 'Hello';
  yield 'World';
  yield '!';
  yield 'Hello';
  yield 'World';
  yield '!';
  yield 'Hello';
  yield 'World';
  yield '!';
}

const hello = message();

for (const line of hello) {
  console.log(line);
}
