export enum Path {
  MAIN = '/',
  LOGIN = '/login',
  FILMS = '/films/:id',
  ADD_REVIEW = '/films/:id/review',
  PLAYER = '/player/:id',
  MY_LIST = '/mylist',
}
export type RouteParams = {
  id: string
};
