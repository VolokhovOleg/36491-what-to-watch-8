import {Films} from '../films';
import {RootState} from '../../store/root-reducer';
import {AuthorizationStatus} from '../api';
import {UserInfo} from '../user';

export type FilmsState = {
  films: Films,
  filteredFilmsFromGenre: Films,
};

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  user: UserInfo,
};

export type State = RootState;
