export type UserRegisterDTO = {
  first_name: string;
  last_name: string;
  nickname: string;
  password: string;
};

export type UserLoginDTO = {
  nickname: string;
  password: string;
}
