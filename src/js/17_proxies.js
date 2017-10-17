// const person = { name: 'Brandon', age: 100};
//
// const personProxy = new Proxy(person, {
//   get(target, name) {
//     return target[name].toUpperCase();
//   },
//   set(target, name, value) {
//     if(typeof value === 'String') {
//       target[name] = value.trim();
//     }
//   }
// });

const phoneHandler = {
  set(target, name, value) {
    target[name] = value;
  }
}

const phoneNumbers = new Proxy({}, phoneHandler);
phoneNumbers.home = '234 234 2344';
console.log(phoneNumbers.home);
