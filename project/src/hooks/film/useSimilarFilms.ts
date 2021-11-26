import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/store';
import {Film, Films} from '../../types/films';
import {getSimilarFilms} from '../../store/films/selectors';
import {useEffect} from 'react';
import {loadSimilarFilms} from '../../store/api-actions';

type returnHookProps = {
  similarFilms: Films,
};

export const useSimilarFilms = (id: string | number): returnHookProps => {
  const dispatch = useDispatch();
  const similarFilms = useSelector<State, Films>(getSimilarFilms);

  useEffect(() => {
    dispatch(loadSimilarFilms(id));
  }, [id]);

  return {similarFilms};
};
