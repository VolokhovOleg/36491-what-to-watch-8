import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/store';
import {Films} from '../../types/films';
import {getFilms} from '../../store/films/selectors';
import {useEffect} from 'react';
import {loadFilms} from '../../store/api-actions';

type returnHookProps = {
  films: Films,
};

export const useAppInit = (): returnHookProps  => {
  const dispatch = useDispatch();
  const films = useSelector<State, Films>(getFilms);

  useEffect(() => {
    dispatch(loadFilms());
  }, []);

  return {films};
};
