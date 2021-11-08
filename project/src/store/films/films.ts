import {createReducer} from '@reduxjs/toolkit';
import {FilmsState} from '../../types/store';
import {setFilms, setFilteredFilmsFromGenre} from '../../types/actions';

const initialState: FilmsState = {
  films: [],
  filteredFilmsFromGenre: [],
};

const films = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
  builder
    .addCase(setFilteredFilmsFromGenre, (state, action) => {
      state.filteredFilmsFromGenre = action.payload;
    });
});

export {films};
