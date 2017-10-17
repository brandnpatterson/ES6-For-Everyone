import slug from 'slug';
import base64 from 'base-64';
import { url } from './12-modules-config';

function User (name, email, website) {
  return { name, email, website};
};

const createURL = (name) => `${url}/users/${slug(name)}`;

function gravatar (email) {
  const hash = base4(email);
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
}

export { createURL, gravatar };
export default User;
