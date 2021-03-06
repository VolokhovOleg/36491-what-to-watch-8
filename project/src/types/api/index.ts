export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum HttpCode {
  Unauthorized = 401,
}
export type UnauthorizedCallback = () => void;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}
