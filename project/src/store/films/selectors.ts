import {State} from '../../types/store';
import {Films} from '../../types/films';
import {NameSpace} from '../root-reducer';
import {Comments} from '../../types/comments';

export const getFilms = (state: State): Films => state[NameSpace.films].films;
export const getComments = (state: State): Comments => state[NameSpace.films].comments;
export const getFilteredFilmsFromGenre = (state: State): Films => state[NameSpace.films].filteredFilmsFromGenre;
