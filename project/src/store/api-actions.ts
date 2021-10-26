import {ThunkActionResult} from '../types/actions';
import {setFilms, setFilteredFilmsFromGenre} from './action';
import {APIRoute} from '../types/api';
import {Film} from '../types/films';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilms(data));
    dispatch(setFilteredFilmsFromGenre(data));
  };
