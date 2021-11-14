import {useSelector} from 'react-redux';
import {State} from '../../types/store';
import {Film, Films} from '../../types/films';
import {getFilms, getFilteredFilmsFromGenre} from '../../store/films/selectors';
import {useEffect, useState} from 'react';

type returnHookProps = {
  films: Films,
  filmCard: Film | null,
  filteredFilmFromGenre: Films,
};

export const useFilms = (): returnHookProps => {
  const films = useSelector<State, Films>(getFilms);
  const filteredFilmFromGenre = useSelector<State, Films>(getFilteredFilmsFromGenre);
  const [filmCard, setFilmCardState] = useState<Film | null>(null);

  useEffect(() => {
    setFilmCardState(films[0]);
  }, []);

  return {films, filmCard, filteredFilmFromGenre};
};
