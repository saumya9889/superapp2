// accepts a string: (at least two letters)[text + (space/apostrophe/hyphen)]{min-length: 2}
export const nameIsValid = (name) => {
  const regex = new RegExp("^(?=(.*[a-zA-Z]){2})[A-Za-z\\s'-]{2,}$");
  return regex.test(name);
};

// accepts string: [text-lowercase]@[text-lowercase].[text-lowercase]{length: 2-3}
export const emailIsValid = (email) => {
  const regex = new RegExp("^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$");
  return regex.test(email);
};

// accepts a string: (at least two letters)[text + (number/underscore)]
export const usernameIsValid = (usernanme) => {
  const regex = new RegExp("^(?=(.*[a-zA-Z]){2})[a-zA-Z0-9_]{4,16}$");
  return regex.test(usernanme);
};

// accepts a string: [numbers]{exact 10}
export const contactIsValid = (contact) => {
  const regex = new RegExp("^[0-9]{10}$");
  return regex.test(contact);
};
