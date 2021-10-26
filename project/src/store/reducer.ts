import {Actions, ActionType} from '../types/actions';
import {State} from '../types/store';
import {ALL_GENRES} from '../consts';
import {AuthorizationStatus} from '../types/api';

const initialState = {
  genre: ALL_GENRES,
  films: [],
  filteredFilmFromGenre: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetActiveGenre:
      return {...state, genre: action.payload};
    case ActionType.SetFilms:
      return {
        ...state,
        films: action.payload.films,
      };
    case ActionType.SetFilteredFilmsFromGenre:
      return {
        ...state,
        filteredFilmFromGenre: state.genre !== ALL_GENRES
          ? action.payload.filter((item) => item.genre === state.genre)
          : state.films,
      };
    default:
      return state;
  }
};

export {reducer};
