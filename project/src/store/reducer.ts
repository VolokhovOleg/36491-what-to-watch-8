import {Actions, ActionType, State} from '../types';
import {films} from '../moks/films';
import {ALL_GENRES} from '../consts';

const initialState = {
  genre: '',
  films: films,
  filteredFilmFromGenre: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetActiveGenre:
      return {...state, genre: action.payload};
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
