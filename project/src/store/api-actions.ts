import {setCommentsLoadState, ThunkActionResult} from '../types/actions';
import {requireAuthorization, setComments, setFilms, setFilteredFilmsFromGenre, setUserInfo, setMyList} from './action';
import {APIRoute, AuthorizationStatus, LoadCommentsStatus} from '../types/api';
import {CurrentFilmId, Film, Films, RawFilm} from '../types/films';
import {parseFilm, parseFilms} from '../adapters/films';
import {RawUserInfo, User as UserType} from '../types/user';
import {dropToken, saveToken} from '../services/token';
import {NameSpace} from './root-reducer';
import {ALL_GENRES, AUTH_FAIL_MESSAGE, FILM_ID_FAIL_MESSAGE} from '../consts';
import {parseUserInfo} from '../adapters/user';
import {Comments, ReviewType} from '../types/comments';
import {toast} from 'react-toastify';

export const postComments = (id: string, review: ReviewType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
  try {
    dispatch(setCommentsLoadState(LoadCommentsStatus.Load));
    const {data} = await api.post<Comments>(APIRoute.Comments.replace(':id', id), review);
    dispatch(setComments(data));
    dispatch(setCommentsLoadState(LoadCommentsStatus.Done));
  } catch (error) {
    toast.info(error);
    dispatch(setCommentsLoadState(LoadCommentsStatus.Error));
  }
  };

export const loadComments = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Comments>(APIRoute.Comments.replace(':id', id));
      dispatch(setComments(data));
    } catch (error) {
      toast.info(error);
    }
  };

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawFilm[]>(APIRoute.Films);
      const parsedFilms: Films = parseFilms(data);
      dispatch(setFilms(parsedFilms));
    } catch (error) {
      toast.info(error);
    }
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

export const loadMyList = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawFilm[]>(APIRoute.Favorite);
      const parsedFilms: Films = parseFilms(data);
      dispatch(setMyList(parsedFilms));
    } catch (error) {
      toast.info(error);
    }
  };

export const changeMyList = (status: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const id: CurrentFilmId = _getState()[NameSpace.films].currentFilmId;
      if (id !== null) {
        await api.post<RawFilm>(
          APIRoute.Post_Favorite
            .replace(':id', id.toString())
            .replace(':status', status.toString())
        );
        const {data} = await api.get<RawFilm[]>(APIRoute.Favorite)
        const parsedFilms: Films = parseFilms(data);
        dispatch(setMyList(parsedFilms));
      } else {
        toast.info(FILM_ID_FAIL_MESSAGE);
      }
    } catch (error) {
      toast.info(error);
    }
  };

export const login = ({email, password}: UserType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<RawUserInfo>(APIRoute.Login, {email, password});
      const parsedUserInfo = parseUserInfo(data);
      saveToken(parsedUserInfo ? parsedUserInfo.token : '');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(parsedUserInfo));
    } catch (error) {
      toast.info(error);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserInfo(null));
    } catch(error) {
      toast.info(error);
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
  try {
    const {data} = await api.get<RawUserInfo>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserInfo(parseUserInfo(data)));
  } catch {
    toast.info(AUTH_FAIL_MESSAGE);
  }
  };
