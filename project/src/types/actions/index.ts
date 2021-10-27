import {requireAuthorization, setActiveGenre, setFilms, setFilteredFilmsFromGenre} from '../../store/action';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from '../store';

export enum ActionType {
  SetActiveGenre = 'SET_ACTIVE_GENRE',
  SetFilteredFilmsFromGenre = 'SET_FILTERED_FIL_FROM_GENRE',
  SetFilms = 'SET_FILMS',
  RequireAuthorization = 'REQUIRED_AUTHORIZATION',
}
export type Actions =
  | ReturnType<typeof setActiveGenre>
  | ReturnType<typeof setFilteredFilmsFromGenre>
  | ReturnType<typeof setFilms>
  | ReturnType<typeof requireAuthorization>
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
