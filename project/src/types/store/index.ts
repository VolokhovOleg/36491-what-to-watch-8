import {Film} from '../films';
import {AuthorizationStatus} from '../api';

export type State = {
  films: Film[] ,
  filteredFilmFromGenre: Film[],
  genre: string,
  authorizationStatus: AuthorizationStatus,
};
