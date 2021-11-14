import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {ALL_GENRES, STEP_FILM_AMOUNT} from '../../consts';
import {Film, Films} from '../../types/films';
import {setFilteredFilms} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

type returnHookProps = {
  genres: string[] | null,
  onChangeGenreTabHandler: (tabName: string) => void,
};

export const useGenres = (films: Films, setFilmAmountToShowState: Dispatch<SetStateAction<number>>): returnHookProps => {
  const dispatch = useDispatch();
  const [activeGenre, setActiveGenreState] = useState<string>(ALL_GENRES);
  const [genres, setGenresState] = useState<string[] | null>(null);

  const onChangeGenreTabHandler = (tabName: string) => {
    setActiveGenreState(tabName);
    setFilmAmountToShowState(STEP_FILM_AMOUNT);
  };

  useEffect(() => {
    setGenresState([...new Set([ALL_GENRES, ...films.map((item: Film) => item.genre)])]);
  }, []);
  useEffect(() => {
    dispatch(setFilteredFilms(activeGenre));
  }, [activeGenre]);

  return {genres, onChangeGenreTabHandler};
};
