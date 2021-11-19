import {CurrentFilmId, Films} from '../films';
import {RootState} from '../../store/root-reducer';
import {AuthorizationStatus, LoadCommentsStatus} from '../api';
import {UserInfo} from '../user';
import {Comments} from '../comments';

export type FilmsState = {
  films: Films,
  filteredFilmsFromGenre: Films,
  myList: Films,
  comments: Comments,
  commentsLoadState: LoadCommentsStatus,
  currentFilmId: CurrentFilmId,
};

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  user: UserInfo,
};

export type State = RootState;
