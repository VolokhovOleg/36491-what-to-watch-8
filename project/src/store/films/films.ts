import {createReducer} from '@reduxjs/toolkit';
import {FilmsState} from '../../types/store';
import {setFilms, setFilteredFilmsFromGenre, setComments, setCommentsLoadState} from '../../types/actions';
import {LoadCommentsStatus} from '../../types/api';

const initialState: FilmsState = {
  films: [],
  filteredFilmsFromGenre: [],
  comments: [],
  commentsLoadState: LoadCommentsStatus.Unknown,
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
  builder
    .addCase(setCommentsLoadState, (state, action) => {
      state.commentsLoadState = action.payload;
    });
});

export {films};
