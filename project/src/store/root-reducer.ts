import {combineReducers} from 'redux';
import {films} from './films/films';
import {user} from './user/user';

export enum NameSpace {
  films = 'FILMS',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.films]: films,
  [NameSpace.user]: user,
});

export type RootState = ReturnType<typeof rootReducer>;
