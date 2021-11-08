import {State} from '../../types/store';
import {Films} from '../../types/films';
import {NameSpace} from '../root-reducer';

export const getFilms = (state: State): Films => state[NameSpace.films].films;
export const getFilteredFilmsFromGenre = (state: State): Films => state[NameSpace.films].filteredFilmsFromGenre;
