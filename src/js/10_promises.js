/* globals twttr ga */
/* eslint-disable no-extend-disable */

// const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts')
//   .then(data => data.json())
//   .then(data => console.log(data))
//   .catch((err) => console.error(err))

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error('Error!'));
//   }, 1000)
// });
//
// p
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//

// eslint disabled line per line
const disableEslintOneRule = {
  /* eslint-disable no-extend-native */
  name: 'Brandon',
  age: 29
  /* eslint-enable no-extend-native */
}

const disableEslintAllRules = {
  /* eslint-disable */
  name: 'Brandon',
  age: 29
  /* eslint-enable */
}


const disableEslintThenEnable = {
  /* eslint-disable */
  name: 'Brandon',
  age: 29,
  /* eslint-enable */
  sex: 'male',
  town: 'Roanoke'
}

const posts = [
  { title: 'I love JavaScript', author_id: 34, id: 1 },
  { title: 'CSS!', author_id: 42, id: 2 },
  { title: 'Dev tools tricks', author_id: 26, id: 3 },
];

const authors = [
  {
    name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer', id: 34,
  },
  {
    name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen', id: 42,
  },
  {
    name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler', id: 26,
  },
];

function getPostById(id) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // use a setTimeout to mimick a database
    setTimeout(() => {
      const post = posts.find(post => post.id === id);
      if (post) {
        resolve(post);
      } else {
        reject(Error('No post was found!'));
      }
    }, 200);
  });
}

function hydrateAuthor(post) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // find the author
    const authorDetails = authors.find(person => person.id === post.author_id);
    if (authorDetails) {
      // hydrate the post obj with the author object
      post.author = authorDetails;
      delete post.author_id;
      resolve(post);
    } else {
      reject(Error('Cannot find the author'));
    }
  });
}

// getPostById(1)
//   .then(post => {
//     return hydrateAuthor(post);
//   })
//   .then(post => {
//     console.log(post);
//   })
//   .catch(err => {
//     console.log(err);
//   });
//
// Promise.all -- using multiple promises
// const weather = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ temp: 29, conditions: 'Sunny with Clouds'});
//   }, 2000);
// });
//
// const tweets = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(['I like cake', 'BBQ is good too!']);
//   }, 500);
// });
//
// Promise
//   .all([weather, tweets])
//   .then(responses => {
//     const [weatherInfo, tweetsInfo] = responses;
//     console.log(weatherInfo, tweetsInfo);
//   });

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then(responses => Promise.all(responses.map(res => res.json())))
// there are many different types of data that can come back
// it isn't always JSON
  .then((responses) => {
    console.log(responses); 1;
  });

// globals set at the top of file
ga.track();
twttr.trackConversation();
