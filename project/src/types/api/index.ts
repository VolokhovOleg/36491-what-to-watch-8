export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum LoadCommentsStatus {
  Load = 'LOAD',
  Error = 'ERROR',
  Unknown = 'UNKNOWN',
  Done = 'DONE',
}
export enum HttpCode {
  Unauthorized = 401,
}
export type UnauthorizedCallback = () => void;

export enum APIRoute {
  Films = '/films',
  Film_Similar = '/films/:id/similar',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Post_Favorite = '/favorite/:id/:status',
}
