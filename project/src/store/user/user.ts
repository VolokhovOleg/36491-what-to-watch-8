import {createReducer} from '@reduxjs/toolkit';
import {UserState} from '../../types/store';
import {AuthorizationStatus} from '../../types/api';
import {requireAuthorization, setUserInfo} from '../../types/actions';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
  builder
    .addCase(setUserInfo, (state, action) => {
      state.user = action.payload;
    });
});

export {user};
