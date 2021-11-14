import {Films} from '../films';
import {RootState} from '../../store/root-reducer';
import {AuthorizationStatus} from '../api';
import {UserInfo} from '../user';
import {Comments} from '../comments';

export type FilmsState = {
  films: Films,
  filteredFilmsFromGenre: Films,
  comments: Comments,
};

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  user: UserInfo,
};

export type State = RootState;
