import {Films} from '../films';
import {RootState} from '../../store/root-reducer';

export type FilmsState = {
  films: Films,
  filteredFilmsFromGenre: Films,
};

export type State = RootState;
