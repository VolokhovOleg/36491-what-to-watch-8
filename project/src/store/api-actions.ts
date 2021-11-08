import {ThunkActionResult} from '../types/actions';
import {requireAuthorization, setFilms, setFilteredFilmsFromGenre} from './action';
import {APIRoute, AuthorizationStatus} from '../types/api';
import {Film, Films, RawFilm} from '../types/films';
import {parseFilms} from '../adapters/films';
import {User as UserType} from '../types/user';
import {dropToken, saveToken} from '../services/token';
import {NameSpace} from './root-reducer';
import {ALL_GENRES} from '../consts';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawFilm[]>(APIRoute.Films);
    const parsedFilms: Films = parseFilms(data);
    dispatch(setFilteredFilmsFromGenre(parsedFilms));
    dispatch(setFilms(parsedFilms));
  };

export const setFilteredFilms = (genre: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const films: Films = _getState()[NameSpace.films].films;

    if (genre !== ALL_GENRES) {
      dispatch(setFilteredFilmsFromGenre(films.filter((item: Film) => item.genre === genre)));
    } else {
      dispatch(setFilteredFilmsFromGenre(films));
    }
  };

export const login = ({email, password}: UserType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    // const {data: {token}} = await api.post<{ token: string }>(APIRoute.Login, {email, password});
    // saveToken(token);
    // dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    // await api.delete(APIRoute.Logout);
    // dropToken();
    // dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    // await api.get(APIRoute.Login);
    // dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };
