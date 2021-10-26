import {ThunkActionResult} from '../types/actions';
import {setFilms, setFilteredFilmsFromGenre} from './action';
import {APIRoute} from '../types/api';
import {RawFilm} from '../types/films';
import {parseFilms} from '../adapters/films';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawFilm[]>(APIRoute.Films);
    dispatch(setFilms(parseFilms(data)));
    dispatch(setFilteredFilmsFromGenre(parseFilms(data)));
  };
