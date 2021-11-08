import {Action, createAction, ThunkAction} from '@reduxjs/toolkit';
import {Films} from '../films';
import {State} from '../store';
import {AxiosInstance} from 'axios';

export enum ActionType {
  SetActiveGenre = 'SET_ACTIVE_GENRE',
  SetFilteredFilmsFromGenre = 'SET_FILTERED_FIL_FROM_GENRE',
  SetFilms = 'SET_FILMS',
  RequireAuthorization = 'REQUIRED_AUTHORIZATION',
}

export const setFilms = createAction(
  ActionType.SetFilms,
  (films: Films) => ({
    payload: films,
  }),
);
export const setFilteredFilmsFromGenre = createAction(
  ActionType.SetFilteredFilmsFromGenre,
  (filteredFilmsFromGenre: Films) => ({
    payload: filteredFilmsFromGenre,
  }),
);
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
