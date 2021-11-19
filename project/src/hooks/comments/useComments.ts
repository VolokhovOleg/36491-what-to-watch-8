import {RefObject, useEffect} from 'react';
import {LoadCommentsStatus} from '../../types/api';
import {setCommentsLoadState} from '../../types/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentsLoadState} from '../../store/films/selectors';
import {State} from '../../types/store';

type returnHookProps = {
  commentsLoadState: LoadCommentsStatus,
};

export const useComments = (formFieldset: RefObject<HTMLFieldSetElement> | null): returnHookProps => {
  const dispatch = useDispatch();
  const commentsLoadState = useSelector<State, LoadCommentsStatus>(getCommentsLoadState);

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
