interface User {
  id: object,
  username: string,
  name: string,
  email: string,
  password: string
};

interface newUser {
  username: string,
  name: string,
  email: string,
  password: string
};

export { User, newUser };