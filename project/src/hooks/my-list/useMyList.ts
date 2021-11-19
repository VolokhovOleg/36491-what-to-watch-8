import {useDispatch, useSelector} from 'react-redux';
import {getMyList} from '../../store/films/selectors';
import {useEffect} from 'react';
import {loadMyList} from '../../store/api-actions';
import {Films} from '../../types/films';

type returnHookProps = {
  films: Films,
};

export const useMyList = (): returnHookProps => {
  const dispatch = useDispatch();
  const films = useSelector(getMyList);

  useEffect(() => {
    dispatch(loadMyList());
  }, []);

  return {films};
};
