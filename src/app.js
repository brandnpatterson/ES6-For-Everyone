// import './js/1_new-variables';
// import './js/2_arrow';
// import './js/2-arrow-ex';
// import './js/3_template-string';
// import './js/3-template-string-ex';
// import './js/4_strings';
// import './js/5_destructuring';
// import './js/6_for-of';
// import './js/7_array-find';
// import './js/8_rest-operator';
// import './js/9_object-literals';
// import './js/10_promises';
// import './js/11_symbols';
// import './js/12_modules';

import {
  apiKey as myKey,
  sayHi,
  url } from './js/12-modules-config';
import User, { createURL, gravatar } from './js/12-modules-more';

const brandon = new User('Brandon', 'brandnpatterson@gmail.com', url);
const profile = createURL(brandon.name);
console.log(profile);
