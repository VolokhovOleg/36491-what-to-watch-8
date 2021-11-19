import {createSelector} from 'reselect';
import {State} from '../../types/store';
import {CurrentFilmId, Films} from '../../types/films';
import {NameSpace} from '../root-reducer';
import {Comments} from '../../types/comments';
import {LoadCommentsStatus} from '../../types/api';


export const getFilms = (state: State): Films => state[NameSpace.films].films;
export const getMyList = (state: State): Films => state[NameSpace.films].myList;
export const getCurrentFilmId = (state: State): CurrentFilmId => state[NameSpace.films].currentFilmId;
export const getComments = (state: State): Comments => state[NameSpace.films].comments;
export const getFilteredFilmsFromGenre = (state: State): Films => state[NameSpace.films].filteredFilmsFromGenre;
export const getCommentsLoadState = (state: State): LoadCommentsStatus => state[NameSpace.films].commentsLoadState;
export const getMyListFilmById = createSelector(
  getFilms,
  getCurrentFilmId,
  (films, id) => {
    return films.filter((item) => item.id === id)[0];
  }
);
