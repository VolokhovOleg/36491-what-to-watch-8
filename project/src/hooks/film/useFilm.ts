import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/store';
import {Film, Film as FilmType, Films} from '../../types/films';
import {getFilms} from '../../store/films/selectors';
import {useEffect, useState} from 'react';
import {setCurrentFilmId} from '../../types/actions';

type returnHookProps = {
  activeFilm: Film | null,
  films: Films,
};

export const useFilm = (id: string): returnHookProps => {
  const dispatch = useDispatch();
  const films = useSelector<State, Films>(getFilms);
  const [activeFilm, setActiveFilm] = useState<FilmType | null>(null);

  useEffect(() => {
    dispatch(setCurrentFilmId(parseInt(id, 10)));
    setActiveFilm(films.find((item: FilmType) => item.id.toString() === id) || null);
  }, []);

  return {activeFilm, films};
};
