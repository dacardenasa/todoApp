export type UserCredentials = {
  username: string;
  password: string;
};

export type User = {
  username: string;
  uid: string;
};

export type UserLoginResponse = {
  user: User;
  token: string;
};

export type UserRegisterResponse = {
  username: string;
  createdAt: Date;
  updatedAt: Date;
  uid: string;
}
