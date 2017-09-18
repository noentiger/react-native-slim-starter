import {
  ATTEMPTING_LOGIN,
  LOGOUT,
  LOGIN_USER,
  UPDATE_USER_SETTINGS,
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
  settings: {
    isOnboarded: false,
  },
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
        ...action.data,
        ...action.data.user,
        settings: {
          ...state.settings,
          ...action.data.settings,
        },
        currently: constants.LOGGED_IN,
        isLoggedIn: true,
      };
    case UPDATE_USER_SETTINGS:
      return {
        ...state,
        settings: {
          ...action.data,
        },
      };
    default:
      return state;
  }
};
