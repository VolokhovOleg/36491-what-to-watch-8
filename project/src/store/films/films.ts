import {createReducer} from '@reduxjs/toolkit';
import {FilmsState} from '../../types/store';
import {setFilms, setFilteredFilmsFromGenre, setComments} from '../../types/actions';

const initialState: FilmsState = {
  films: [],
  filteredFilmsFromGenre: [],
  comments: [],
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
  builder
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {films};
