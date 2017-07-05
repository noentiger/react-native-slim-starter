import {
  ATTEMPTING_LOGIN,
  LOGOUT,
  LOGIN_USER,
} from './ActionTypes';

import * as constants from './constants';

const initialState = {
  currently: constants.ANONYMOUS,
  uid: null,
  profile: {
    avatarUrl: '',
    displayName: '',
    email: '',
    providerData: [],
  },
  isLoggedIn: false,
  isOnboarded: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPTING_LOGIN:
      return {
        ...state,
        currently: constants.AWAITING_AUTH_RESPONSE,
      };
    case LOGOUT:
      return initialState;
    case LOGIN_USER:
      return {
        ...state,
        currently: constants.LOGGED_IN,
        uid: action.data.user.uid,
        profile: action.data.profile,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
