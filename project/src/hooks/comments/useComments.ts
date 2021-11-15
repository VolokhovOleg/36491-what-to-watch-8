import {RefObject, useEffect} from 'react';
import {LoadCommentsStatus} from '../../types/api';
import {setCommentsLoadState} from '../../types/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentsLoadState} from '../../store/films/selectors';

export const useComments = (formFieldset: RefObject<HTMLFieldSetElement> | null) => {
  const dispatch = useDispatch();
  const commentsLoadState = useSelector(getCommentsLoadState);

  useEffect(() => {
    if (formFieldset && formFieldset.current) {
      switch (commentsLoadState) {
        case LoadCommentsStatus.Load:
          formFieldset.current.disabled = true;
          break;
        case LoadCommentsStatus.Error:
          formFieldset.current.disabled = false;
          break;
        default:
          formFieldset.current.disabled = false;
          break;
      }
    }
  }, [commentsLoadState]);

  useEffect(() => {
    return () => {
      dispatch(setCommentsLoadState(LoadCommentsStatus.Unknown));
    };
  }, []);

  return {commentsLoadState};
};
