import {State} from '../../types/store';
import {NameSpace} from '../root-reducer';
import {AuthorizationStatus} from '../../types/api';

export const getAuthState = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
