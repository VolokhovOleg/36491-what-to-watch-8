import {State} from '../../types/store';
import {NameSpace} from '../root-reducer';
import {AuthorizationStatus} from '../../types/api';
import {UserInfo} from '../../types/user';

export const getAuthState = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getUserInfo = (state: State): UserInfo => state[NameSpace.user].user;
