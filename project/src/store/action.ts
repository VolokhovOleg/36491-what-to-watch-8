import {ActionType} from '../types';
import {Film} from '../moks/films';

export const setActiveGenre = (genre: string) => ({
  type: ActionType.SetActiveGenre,
  payload: genre,
} as const);
export const setFilteredFilmsFromGenre = (films: Film[]) => ({
  type: ActionType.SetFilteredFilmsFromGenre,
  payload: films,
} as const);
