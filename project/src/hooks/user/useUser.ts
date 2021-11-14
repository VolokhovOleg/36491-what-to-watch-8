import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/store';
import {AuthorizationStatus} from '../../types/api';
import {getAuthState, getUserInfo} from '../../store/user/selectors';
import {UserInfo} from '../../types/user';
import {SyntheticEvent} from 'react';
import {logoutAction} from '../../store/api-actions';

type returnHookProps = {
  onClickLogOutHandler: (evt: SyntheticEvent) => void,
  userInfo: UserInfo,
  authorizationStatus: AuthorizationStatus,
};

export const useUser = (): returnHookProps => {
  const authorizationStatus = useSelector<State, AuthorizationStatus>(getAuthState);
  const userInfo = useSelector<State, UserInfo>(getUserInfo);
  const dispatch = useDispatch();

  const onClickLogOutHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return {authorizationStatus, userInfo, onClickLogOutHandler};
};
