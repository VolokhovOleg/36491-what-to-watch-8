import {ActionType} from '../types/actions';
import {Film} from '../types/films';
import {AuthorizationStatus} from '../types/api';

export const setActiveGenre = (genre: string) => ({
  type: ActionType.SetActiveGenre,
  payload: genre,
} as const);
export const setFilteredFilmsFromGenre = (films: Film[]) => ({
  type: ActionType.SetFilteredFilmsFromGenre,
  payload: films,
} as const);
export const setFilms = (films: Film[]) => ({
  type: ActionType.SetFilms,
  payload: {films},
} as const);
export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);
