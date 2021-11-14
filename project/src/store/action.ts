import {ActionType} from '../types/actions';
import {Films} from '../types/films';
import {AuthorizationStatus} from '../types/api';
import {UserInfo} from '../types/user';
import {Comments} from '../types/comments';

export const setFilteredFilmsFromGenre = (filteredFilmsFromGenre: Films) => ({
  type: ActionType.SetFilteredFilmsFromGenre,
  payload: filteredFilmsFromGenre,
} as const);
export const setFilms = (films: Films) => ({
  type: ActionType.SetFilms,
  payload: films,
} as const);
export const setComments = (comments: Comments) => ({
  type: ActionType.SetComments,
  payload: comments,
} as const);
export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);
export const setUserInfo = (user: UserInfo) => ({
  type: ActionType.SetUserInfo,
  payload: user,
} as const);
