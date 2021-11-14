import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/store';
import {AuthorizationStatus} from '../../types/api';
import {getAuthState} from '../../store/user/selectors';
import {RefObject, useRef} from 'react';
import {login} from '../../store/api-actions';

type returnHookProps = {
  onClickSubmitHandler: () => void,
  loginRef: RefObject<HTMLInputElement>,
  passwordRef: RefObject<HTMLInputElement>,
  authorizationStatus: AuthorizationStatus,
};

export const useSignIn = (): returnHookProps => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector<State, AuthorizationStatus>(getAuthState);
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onClickSubmitHandler = (): void => {
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return {onClickSubmitHandler, loginRef, passwordRef, authorizationStatus};
};
