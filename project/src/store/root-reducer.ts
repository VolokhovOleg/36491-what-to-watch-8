import {combineReducers} from 'redux';
import {films} from './films/films';

export enum NameSpace {
  films = 'FILMS',
}

export const rootReducer = combineReducers({
  [NameSpace.films]: films,
});

export type RootState = ReturnType<typeof rootReducer>;
