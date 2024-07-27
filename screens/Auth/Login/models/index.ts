export type User = {
  username: string;
  uid: string;
};

export type UserLoginResponse = {
  user: User;
  token: string;
};
