export type User = {
  email: string,
  password: string,
};

export type RawUserInfo = {
  id: number,
  email: string,
  name: string,
  ['avatar_url']: string,
  token: string,
};
export type UserInfo = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: string,
} | null;
