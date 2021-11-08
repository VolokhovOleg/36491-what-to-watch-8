import {ActionType} from '../types/actions';
import {Films} from '../types/films';
import {AuthorizationStatus} from '../types/api';

export const setActiveGenre = (genre: string) => ({
  type: ActionType.SetActiveGenre,
  payload: genre,
} as const);
export const setFilteredFilmsFromGenre = (filteredFilmsFromGenre: Films) => ({
  type: ActionType.SetFilteredFilmsFromGenre,
  payload: filteredFilmsFromGenre,
} as const);
export const setFilms = (films: Films) => ({
  type: ActionType.SetFilms,
  payload: films,
} as const);
export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);
