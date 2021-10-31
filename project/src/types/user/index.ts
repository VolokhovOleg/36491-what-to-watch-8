export type User = {
  email: string,
  password: string,
};

export type RawAuthInfo = {
  id: number,
  email: string,
  name: string,
  ['avatar_url']: string,
  token: string,
};
