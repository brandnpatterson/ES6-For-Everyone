// fetch('https://api.github.com/users/brandnpatterson')
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
//
// const video = document.querySelector('.video');
//
// navigator.mediaDevices
//   .getUserMedia({ video: true })
//   .then(mediaStream => {
//     video.srcObject = mediaStream;
//     video.load();
//     video.play();
//   })
//   .catch(err => console.log(err));

// breathe(1000, function () {
//   breathe(2000, function () {
//     breathe(2000, function () {
//       breathe(2000, function () {
//         breathe(2000, function () {
//           breathe(2000, function () {
//
//           })
//         })
//       })
//     })
//   })
// });

// function breathe(amount) {
//   return new Promise((resolve, reject) => {
//     if (amount < 500) {
//       reject('That is too small of a value');
//     }
//     setTimeout(() => resolve(`Done for ${amount} ms`), amount);
//   });
// }
//
// breathe(600).then(res => {
//   console.log(res);
//   return breathe(500);
// }).then(res => {
//   console.log(res);
//   return breathe(700);
// }).then(res => {
//   console.log(res);
//   return breathe(500);
// }).then(res => {
//   console.log(res);
//   return breathe(800);
// }).then(res => {
//   console.log(res);
//   return breathe(1000);
// }).then(res => {
//   console.log(res);
//   return breathe(500);
// }).then(res => {
//   console.log(res);
//   return breathe(200);
// }).catch(err => console.error(err));

// setInterval(() => console.log(Date.now()), 500);

// function breathe(amount) {
//   return new Promise((resolve, reject) => {
//     if (amount < 500) {
//       reject('That is too small of a value');
//     }
//     setTimeout(() => resolve(`Done for ${amount} ms`), amount);
//   });
// }

// const go = async () => {
//   try {
//     console.log('Let\'s go!...');
//     const res = await breathe(500);
//     console.log('3');
//     const res2 = await breathe(500);
//     console.log('2');
//     const res3 = await breathe(500);
//     console.log('1');
//     const res4 = await breathe(500);
//     console.log(res4);
//     const res5 = await breathe(500);
//     console.log(res5);
//     const res6 = await breathe(500);
//     console.log(res6);
//     const res7 = await breathe(500);
//     console.log(res7);
//     const res8 = await breathe(500);
//     console.log(res5);
//     const res9 = await breathe(500);
//     console.log(res9);
//     const res10 = await breathe(500);
//     console.log(res10);
//     console.log('end');
//   } catch (err) {
//     console.error(err);
//   }
// };
// go();

// const catchErrors = fn => {
//   return (...args) => {
//     return fn(...args).catch((err) => console.log(err))
//   }
// };
//
// const go = async (name, last) => {
//   console.log(`Let's go, ${name} ${last}!!`);
//   const res = await breathe(500);
//   console.log('3');
//   const res2 = await breathe(500);
//   console.log('2');
//   const res3 = await breathe(500);
//   console.log('1');
//   const res4 = await breathe(500);
//   console.log(res4);
//   const res5 = await breathe(500);
//   console.log(res5);
//   const res6 = await breathe(500);
//   console.log(res6);
//   const res7 = await breathe(500);
//   console.log(res7);
//   const res8 = await breathe(500);
//   console.log(res5);
//   const res9 = await breathe(500);
//   console.log(res9);
//   const res10 = await breathe(500);
//   console.log(res10);
//   console.log('end');
// };
//
// const wrappedFunction = catchErrors(go);
//
// wrappedFunction('Brandon', 'Patterson');

// async function go () {
//   const p1 = fetch('https://api.github.com/users/wesbos');
//   const p2 = fetch(`https://api.github.com/users/stolinski`);
//
//   // Wait for both of them to come back
//   const res = await Promise.all([p1, p2]);
//   const dataPromises = res.map(r => r.json());
//   const[wes, scott] = await Promise.all(dataPromises);
//   console.log(wes, scott);
// }

// go();

const users = [
  'brandnpatterson',
  'wesbos',
  'stolinski'
];


!async function getData (names) {
  const promises = names
    .map(name => fetch(`https://api.github.com/users/${name}`)
    .then(r => r.json()));
  const people = await Promise.all(promises);
  console.log(people);
}(users);

// Call Back
// navigator.geolocation.getCurrentPosition(function (pos) {
//   console.log('It worked!');
//   console.log(pos);
// }, function (err) {
//   console.log('It failed');
//   console.log(err);
// });
//
// async function go () {
//   const pos = await getCurrentPosition();
//   console.log(pos);
// };
//
// go();

// Promisified
function getCurrentPosition (...args) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition (...args, resolve, reject);
  });
}

!async function go () {
  console.log('starting');
  const pos = await getCurrentPosition();
  console.log(pos);
  console.log('finished');
}();
