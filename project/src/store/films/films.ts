import {createReducer} from '@reduxjs/toolkit';
import {FilmsState} from '../../types/store';
import {
  setMyList,
  setFilms,
  setFilteredFilmsFromGenre,
  setComments,
  setCommentsLoadState,
  setCurrentFilmId
} from '../../types/actions';
import {LoadCommentsStatus} from '../../types/api';

const initialState: FilmsState = {
  films: [],
  filteredFilmsFromGenre: [],
  currentFilmId: null,
  myList: [],
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
    .addCase(setCurrentFilmId, (state, action) => {
      state.currentFilmId = action.payload;
    });
  builder
    .addCase(setMyList, (state, action) => {
      state.myList = action.payload;
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
