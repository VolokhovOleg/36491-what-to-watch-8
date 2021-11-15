import {Action, createAction, ThunkAction} from '@reduxjs/toolkit';
import {Films} from '../films';
import {State} from '../store';
import {AxiosInstance} from 'axios';
import {AuthorizationStatus, LoadCommentsStatus} from '../api';
import {UserInfo} from '../user';
import {Comments} from '../comments';

export enum ActionType {
  SetActiveGenre = 'SET_ACTIVE_GENRE',
  SetFilteredFilmsFromGenre = 'SET_FILTERED_FIL_FROM_GENRE',
  SetFilms = 'SET_FILMS',
  RequireAuthorization = 'REQUIRED_AUTHORIZATION',
  SetUserInfo = 'SET_USER_INFO',
  SetComments = 'SET_COMMENTS',
  SetCommentsLoadState = 'SET_COMMENTS_LOAD_STATE',
}

export const setCommentsLoadState = createAction(
  ActionType.SetCommentsLoadState,
  (commentsLoadState: LoadCommentsStatus) => ({
    payload: commentsLoadState,
  }),
);
export const setComments = createAction(
  ActionType.SetComments,
  (comments: Comments) => ({
    payload: comments,
  }),
);
export const setFilms = createAction(
  ActionType.SetFilms,
  (films: Films) => ({
    payload: films,
  }),
);
export const setUserInfo = createAction(
  ActionType.SetUserInfo,
  (userInfo: UserInfo) => ({
    payload: userInfo,
  }),
);
export const setFilteredFilmsFromGenre = createAction(
  ActionType.SetFilteredFilmsFromGenre,
  (filteredFilmsFromGenre: Films) => ({
    payload: filteredFilmsFromGenre,
  }),
);
export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus,
  }),
);
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
