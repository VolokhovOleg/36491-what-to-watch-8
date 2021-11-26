import {Comments} from '../../types/comments';
import {useEffect} from 'react';
import {loadComments} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/store';
import {getComments} from '../../store/films/selectors';

type returnHookProps = {
  reviews: Comments,
};

export const useLoadComments = (id: string | number): returnHookProps => {
  const dispatch = useDispatch();
  const reviews = useSelector<State, Comments>(getComments);

  useEffect(() => {
    dispatch(loadComments(id.toString()));
  }, [id]);

  return {reviews};
};
