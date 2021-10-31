import {ThunkActionResult} from '../types/actions';
import {requireAuthorization, setFilms, setFilteredFilmsFromGenre} from './action';
import {APIRoute, AuthorizationStatus} from '../types/api';
import {RawFilm} from '../types/films';
import {parseFilms} from '../adapters/films';
import {User as UserType} from '../types/user';
import {dropToken, saveToken} from '../services/token';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawFilm[]>(APIRoute.Films);
    dispatch(setFilms(parseFilms(data)));
    dispatch(setFilteredFilmsFromGenre(parseFilms(data)));
  };

export const login = ({email, password}: UserType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<{ token: string }>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };
